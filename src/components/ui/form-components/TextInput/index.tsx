import { TextField } from "@mui/material"

export default function TextInput(props: any) {
    const {
        value,
        error,
        errorText,
        onChange
    } = props;


    const onInputChange = (evt: any) => {
        onChange instanceof Function ? onChange(evt.target.value) : undefined
    }

    return (
        <TextField value={value} error={error} helperText={error && errorText} onChange={onInputChange} />
    )
}
