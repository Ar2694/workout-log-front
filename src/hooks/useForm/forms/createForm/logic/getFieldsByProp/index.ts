export default function getFieldsByProp(pathString: any, fields: any): any {
    const path = Array.isArray(pathString) ? pathString : pathString.split('.');

    if (path.length === 0) {

        return fields ?? {};
        
    }

    const [currentKey, ...remainingPath] = path;

    if (!isNaN(parseInt(currentKey)) && Array.isArray(fields)) {
        return getFieldsByProp(remainingPath, { ...fields[currentKey] })
    }

    if (Array.isArray(fields)) {
        return getFieldsByProp(remainingPath, [...fields])
    }

    if (!Array.isArray(fields)) {
        
        if (Array.isArray(fields[currentKey])) {
            return getFieldsByProp(remainingPath, [...fields[currentKey]]);
        } else {
            return getFieldsByProp(remainingPath, typeof fields[currentKey] === "object" ? { ...fields[currentKey] } : fields[currentKey]);
        }
    }
}