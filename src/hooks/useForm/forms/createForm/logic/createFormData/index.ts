
export default function createFormData(data: any = undefined) {
    let fields: any = {};
    if (data) {
        if (Array.isArray(data)) {
            let fieldArray: any = []
            data.forEach((item: any) => fieldArray = [...fieldArray, createFormData(item),])
            fields = fieldArray;
        } else {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {

                    if (Array.isArray(data[key])) {
                        fields[key] = createFormData(data[key]);
                    } else {
                        fields[key] = {
                            value: data[key]
                        }
                    }

                }
            }

        }
    }
    return fields;
}