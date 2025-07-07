import { useRef, useState } from 'react';
import createForm from "./forms/createForm";

const useForm = (data: any = null) => {
    const formRef = useRef<any>(undefined);

    if (!formRef.current) {
        formRef.current = createForm(data)
    }

    const form = formRef.current;
    const [state, setState] = useState(form);

    const updateField = (value: any) => setState({ ...state, ...value });

    const setField = (prop: any, options?: any) => {
        const { fieldProps, onChange } = form.setField(prop, options);

        return {
            ...fieldProps,
            onChange: onChange(prop, updateField)
        };
    }

    const setArrayField = (prop: any, pathString: any, _options?: any, _optionArray?: any) => {
        const { fieldProps, onChange } = form.setArrayField(prop, pathString, _options, _optionArray);

        return {
            ...fieldProps,
            onChange: onChange(prop, pathString, updateField)
        };
    }

    const onFieldArrayRemove = (pathString: any, arrIndex: any, propCount?: any) => () => {
        form.onFieldArrayRemove(pathString, arrIndex, propCount, updateField);
    }

    const validateFields = () => form.validateFields(updateField);

    return {
        fields: state.fields,
        fieldValues: state.fieldValues,
        hasError: state.hasError,
        setField,
        setArrayField,
        onFieldArrayRemove,
        validateFields
    };
};

export default useForm;