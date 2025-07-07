import { TextField } from "@mui/material"
import React from 'react'




export default function ColorPickerField(props: any) {
    const defaultValue = props.defaultValue ?? "#DDDDDD";
    const value = props.value === "" ? defaultValue : props.value;

    console.log(value,"defaultValue")
    const onChange = (value: any) => {
        if (props.onChange instanceof Function) {
            props.onChange(value);
        }
    }
    return (
        <TextField type="color" value={value} onChange={onChange} />
    )
}
