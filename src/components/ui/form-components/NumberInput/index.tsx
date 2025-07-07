import NumberField from "components/ui/NumberField";

export default function NumberInput(props: any) {
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
        <NumberField
            value={value}
            error={error}
            helperText={errorText}
            onChange={onInputChange}       
        />
    )
}
