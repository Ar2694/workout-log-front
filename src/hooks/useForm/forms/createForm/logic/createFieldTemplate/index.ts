export default function createFieldTemplate( data: any, options: any) {
    let fields: any = {};

    for (const key in options) {
        if (options.hasOwnProperty(key)) {

            if (data[key] !== undefined) {
                if (Array.isArray(options[key])) {
                    const currentOptions = data[key];
                    let fieldValues: any = []

                    currentOptions.forEach((item: any, index: any) => {
                        item.id = index;
                        fieldValues = []
                    })

                    fields[key] = fieldValues;
                } else {

                    const value = data[key]?.value ?? data[key];
                    fields[key] = {
                        value: value ?? "",
                        ...options[key]
                    }
                }
            }

            if (data[key] === undefined) {

                if (Array.isArray(options[key])) {
                    const field = createFieldTemplate(data, options[key][0])
                    fields[key] = [{ ...field, id: { ...field.id, value: 0 } }]

                } else {
                    fields[key] = {
                        value: data[key] ?? "",
                        ...options[key]
                    }
                }
            }

        }
    }

    return fields;
}