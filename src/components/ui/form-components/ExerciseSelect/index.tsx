import { Autocomplete, TextField } from "@mui/material";

export default function ExerciseSelect(props: any) {
    const { value, error, errorText, onChange, options, filterBy, disabled } = props;

    const filteredExercises = options.filter((item: any) => {
        if (item.bodyPart === filterBy) {
            return item;
        }
    });

    const onInputChange = (_evt: any, value: any) => {
        onChange instanceof Function ? onChange(value) : undefined;
    }

    return (
        <Autocomplete
            disabled={disabled}
            options={filteredExercises}
            getOptionLabel={(item: any) => item.name || ""}
            freeSolo
            getOptionKey={(item: any) => item._id}
            inputValue={value}
            isOptionEqualToValue={(item: any, value: any) => item.name === value}
            onInputChange={onInputChange}
            renderInput={(params) => <TextField {...params} size="small" error={error} fullWidth helperText={error && errorText} />}
        />
    )
}