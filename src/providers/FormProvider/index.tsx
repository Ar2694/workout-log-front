import useForm from "hooks/useForm";

import React, { useContext } from "react";

const FormContext = React.createContext<any | null>(null);

export default function FormProvider(props: any) {
    const form = useForm(props.data);


    const context = {
        ...form
    }

    return (
        <FormContext.Provider value={context}>
            {props.children}
        </FormContext.Provider>
    );
}

export const useFormContext = () => useContext(FormContext);