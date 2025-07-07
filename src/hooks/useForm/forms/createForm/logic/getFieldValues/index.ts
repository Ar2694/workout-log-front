export default function getFieldValues(fields: any ){
    let fieldValues: any = {};
    if (Array.isArray(fields)) {
        let fieldArray: any = []
        fields.forEach((item: any) => fieldArray = [...fieldArray, getFieldValues(item)])
        fieldValues = fieldArray;
    } else {
        for (const key in fields) {
            if (fields.hasOwnProperty(key)) {

                if (Array.isArray(fields[key])) {
                    fieldValues[key] = getFieldValues(fields[key]);
                } else {
        
                    fieldValues[key] = fields[key].value ?? ""

                }

            }
        }

    }

    return fieldValues;
}