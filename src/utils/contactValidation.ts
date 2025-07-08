
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  legalMatter: string;
  message: string;
}

export const validateContactForm = (formData: ContactFormData): string | null => {
  if (!formData.name.trim() || formData.name.trim().length < 2) {
    return "Numele trebuie să aibă cel puțin 2 caractere";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return "Adresa de email nu este validă";
  }

  if (!formData.legalMatter) {
    return "Vă rugăm să selectați tipul de problemă juridică";
  }

  if (!formData.message.trim() || formData.message.trim().length < 10) {
    return "Mesajul trebuie să aibă cel puțin 10 caractere";
  }

  return null;
};
