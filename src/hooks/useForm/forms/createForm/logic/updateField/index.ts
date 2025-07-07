export default function updateField(pathString: any, value: any, fields:any): any {
    const path = Array.isArray(pathString) ? pathString : pathString.split('.');
    if (path.length === 0) {

        return value;
    }

    const [currentKey, ...remainingPath] = path;

    if (Array.isArray(fields)) {
     
        const newState = [...fields];
        newState[currentKey] = updateField(remainingPath, value, fields[currentKey]);
        return newState;
    }

    if (!Array.isArray(fields)) {
   
        if (Array.isArray(fields[currentKey])) {
            return {
                ...fields,
                [currentKey]: updateField(remainingPath, value, fields[currentKey])
            }
        } else {

            return {
                ...fields,
                [currentKey]: {
                    ...fields[currentKey],
                    value: updateField(remainingPath, value, fields[currentKey]),
                    error: updateField(remainingPath, value, fields[currentKey]).length === 0 && fields[currentKey].isRequired
                }
            };
        }
    }
}