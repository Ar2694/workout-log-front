import { TextField, TextFieldProps } from "@mui/material"
import { ChangeEvent, useRef } from 'react'

export default function NumberField(props: TextFieldProps) {
  const { size = "small", onChange, value, error, helperText } = props;

  const ref = useRef<HTMLInputElement>(null)

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (ref.current) {
      const inputValue = evt.target.value;
      const numericValue = inputValue.replace(/[^1-9]/g, '');
      ref.current.value = numericValue === "" ? "0" : numericValue;
    }

    if (onChange instanceof Function) {
      onChange(evt);
    }
  }

  return (
    <TextField type="number" value={value} inputRef={ref} helperText={helperText} size={size} error={error} onChange={onInputChange} />
  )
}
