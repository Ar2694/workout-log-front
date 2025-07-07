import React from 'react'
import ExercisesAPI from "api/exercises-api";
import WorkoutAPI from "api/workout-api";
import { useNavigate, useParams } from "react-router";
import dayjs from "dayjs";
import PageHandlerView from "components/views/PageHandlerView";
import usePageHandler from "hooks/usePageHandler";

interface Props {
    children: React.ReactNode,
    className?: string
}

export default function EditWorkoutHandler({ children, className }: Props) {
    const { id } = useParams();
    const api = [
        ExercisesAPI.GetExerciseBodyParts(),
        ExercisesAPI.GetExercises(),
        WorkoutAPI.GetWorkoutById(id)
    ]
    const navigate = useNavigate();

    const pageHandler = usePageHandler(api);

    pageHandler
        .listener("onSave", (async (form: any) => {
            const { validateFields } = form;
            const { hasError, fieldValues } = validateFields();

            if (!hasError) {
                const { isOk } = await WorkoutAPI.UpdateWorkout({ ...fieldValues, dateModified: dayjs() })
                if (isOk) {
                    navigate("/workouts")
                }
            }

        }))
        .listener("onDelete", (async (id: any) => {
            const { isOk } = await WorkoutAPI.DeleteWorkout(id)
            if (isOk) {
                navigate("/workouts");
            }
        }))
        .listener("onCancel", (() => {
            navigate(-1)
        }));

    return (
        <PageHandlerView className={className} pageHandler={pageHandler}>
            {children}
        </PageHandlerView>
    )
}
