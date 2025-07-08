
import { validateEmail, validateName, validateMessage, validatePhone } from './security';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  legalMatter: string;
  message: string;
}

export const validateContactForm = (formData: ContactFormData): string | null => {
  if (!validateName(formData.name)) {
    return "Numele trebuie să aibă cel puțin 2 caractere și să nu conțină caractere periculoase";
  }

  if (!validateEmail(formData.email)) {
    return "Adresa de email nu este validă";
  }

  if (!validatePhone(formData.phone)) {
    return "Numărul de telefon conține caractere nevalide";
  }

  if (!formData.legalMatter) {
    return "Vă rugăm să selectați tipul de problemă juridică";
  }

  if (!validateMessage(formData.message)) {
    return "Mesajul trebuie să aibă cel puțin 10 caractere și să nu conțină caractere periculoase";
  }

  return null;
};
