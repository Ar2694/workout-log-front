export default function createFieldProps(pathString: any, data: any, options: any): any {
    const path = Array.isArray(pathString) ? pathString : pathString.split('.');

    if (data) {
                
        if (path.length === 0) {
            const field = {
                value: data,
                ...options
            }
            return  field 
        }

        const [currentKey, ...remainingPath] = path;

        if (!isNaN(parseInt(currentKey))) {
            return createFieldProps(remainingPath, { ...data[currentKey] }, options)
        }

        if (Array.isArray(data)) {     
            return createFieldProps(remainingPath, [...data], options)
        }

        if (!Array.isArray(data)) {
            if (Array.isArray(data[currentKey])) {
                return createFieldProps(remainingPath, [...data[currentKey]], options);
            } else {
                return createFieldProps(remainingPath, typeof data[currentKey] === "object" ? { ...data[currentKey] } : data[currentKey], options);
            }
        }
    } else {
        
        return {
            value: "",
            ...options
        }
    }
}