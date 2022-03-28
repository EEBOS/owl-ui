export const toCamelCase = str => {
  let replacedStr = str.replace(/[-_]+(.)?/g, (_, letter) => {
    return letter ? letter.toUpperCase() : '';
  });

  return replacedStr.substr(0, 1).toLowerCase() + replacedStr.substr(1);
};

export const prettyJson = obj => {
  return JSON.stringify(obj, null, 4);
};

export const toLower = str => {
  return str.trim().toLowerCase();
};

export const toCapitalize = str => {
  return str.replace(/^[A-Z|a-z]/g, letter => letter.toUpperCase());
};

export const toPascalCase = str => {
  return toCapitalize(str).replace(/[-_]+(.)?/g, (_, letter) => {
    return letter ? letter.toUpperCase() : '';
  });
};

export const hasLettersOnly = str => {
  return /^[a-zA-Z]+$/.test(str);
};

export const isValidComponentInputName = str => {
  return /^([a-zA-Z]+(-|_)*)+/g.test(str);
};

export const isValidOptionInputName = str => {
  return /^([a-zA-Z\d\D]+(-|_)*)+/g.test(str);
};

export const isValidPackageName = str => {
  const maxLn = 214;
  const scope = '@owlui/';
  const scopedMaxLn = maxLn - scope.length;
  const ln = str.length;
  const valid = ln <= scopedMaxLn;
  const remain = scopedMaxLn - ln;
  const over = remain * -1;

  return {
    valid,
    maxLn: scopedMaxLn,
    ln,
    remain,
    over,
  };
};

export default {
  toCamelCase,
  prettyJson,
  toLower,
  toCapitalize,
  toPascalCase,
  hasLettersOnly,
  isValidComponentInputName,
  isValidPackageName,
  isValidOptionInputName,
};
