import { TextField, useTheme } from "@mui/material"

export default function ColorPickerInput(props: any) {
    const { palette } = useTheme();

    const {
        value,
        error,
        errorText,
        onChange
    } = props;

    const color = value !== "" ? value : palette.primary.main;
    const onInputChange = (evt: any) => {
        onChange instanceof Function ? onChange(evt.target.value) : undefined;
    }

    return (
        <TextField type="color" value={color} error={error} helperText={error && errorText} onChange={onInputChange} fullWidth />
    )
}
