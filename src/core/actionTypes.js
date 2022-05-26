const actions = {
    require: "require",

    //built-in type actionTypes
    isNumber: "isNumber",
    isString:"isString",
    isBoolean:"isBoolean",
    isObject:"isObject",
    isUndefined:"isUndefined",
    isBigInt:"isBigInt",
    isSymbol:"isSymbol",

    //built-in semi-type actionTypes
    isNull:"isNull",
    isNan:"isNan",
    
    minCharLength: "minCharLength",
    maxCharLength: "maxCharLength",
    fixCharLength: "fixCharLength",
   
    minNumberLength: "minNumberLength",
    maxNumberLength: "maxNumberLength",
    fixNumberLength: "fixNumberLength",

    isPositive:"isPositive",
    isNegative:"isNegative",
    isZero:"isZero",

    min: "min",
    max: "max",
    
    email: "email",
    mobile: "mobile",
    date: "date",
    url: "url",
    regex: "regex",
    custom: "custom",
};

export default actions