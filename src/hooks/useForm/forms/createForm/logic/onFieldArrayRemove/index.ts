export default function onFieldArrayRemove(pathString: any, arrIndex: any, propCount: any, fn: any, helpers: any) {
    const { getFieldsByProp, updateField, update, getFormState } = helpers;

    const path = pathString.split(".");
    let updatedFieldArray: any = []
    let updatedFieldArrayCount = undefined

    // Get current fields from the given path.
    let currentFields = getFieldsByProp(path);

    updatedFieldArray = currentFields.filter((item: any) => item.id.value !== arrIndex, []).map((item: any, index: any) => {
        item.id.value = index;
        return item
    }, [])


    if (propCount) {
        updatedFieldArrayCount = updatedFieldArray.length > 0 ? updatedFieldArray.length : "";
        const updatedCount = updateField(propCount, updatedFieldArrayCount);
        const updatedFields = updateField(path, updatedFieldArray, updatedCount);
        update({ fields: updatedFields })

    } else {
        const updatedFields = updateField(path, updatedFieldArray);
        update({ fields: updatedFields })
    }

    if (fn instanceof Function) {
        const form = getFormState();
        fn(form);
    }
}
