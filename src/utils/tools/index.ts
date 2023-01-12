import { MaskService } from 'react-native-masked-text';

export const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, '0');

export function maskStringValue(value: number) {
  try {
    return MaskService.toMask('money', value.toFixed(2), {
      unit: value >= 0 ? 'R$ ' : '- R$ ',
      separator: ',',
      delimiter: '.',
    });
  } catch (e) {
    return '';
  }
}

export function maskMoneyValue(value: number) {
  try {
    return MaskService.toMask('money', value.toFixed(2), {
      unit: 'R$ ',
      separator: ',',
      delimiter: '.',
    });
  } catch (e) {
    return '';
  }
}

export function capitalizeStringFirstLetter(text: string) {
  const textLow = text.toLowerCase();
  return textLow.charAt(0).toUpperCase() + textLow.slice(1);
}

export function formatISODate(dateISOString: string) {
  const date = new Date(dateISOString);
  const day: number = date.getDate();
  const month: number = date.getMonth() + 1;
  const year: number = date.getFullYear();

  let result = 'DD/MM/YYYY';

  result = result.replace('DD', zeroPad(day, 2));
  result = result.replace('MM', zeroPad(month, 2));
  result = result.replace('YYYY', String(year));

  return result;
}

export function formatISOHour(dateISOString: string) {
  const date = new Date(dateISOString);
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  let result = 'HH:MM';

  result = result.replace('HH', zeroPad(hours, 2));
  result = result.replace('MM', zeroPad(minutes, 2));

  return result;
}

export const toUpperCaseFirstLetter = (text: string) => {
  try {
    return (
      text.toLowerCase().charAt(0).toUpperCase() + text.toLowerCase().slice(1)
    );
  } catch (e) {
    console.log(e);
    return text;
  }
};

export const createdAt = new Date().toLocaleDateString('pt-br', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

export const generateRandomInteger = (max: number) => {
  return Math.floor(Math.random() * max) + 1;
};

export const maskCpfCnpj = (text: string) => {
  if (text.length <= 13) {
    return MaskService.toMask('cpf', text);
  }
  if (text.length >= 15) {
    return MaskService.toMask('cnpj', text);
  }
  return text;
};
