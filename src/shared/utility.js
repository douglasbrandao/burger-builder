export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkValidity = (value, rules) => {
    let isValid = false;

    if (!rules) return true;

    if (rules.required) {
        isValid = value.trim() !== "";
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength; 
    }

    if (rules.isEmail) {
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        isValid = pattern.test(value) && isValid;
    }

    return isValid;
}