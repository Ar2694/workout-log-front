import validateForm from "../validateForm";

export default function validateFields(fn: any, helpers: any) {
    const { getFormState, update } = helpers;
    const form = getFormState();
    const { fields, isError } = validateForm(form.fields)
    update({ fields, hasError: isError })
    
    const updatedForm = getFormState();

    if (fn instanceof Function) {
        fn(updatedForm);
    }

    return updatedForm;
}