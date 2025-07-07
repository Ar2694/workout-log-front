import { Autocomplete, TextField } from "@mui/material";

export default function RepSelect(props: any) {
    const {
        value,
        error,
        errorText,
        onChange,
        options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    } = props;

    const onInputChange = (_evt: any, value: any) => {
        onChange instanceof Function ? onChange(value.replace(/\D/g, "")) : undefined;
    }

    return (
        <Autocomplete
            options={options}
            getOptionLabel={(item: any) => item || ""}
            freeSolo
            getOptionKey={(item: any) => item._id}
            inputValue={value}
            isOptionEqualToValue={(item: any, value: any) => item === value}
            onInputChange={onInputChange}
            renderInput={(params) => <TextField helperText={error && errorText} {...params} size="small" error={error} />}
        />
    )
}
