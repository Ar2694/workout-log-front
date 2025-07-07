import { FormHelperText, Select } from "@mui/material";

export default function SelectInput(props: any) {
    const { value, error, errorText, onChange, children } = props;

    const onInputChange = (evt: any) => {
        onChange instanceof Function ? onChange(evt.target.value) : undefined
    }
    
    return (
        <>
            <Select size="small" error={error} value={value} onChange={onInputChange} fullWidth>
                {children}
            </Select>
            {error && <FormHelperText error>{errorText}</FormHelperText>}
        </>
    )
}
