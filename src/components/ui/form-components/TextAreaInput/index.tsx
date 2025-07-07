import { TextField } from "@mui/material"

export default function TextAreaInput(props: any) {
  const {
    value,
    error,
    errorText,
    onChange,
    disabled = false,
    rows = 5
  } = props;

  const onInputChange = (evt: any) => {
    onChange instanceof Function ? onChange(evt.target.value) : undefined
  }

  return (
    <TextField multiline disabled={disabled} rows={rows} value={value} error={error} helperText={error && errorText} onChange={onInputChange} fullWidth />
  )
}
