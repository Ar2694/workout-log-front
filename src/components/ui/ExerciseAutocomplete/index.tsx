import { Autocomplete, TextField } from "@mui/material";

export default function ExerciseAutocomplete(props: any) {
  const { exercises, bodyPart, error, value = "", onChange } = props;

  const filteredExercises = exercises.filter((item: any) => {
    if (item.bodyPart === bodyPart) {
      return item;
    }
  });




  const onInputChange = (_evt: any, value:any)=>{
    onChange instanceof Function ? onChange(value) : undefined;
  }

  return (
    <Autocomplete
      options={filteredExercises}
      getOptionLabel={(item: any) => item.name || ""}
      freeSolo
      getOptionKey={(item: any) => item._id}
      inputValue={value}
      isOptionEqualToValue={(item: any, value: any) => item.name === value}
      onInputChange={onInputChange}
      renderInput={(params) => <TextField {...params} size="small" error={error}  fullWidth/>}
      
    />
  )
}
