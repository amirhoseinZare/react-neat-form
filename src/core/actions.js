import actionTypes from "./actionTypes.js"

const actions = {
    require: (message) =>  ({ type: actionTypes.require, message }),
    
    //built-in type actionTypes
    isNumber: (message) =>  ({ type:actionTypes.isNumber, message }),
    isString: (message) =>  ({ type:actionTypes.isString, message }),
    isBoolean: (message) =>  ({ type:actionTypes.isBoolean, message }),
    isObject: (message) =>  ({ type:actionTypes.isObject, message }),
    isUndefined: (message) =>  ({ type:actionTypes.isUndefined, message }),
    isBigInt: (message) =>  ({ type:actionTypes.isBigInt, message }),
    isSymbol: (message) =>  ({ type:actionTypes.isSymbol, message }),

    //built-in semi-type actionTypes
    isNull: (message) =>  ({ type:actionTypes.isNull, message }),
    isNan: (message) =>  ({ type:actionTypes.isNan, message }),

    minCharLength: (minLength, message) =>  ({
      type: actionTypes.minCharLength,
      message,
      minLength,
    }),
    maxCharLength: (maxLength, message) =>  ({
      type: actionTypes.maxCharLength,
      message,
      maxLength,
    }),
    fixCharLength: (length, message) =>  ({
      type: actionTypes.fixCharLength,
      message,
      length,
    }),


    minNumberLength: (minLength, message) =>  ({
      type: actionTypes.minNumberLength,
      message,
      minLength,
    }),
    maxNumberLength: (maxLength, message) =>  ({
      type: actionTypes.maxNumberLength,
      message,
      maxLength,
    }),
    fixNumberLength: (length, message) =>  ({
      type: actionTypes.fixNumberLength,
      message,
      length,
    }),

    min: (minValue, message) =>  ({ type: actionTypes.min, message, minValue }),
    max: (maxValue, message) =>  ({ type: actionTypes.max, message, maxValue }),
    email: (message) =>  ({ type: actionTypes.email, message }),
  
    mobile: (message) =>  ({ type: actionTypes.mobile, message }),
    date: (message) =>  ({ type: actionTypes.date, message }),
    url: (message) =>  ({ type: actionTypes.url, message }),
    guid: (message) =>  ({ type: actionTypes.guid, message }),
    regex: (regex, message) =>  ({ type: actionTypes.regex, message, regex }),
    custom: (func) =>  ({ type: actionTypes.custom, func }),
};

export default actions