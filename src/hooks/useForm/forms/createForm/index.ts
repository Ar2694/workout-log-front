import {
    createFieldTemplate,
    createField,
    createOption,
    getFieldValues as _getFieldValues,
    getFieldsByProp as _getFieldsByProp,
    updateField as _updateField,
    getOptions as _getOptions,
    hasError as _hasError,
    createFieldProps as _createFieldProps,
    createArrayFieldProps as _createArrayFieldProps,
    createArrayField,
    createFormData,
    setField as _setField,
    onFieldChange as _onFieldChange,
    onFieldArrayCount as _onFieldArrayCount,
    onFieldArrayRemove as _onFieldArrayRemove,
    setArrayField as _setArrayField,
    validateFields as _validateFields
} from "hooks/useForm/forms/createForm/logic";

export default function createForm(data?: any) {
    let formState = {
        fields: createFormData(data),
        options: {},
        data: {},
        hasError: false
    }
    
    const addField = (payload: any) => {
        formState = { ...formState, fields: { ...formState.fields, ...createField(payload.prop, payload.field, formState.fields) } };
        return formState.fields
    };
    const addArrayField = (payload: any) => {
        formState = { ...formState, fields: { ...formState.fields, ...createArrayField(payload.prop, payload.field, formState.fields) } };
        return formState.fields
    };
    const addOption = (payload: any) => {
        formState = { ...formState, options: { ...formState.options, ...createOption(payload.prop, payload.options, formState.options) } };
        return formState.options
    };
    const update = (payload: any) => {
        formState = { ...formState, ...payload }
    };

    const getFieldsByProp = (prop: any) => _getFieldsByProp(prop, formState.fields);
    const createFieldProps = (pathString: any, fields: any, options: any) => _createFieldProps(pathString, fields, options);
    const createArrayFieldProps = (pathString: any, fields: any, options: any) => _createArrayFieldProps(pathString, fields, options);
    const getFieldValues = (value: any = formState.fields) => _getFieldValues(value);
    const updateField = (pathString: any, value: any, fields: any = formState.fields): any => _updateField(pathString, value, fields);
    const getOptions = (pathString: any = "", options: any = formState.options) => _getOptions(pathString, options);

    const getFormState = () => ({
        ...formState,
        fieldValues: getFieldValues(formState.fields),
    });

    const onChangeHelpers = {
        getFieldsByProp,
        getOptions,
        createFieldTemplate,
        getFieldValues,
        updateField,
        update,
        getFormState
    };

    const onFieldChange = (prop: any, fn?: any) =>  _onFieldChange(prop, fn, onChangeHelpers);
    const onFieldArrayCount = (prop: any, pathString: any, fn?: any) => _onFieldArrayCount(prop, pathString, fn, onChangeHelpers);

    const fieldHelpers = {
        data,
        getFieldsByProp,
        createFieldProps,
        createArrayFieldProps,
        getFieldValues,
        updateField,
        addField,
        addArrayField,
        addOption,
        update,
        onFieldChange,
        onFieldArrayCount,
        getFormState
    }

    const setField = (prop: any, _options?: any) => _setField(prop, _options, fieldHelpers);
    const onFieldArrayRemove = (pathString: any, index: any, propCount?: any, fn?: any) => _onFieldArrayRemove(pathString, index, propCount, fn, fieldHelpers)
    const setArrayField = (prop: any, pathString: any, options?: any, optionArray?: any) => _setArrayField(prop, pathString, options, optionArray, fieldHelpers)
    const validateFields = (fn?: any) => _validateFields(fn, fieldHelpers)

    return {
        fields: formState.fields,
        fieldValues: getFieldValues(formState.fields),
        hasError: formState.hasError,
        setField,
        setArrayField,
        onFieldArrayRemove,
        validateFields
    };
}


