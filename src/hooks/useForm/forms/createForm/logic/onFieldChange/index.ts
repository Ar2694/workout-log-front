

const onFieldChange = (prop: any, fn: any, helpers: any) => (value: any) => {
    const { updateField, getFormState, update } = helpers;
    const fields = updateField(prop, value);

    update({ fields })
    if (fn instanceof Function) {
        const form = getFormState();

        fn(form);
    }
}

export default onFieldChange;