import React from 'react'
import ExercisesAPI from "api/exercises-api";
import usePageHandler from "hooks/usePageHandler";
import WorkoutAPI from "api/workout-api";
import { useNavigate, useLocation } from "react-router";
import PageHandlerView from "components/views/PageHandlerView";
import dayjs from "dayjs";

interface Props {
    children: React.ReactNode,
    className?: string
}

export default function DuplicateWorkoutHandler({ children, className }: Props) {
    const navigate = useNavigate();

    const { state } = useLocation();
    const { workoutCopy = null } = state ?? {};
    const api = [ExercisesAPI.GetExercises(), ExercisesAPI.GetExerciseBodyParts()];
    const pageHandler = usePageHandler(api, null, { workoutCopy });

    pageHandler
        .listener("onSave", (async (form: any) => {
            const { validateFields } = form;
            const { hasError, fieldValues } = validateFields()

            if (!hasError) {
                const { isOk } = await WorkoutAPI.CreateWorkout({ ...fieldValues, dateCreated: dayjs() })
                if (isOk) {
                    navigate("/workouts");
                }
            }

        }))
        .listener("onCancel", (() => {
            navigate(-1);
        }));


    return (
        <PageHandlerView className={className} pageHandler={pageHandler}>
            {children}
        </PageHandlerView>
    )
}
