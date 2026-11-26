type ValidatableField = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

interface FormValidationOptions {
  summaryBox?: HTMLElement | null;
  summaryTextEl?: HTMLElement | null;
  onValidSubmit?: (form: HTMLFormElement) => void;
}

const INVALID_FIELD_CLASSES = ['!border-[#DC2626]', '!ring-2', '!ring-[#DC2626]/15'];

function isValidatableField(el: Element): el is ValidatableField {
  return (
    el instanceof HTMLInputElement ||
    el instanceof HTMLSelectElement ||
    el instanceof HTMLTextAreaElement
  );
}

function getFieldLabel(form: HTMLFormElement, field: ValidatableField): string {
  if (field.dataset.fieldLabel) return field.dataset.fieldLabel;

  if (field.id) {
    const labelEl = form.querySelector<HTMLLabelElement>(`label[for="${CSS.escape(field.id)}"]`);
    if (labelEl?.textContent) {
      return labelEl.textContent.replace(/\*/g, '').trim();
    }
  }

  return field.getAttribute('aria-label') ?? 'Kolom ini';
}

function getErrorMessage(form: HTMLFormElement, field: ValidatableField): string {
  if (field instanceof HTMLInputElement && field.type === 'checkbox') {
    return 'Silakan centang kotak persetujuan terlebih dahulu.';
  }

  const label = getFieldLabel(form, field);

  if (field.validity.valueMissing) {
    if (field instanceof HTMLSelectElement) {
      return `Silakan pilih ${label} terlebih dahulu.`;
    }
    return `${label} wajib diisi terlebih dahulu.`;
  }

  if (field.validity.typeMismatch && field instanceof HTMLInputElement && field.type === 'email') {
    return 'Format email belum valid (contoh: nama@email.com).';
  }

  return `Mohon periksa kembali isian ${label}.`;
}

function getErrorHost(field: ValidatableField): HTMLElement {
  if (field instanceof HTMLInputElement && field.type === 'checkbox') {
    const labelWrapper = field.closest('label');
    if (labelWrapper) return labelWrapper;
  }

  if (field instanceof HTMLSelectElement && field.parentElement?.classList.contains('relative')) {
    return field.parentElement;
  }

  return field;
}

function clearFieldError(field: ValidatableField) {
  field.classList.remove(...INVALID_FIELD_CLASSES);
  field.removeAttribute('aria-invalid');

  const host = getErrorHost(field);
  const next = host.nextElementSibling;
  if (next?.hasAttribute('data-field-error')) {
    next.remove();
  }
}

function showFieldError(form: HTMLFormElement, field: ValidatableField) {
  clearFieldError(field);

  field.classList.add(...INVALID_FIELD_CLASSES);
  field.setAttribute('aria-invalid', 'true');

  const errorEl = document.createElement('p');
  errorEl.setAttribute('data-field-error', '');
  errorEl.setAttribute('role', 'alert');
  errorEl.className = 'mt-1.5 text-[11.5px] font-medium text-[#DC2626] flex items-center gap-1.5';

  errorEl.innerHTML =
    '<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';

  const textSpan = document.createElement('span');
  textSpan.textContent = getErrorMessage(form, field);
  errorEl.appendChild(textSpan);

  const host = getErrorHost(field);
  host.insertAdjacentElement('afterend', errorEl);
}

export function clearAllFormErrors(form: HTMLFormElement, summaryBox?: HTMLElement | null) {
  for (const el of Array.from(form.elements)) {
    if (isValidatableField(el)) {
      clearFieldError(el);
    }
  }
  summaryBox?.classList.add('hidden');
}

export function attachCustomFormValidation(
  form: HTMLFormElement | null,
  options: FormValidationOptions = {},
) {
  if (!form) return;

  const { summaryBox, summaryTextEl, onValidSubmit } = options;
  const fields = Array.from(form.elements).filter(isValidatableField);

  for (const field of fields) {
    const syncField = () => {
      if (field.checkValidity()) {
        clearFieldError(field);
        if (summaryBox && form.checkValidity()) {
          summaryBox.classList.add('hidden');
        }
      }
    };

    field.addEventListener('input', syncField);
    field.addEventListener('change', syncField);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let firstInvalid: ValidatableField | null = null;
    let invalidCount = 0;

    for (const field of fields) {
      if (field.disabled || !field.willValidate) continue;

      if (!field.checkValidity()) {
        showFieldError(form, field);
        invalidCount += 1;
        if (!firstInvalid) firstInvalid = field;
      } else {
        clearFieldError(field);
      }
    }

    if (invalidCount > 0) {
      if (summaryBox) {
        if (summaryTextEl) {
          summaryTextEl.textContent =
            invalidCount === 1
              ? 'Mohon lengkapi 1 kolom wajib yang ditandai merah terlebih dahulu.'
              : `Mohon lengkapi ${invalidCount} kolom wajib yang ditandai merah terlebih dahulu.`;
        }
        summaryBox.classList.remove('hidden');
      }

      firstInvalid?.focus({ preventScroll: true });
      firstInvalid?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    summaryBox?.classList.add('hidden');
    onValidSubmit?.(form);
  });
}
