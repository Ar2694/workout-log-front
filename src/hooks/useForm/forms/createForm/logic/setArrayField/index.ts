export default function setArrayField(prop: any, pathString: any, _options: any, _optionArray: any, helpers: any) {
    const { data, createFieldProps, getFieldsByProp, createArrayFieldProps, addField, addOption, addArrayField, onFieldArrayCount } = helpers;

    let options = {
        isRequired: false,
        error: false,
        ..._options
    }
    let optionArray = {
        id: {
            isRequired: true,
            error: false,
        },
        ..._optionArray
    }

    const newField = createFieldProps(prop, data, options)
    const newFieldArray = createArrayFieldProps(pathString, data, optionArray);
    const currentField = getFieldsByProp(prop);
    const hasFieldProps = currentField.hasOwnProperty('isRequired') === true;

    if (!hasFieldProps) {
        addField({ prop, field: newField });
        addOption({ prop, options });
        addArrayField({ prop: pathString, field: newFieldArray });
        addOption({ prop: pathString, options: [optionArray] });
    }

    return {
        fieldProps: hasFieldProps ? currentField : newField,
        onChange: onFieldArrayCount,
    };
}
