export default function validateForm(fields: any) {
    let error = false;

    const checkForm = ({ fields, isError }: { fields: any, isError: boolean }) => {
        let _fields: any = {};
        if (Array.isArray(fields)) {
            let fieldArray: any = [];
            fields.forEach((item: any) => {
                const { fields: fieldsItem, isError: error }: any = checkForm({ fields: item, isError });
                isError = error;
                fieldArray = [...fieldArray, fieldsItem]
            })
            _fields = fieldArray;
        } else {
            for (const key in fields) {
                if (fields.hasOwnProperty(key)) {
                    if (Array.isArray(fields[key])) {
                        const { fields: item, isError: error }: any = checkForm({ fields: fields[key], isError });
                        isError = error;
                        _fields[key] = item;
                    } else {
                        fields[key].error = fields[key].isRequired && fields[key].value === "";
                        _fields[key] = fields[key];
                        if (_fields[key].error) {
                            isError = _fields[key].error;
                        }
                    }

                }
            }

        }

        return { fields: _fields, isError };
    }

    const validate = checkForm({ fields, isError: error });

    return validate;
}