import { Grid, MenuItem } from "@mui/material";
import FormView, { FormRow } from "components/views/FormView";
import TextInput from "components/ui/form-components/TextInput";
import SelectInput from "components/ui/form-components/SelectInput";
import ColorPickerInput from "components/ui/form-components/ColorPickerInput";
import TextAreaInput from "components/ui/form-components/TextAreaInput";
import ShowHideView from "components/views/ShowHideView";
import ExceriseContainer from "../ExceriseContainer";

export default function WorkoutFormContainer({ pageHandler, form }: any) {
    const { setField, setArrayField, fields } = form;
    const { exercises = [] } = fields;
    const exerciseItems = exercises.map((item: any) => <ExceriseContainer key={item.id.value} {...item} pageHandler={pageHandler} form={form} />, [])

    return (
        <Grid container spacing={6} direction="column" className="workout-form-container">
            <Grid className="workout-detail-content">
                <Grid container direction="row" spacing={2} className="form-view-container">
                    <FormView container width="100%" spacing={2} direction="row">
                        <FormView size={{ mobile: 12, desktop: 6 }} container direction="column" spacing={3}>
                            <FormRow label="* Workout Name:">
                                <TextInput {...setField("workoutName", { isRequired: true })} errorText="* Workout name is required." />
                            </FormRow>
                            <FormRow label="* Number of Exercises:">
                                <SelectInput {...setArrayField("exerciseCount", "exercises", { isRequired: true })} errorText="* Number of exercises is required.">
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                </SelectInput>
                            </FormRow>
                            <FormRow label="Color Tag:">
                                <ColorPickerInput {...setField("color")} />
                            </FormRow>
                        </FormView>
                        <FormView size={{ mobile: 12, desktop: 6 }}>
                            <FormRow label="Description (optional):">
                                <TextAreaInput {...setField("notes")} />
                            </FormRow>
                        </FormView>
                    </FormView>
                </Grid>
            </Grid>
            <ShowHideView bool={exerciseItems.length > 0}>
                <Grid container direction="column" spacing={4}>
                    {exerciseItems}
                </Grid>
            </ShowHideView>
        </Grid>
    );

}
