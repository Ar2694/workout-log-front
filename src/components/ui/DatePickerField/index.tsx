
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ChangeEvent, useState } from "react";

export default function DatePickerField(props: any) {
    const value = props.value ?? dayjs()

    //   const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

    const onChange = (value: any) => {
        if (props.onChange instanceof Function) {
            props.onChange(value);
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            
                slotProps={{
                    textField: {
                        error: false
                    }
                }}
                value={value}
                onChange={props.onChange}
            />
        </LocalizationProvider>
    );
}