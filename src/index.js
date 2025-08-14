module.exports = function toReadable(number) {
  const units = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number === 0) {
    return 'zero';
  }
  if (number < 10) {
    return units[number];
  }
  if (number >= 10 && number < 20) {
    return teens[number - 10];
  }
  if (number >= 20 && number < 100) {
    return `${tens[Math.trunc(number / 10)]}${units[number % 10] ? ` ${units[number % 10]}` : ''}`;
  }
  if (number >= 100 && number < 1000) {
    const hundredsPart = `${units[Math.trunc(number / 100)]} hundred`;
    const remainder = number % 100;

    if (remainder === 0) {
      return hundredsPart;
    }
    if (remainder < 10) {
      return `${hundredsPart} ${units[remainder]}`;
    }
    if (remainder >= 10 && remainder < 20) {
      return `${hundredsPart} ${teens[remainder - 10]}`;
    }
    const tenPart = Math.trunc(remainder / 10);
    const unitPart = remainder % 10;
    return `${hundredsPart} ${tens[tenPart]}${unitPart ? ` ${units[unitPart]}` : ''}`;
  }
  return '';
};
