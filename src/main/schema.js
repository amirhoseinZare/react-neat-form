import actions from "../core/actions.js"

class Validator {
    constructor(isRequired, message){
        this.value = []
        if(isRequired)
            this.require(message)
    }
    require(message){ 
        this.value.push(actions.require(message))
        return this
    }    
    isNumber(message){ 
        this.value.push(actions.isNumber(message))
        return this
    }
    isString(message){ 
        this.value.push(actions.isString(message))
        return this
    }
    isBoolean(message){ 
        this.value.push(actions.isBoolean(message))
        return this
    }

    isObject(message){
        this.value.push(actions.isObject(message))
        return this
    }

    isUndefined(message){
        this.value.push(actions.isUndefined(message))
        return this
    }

    isBigInt(message){
        this.value.push(actions.isBigInt(message))
        return this
    }

    isSymbol(message){
        this.value.push(actions.isSymbol(message))
        return this
    }

    isNull(message){
        this.value.push(actions.isNull(message))
        return this
    }

    isNan(message){
        this.value.push(actions.isNan(message))
        return this
    }

    minCharLength(minLength, message){
        this.value.push(actions.minCharLength(minLength, message))
    }

    maxCharLength(maxLength, message){
        this.value.push(actions.maxCharLength(maxLength, message))
    }

    fixCharLength(length, message){
        this.value.push(actions.fixCharLength(length, message))
    }

    minNumberLength(minLength, message){
        this.value.push(actions.minNumberLength(minLength, message))
    }

    maxNumberLength(maxLength, message){
        this.value.push(actions.maxNumberLength(maxLength, message))
    }

    fixNumberLength(length, message){
        this.value.push(actions.fixNumberLength(length, message))
    }

    min(minValue, message){
        this.value.push(actions.min(minValue, message))
    }

    max(maxValue, message){
        this.value.push(actions.max(maxValue, message))
    }



}

export const v = (isRequired, message)=>new Validator(isRequired, message)