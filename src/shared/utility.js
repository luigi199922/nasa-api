export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkValidity = (value, rules) =>{
    let isValid = true
    if(!rules){
        return true
    }
    if(rules.required){
        isValid = (value.trim() !== '' && isValid)
    }
    if(rules.minLength){
        isValid = (value.length >= rules.minLength && isValid)
    }
    if(rules.maxLength){
        isValid = (value.length <= rules.maxLength && isValid)
    }
    return isValid
}

export const getCurrentDate = ( ) =>{
    return new Date().toISOString().slice(0,10)
}
export const getPreviousWeek = (d) =>{
    d = new Date(d);
    var day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}