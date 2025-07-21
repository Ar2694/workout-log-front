import React from 'react'
import ExercisesAPI from "api/exercises-api";

import WorkoutAPI from "api/workout-api";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import PageHandlerView from "components/views/PageHandlerView";
import usePageHandler from "hooks/usePageHandler";

interface Props {
    children: React.ReactNode,
    className?: string
}

export default function AddWorkoutHandler({ children, className }: Props) {
    const navigate = useNavigate();
    
    const api = [ExercisesAPI.GetExercises(), ExercisesAPI.GetExerciseBodyParts()];
    const pageHandler = usePageHandler(api);

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
            navigate("/workouts");
        }));

    return (
        <PageHandlerView className={className} pageHandler={pageHandler}>
            {children}
        </PageHandlerView>
    )
}
