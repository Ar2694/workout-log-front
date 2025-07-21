

import { Alert, MenuItem } from "@mui/material";
import Button from "components/ui/Button";
import FormView, { FormRow } from "components/views/FormView";
import DatePickerInput from "components/ui/form-components/DatePickerInput";
import SelectInput from "components/ui/form-components/SelectInput";
import ColorPickerInput from "components/ui/form-components/ColorPickerInput";
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import ResponsiveButtonContainer from "components/containers/ResponsiveButtonContainer ";
import EditScheduleHandler from "./components/EditScheduleHandler";
import useForm from "hooks/useForm";
import { useModal } from "providers/ModalProvider";
import ShowHideView from "components/views/ShowHideView";
import ContentHeaderView from "components/views/ContentHeaderView";

export default function EditSchedulePage() {
    return (
        <EditScheduleHandler>
            <EditSchedulePageContent />
        </EditScheduleHandler>
    )
}

function EditSchedulePageContent(props: any) {
    const { pageHandler } = props;
    const { data } = pageHandler;
    const { workouts, schedule } = data
    const { onOpenModal } = useModal()
    const form = useForm(schedule);
    const { setField, hasError, fieldValues } = form;
    const { workout } = schedule;

    return (
        <>
            <ResponsiveContainer>
                <ContentHeaderView text="Edit Schedule" />
                <ResponsiveButtonContainer>
                    <Button variant="outlined" text="Cancel" onClick={pageHandler.handler("onCancel")} />
                    <Button variant="contained" color="error" text="Delete" onClick={onOpenModal("DeleteScheduleDialog",  { pageHandler, scheduleId: fieldValues._id  })}/>
                    <Button variant="contained" text="Update" onClick={onOpenModal("UpdateScheduleDialog", { pageHandler, form })} />
                </ResponsiveButtonContainer>
            </ResponsiveContainer>
            <ShowHideView bool={hasError}>
                <Alert severity="error">* Please fill out the required field(s).</Alert>
            </ShowHideView>
            <FormView container width="100%" >
                <FormView className="schedule-form-container" size={{ mobile: 12, desktop: 4 }} direction="column" >
                    <FormRow label="Schedule Date:">
                        <DatePickerInput  {...setField("date", { isRequired: true })} errorText="* Schedule Date is required." />

                    </FormRow>
                    <FormRow label="Workout:">
                        <SelectInput {...setField("workout", { isRequired: true, value: workout._id })} errorText="* Workout is required."  >
                            {workouts.map((item: any, key: any) => <MenuItem key={key} value={item._id}>{item.workoutName}</MenuItem>, [])}
                        </SelectInput>
                    </FormRow>
                    <FormRow label="Color Tag:">
                        <ColorPickerInput {...setField("color")} errorText="* Color is required." />
                    </FormRow>
                </FormView>
            </FormView>

        </>
    )
}