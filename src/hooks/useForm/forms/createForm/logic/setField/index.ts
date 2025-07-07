export default function setField(prop: any, options: any = {}, helpers: any) {
    const { data, createFieldProps, getFieldsByProp, addOption, addField, onFieldChange } = helpers;

    const _options = {
        isRequired: false,
        error: false,
        ...options
    }

    const newField = createFieldProps(prop, data, _options);
    const currentField = getFieldsByProp(prop);
    const hasFieldProps = currentField.hasOwnProperty('isRequired') === true;

    if (!hasFieldProps){
        addOption({ prop, options: _options });
        addField({ prop, field: newField });
    }

    return {
        fieldProps: hasFieldProps ? currentField : newField,
        onChange: onFieldChange,
    };
}