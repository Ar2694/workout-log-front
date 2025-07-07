const onFieldArrayCount = (prop: any, pathString: any, fn: any, helpers: any) =>  (value: any) => {
    const { getFieldsByProp, getOptions, createFieldTemplate, getFieldValues, updateField, update, getFormState } = helpers;

    const path = pathString.split(".");

    // Get current fields and options from the given path.
    const currentFields = getFieldsByProp(path) ?? {};

    // Get the field options
    const _options = getOptions(path);
    const fieldTemplate = createFieldTemplate(getFieldValues(_options), _options)
    // Initialized the number of empty arrays by the given value.
    const emptyFields = Array.apply(null, Array(value))

    //Set empty arrays withe fields values and merge the current array fields with the new arrays. 
    const newFields = emptyFields.reduce((acc: any, _key: any, index: any) => {

        if (currentFields[index]) {
            acc.push({ ...currentFields[index], id: { ...currentFields[index].id, value: index } })
        } else {
            acc.push({ ...fieldTemplate, id: { ...fieldTemplate.id, value: index } })
        }

        return acc

    }, []);


    // Updates the current field array with the new array to the given path.
    const updatedFieldArray = updateField(path, newFields);
    // Update the field value to the given prop.
    const updatedFieldCount = updateField(prop, value, updatedFieldArray);

    // // Update the form state 
    update({ fields: updatedFieldCount })
    const form = getFormState();
    if (fn instanceof Function) {
        fn(form);
    }
}

export default  onFieldArrayCount