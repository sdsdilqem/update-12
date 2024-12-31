export const formatPhoneNumber = (value: string): string => {
  // Remove non-digit characters (e.g., spaces, dashes)
  value = value.replace(/\D/g, '');
  
  // Ensure the number is no longer than 10 digits
  if (value.length > 10) {
    value = value.slice(0, 10);
  }

  // Add a leading zero if missing
  if (value.length > 0 && value[0] !== '0') {
    value = '0' + value;
  }

  // Format as 0XX XXX XX XX
  if (value.length > 3) {
    value = value.slice(0, 3) + ' ' + value.slice(3);
  }
  if (value.length > 6) {
    value = value.slice(0, 7) + ' ' + value.slice(7);
  }
  if (value.length > 8) {
    value = value.slice(0, 9) + ' ' + value.slice(9);
  }

  return value;
};
