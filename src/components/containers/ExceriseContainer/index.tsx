import { Grid, MenuItem, Paper, Typography } from "@mui/material"
import FormView, { FormRow } from "components/views/FormView"
import SelectInput from "components/ui/form-components/SelectInput";
import ExerciseSelect from "components/ui/form-components/ExerciseSelect";
import RepSelect from "components/ui/form-components/RepSelect";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShowHideView from "components/views/ShowHideView";
import styles from "./ExceriseContainer.module.css";

export default function ExceriseContainer({ pageHandler, form, ...props }: any) {
    const { data } = pageHandler;
    const { setField, setArrayField, onFieldArrayRemove } = form;
    const { bodyPart = { value: "" }, numSets = { value: "" }, sets, id } = props;
    const { bodyparts, exercises } = data;
    const exerciseNumber = id.value + 1;

    return (
        <Grid className={styles.root} component={Paper} container direction="column" variant="outlined" spacing={4} p={2} size={12} >
            <Grid container alignItems="flex-end" direction="row">
                <Grid flex={1}>
                    <Typography fontWeight={600}>{`Exercise ${exerciseNumber}`}</Typography>
                </Grid>
                <DeleteForeverIcon className="pointer delete-icon" onClick={onFieldArrayRemove("exercises", id.value, "exerciseCount")} />
            </Grid>
            <FormView container direction="row" alignContent="center" spacing={3} size={{ mobile: 12, desktop: 12 }} >
                <FormRow label="Body Part:" size={{ mobile: 12, desktop: 4 }} >
                    <SelectInput {...setField(`exercises.${id.value}.bodyPart`)}>
                        {bodyparts.map((item: any, key: any) => <MenuItem key={key} value={item._id}>{item._id}</MenuItem>)}
                    </SelectInput>
                </FormRow>
                <FormRow label="* Exercise:" size={{ mobile: 12, desktop: 4 }}>
                    <ExerciseSelect
                        {...setField(`exercises.${id.value}.exercise`, { isRequired: true })}
                        options={exercises}
                        filterBy={bodyPart?.value}
                        errorText={`* Exercise ${exerciseNumber} is required.`}
                    />
                </FormRow>
                <FormRow label="* Number of Sets:" size={{ mobile: 12, desktop: 4 }}>
                    <SelectInput
                        {...setArrayField(`exercises.${id.value}.numSets`, `exercises.${id.value}.sets`, { isRequired: true })}
                        errorText={`* Number of sets for exercise ${exerciseNumber} is required.`}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </SelectInput>
                </FormRow>
                <ShowHideView bool={numSets.value !== ""}>
                    <FormView>
                        {sets && sets.map((item: any, key: any) =>
                            <FormRow key={key} label={`* Set ${item.id.value + 1}:`} spacing={2} direction="row" size={12} alignItems="flex-start">
                                <RepSelect
                                    {...setField(`exercises.${id.value}.sets.${item.id.value}.reps`, { isRequired: true })}
                                    errorText={`* Number of reps is required.`}
                                />
                                <DeleteForeverIcon className="pointer delete-icon" onClick={onFieldArrayRemove(`exercises.${id.value}.sets`, item.id.value, `exercises.${id.value}.numSets`)} />
                            </FormRow>
                        )}
                    </FormView>
                </ShowHideView>
            </FormView>
        </Grid>
    )
}