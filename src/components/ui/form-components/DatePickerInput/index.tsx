
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerInput(props: any) {
      const { value, error, errorText, onChange } = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={dayjs(value)}
                onChange={onChange}
                disablePast
                slotProps={{
                    textField: {
                        error: error,
                        helperText: error && errorText,
                        fullWidth: true
                    },
                }}
           
            />
        </LocalizationProvider>
    );
}