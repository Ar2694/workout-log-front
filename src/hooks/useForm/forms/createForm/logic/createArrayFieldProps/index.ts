import createFormData from "../createFormData";

export default function createArrayFieldProps(pathString: any, data: any, options: any): any {
    const path = Array.isArray(pathString) ? pathString : pathString.split('.');

    if (data) {

        if (path.length === 0) {
            const field = data.map((item: any) => {
                const formdata = createFormData(item)

                let dataProps = Object.keys(formdata).reduce((acc: any, key: any, index: any) => {
                    if (Array.isArray(formdata[key])) {
                        acc[key] = formdata[key];
                    } else {
                        acc[key] = {
                            value: formdata[key].value ? formdata[key].value : index,
                            ...options[key]
                        }
                    }
                    return acc
                }, {})

                return dataProps

            }, []) 
            return field
        }

        const [currentKey, ...remainingPath] = path;

        if (!isNaN(parseInt(currentKey)) && Array.isArray(data)) {
            return createArrayFieldProps(remainingPath, { ...data[currentKey] }, options)
        }

        if (Array.isArray(data)) {
            return createArrayFieldProps(remainingPath, [...data], options)
        }

        if (!Array.isArray(data)) {
            if (Array.isArray(data[currentKey])) {
                return createArrayFieldProps(remainingPath, [...data[currentKey]], options);
            } else {
                return createArrayFieldProps(remainingPath, typeof data[currentKey] === "object" ? { ...data[currentKey] } : data[currentKey], options);
            }
        }
    } else {
        return []
    }
}