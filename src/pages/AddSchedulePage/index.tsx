

import { Alert, MenuItem, useTheme } from "@mui/material";
import Button from "components/ui/Button";
import FormView, { FormRow } from "components/views/FormView";
import DatePickerInput from "components/ui/form-components/DatePickerInput";
import SelectInput from "components/ui/form-components/SelectInput";
import ColorPickerInput from "components/ui/form-components/ColorPickerInput";
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import ResponsiveButtonContainer from "components/containers/ResponsiveButtonContainer ";
import AddScheduleHandler from "./components/AddScheduleHandler";
import useForm from "hooks/useForm";
import ContentHeaderView from "components/views/ContentHeaderView";
import ShowHideView from "components/views/ShowHideView";
import { useModal } from "providers/ModalProvider";

export default function AddSchedulePage() {
    return (
        <AddScheduleHandler className="scheduled-page">
            <SchedulePageContent />
        </AddScheduleHandler>
    )
}

function SchedulePageContent(props: any) {
    const { pageHandler } = props;
    const { data } = pageHandler;
    const { workouts } = data;
    const form = useForm()
    const { setField, fields, hasError } = form;
    const { onOpenModal } = useModal();
    const theme = useTheme();

    return (
        <>
            <ResponsiveContainer>
                <ContentHeaderView text="Schedule" />
                <ResponsiveButtonContainer>
                    <Button variant="outlined" text="Cancel" onClick={pageHandler.handler("onCancel")} />
                    <Button variant="contained" text="Save" onClick={onOpenModal("SaveScheduleDialog", { pageHandler, form })} />
                </ResponsiveButtonContainer>
            </ResponsiveContainer>
            <ShowHideView bool={hasError}>
                <Alert severity="error">* Please fill out the required field(s).</Alert>
            </ShowHideView>
            <FormView container  >
                <FormView className="schedule-form-container" size={{ mobile: 12, desktop: 4 }} direction="column" >
                    <FormRow label="Schedule Date:">
                        <DatePickerInput  {...setField("date", { isRequired: true })} errorText="* Schedule Date is required." />
                    </FormRow>
                    <FormRow label="Workout:">
                        <SelectInput {...setField("workout", { isRequired: true })} errorText="* Workout is required."  >
                            {workouts.map((item: any, key: any) => <MenuItem key={key} value={item._id}>{item.workoutName}</MenuItem>, [])}
                        </SelectInput>
                    </FormRow>
                    <FormRow label="Color Tag:">
                        <ColorPickerInput {...setField("color", { value: theme.palette.primary.main })} errorText="* Color is required." />
                    </FormRow>
                </FormView>
            </FormView>

        </>
    )

}