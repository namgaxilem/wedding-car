export function formatNumberThousandDeliminator(
  num: number | string,
  isClearBeforeFormat?: boolean
) {
  try {
    const cleanNumber = isClearBeforeFormat
      ? num.toString().replaceAll(",", "")
      : num;

    // Convert the number to a string and remove any decimal places
    const numString = parseFloat(`${cleanNumber}`).toFixed(0);

    // Add commas for thousands separators using a regular expression
    const formattedNumber = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formattedNumber;
  } catch (err) {
    console.warn(err);
    return 0;
  }
}
