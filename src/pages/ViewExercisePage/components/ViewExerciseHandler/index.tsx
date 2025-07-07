import ExercisesAPI from "api/exercises-api";
import WorkoutAPI from "api/workout-api";
import PageHandlerView from "components/views/PageHandlerView";
import usePageHandler from "hooks/usePageHandler";
import React from 'react'
import { useNavigate, useParams } from "react-router";


interface Props {
    className?: string
    children: React.ReactNode,
}

export default function ViewExerciseHandler({ children, className }: Props) {

    const navigate = useNavigate();
    const { id } = useParams();
    const api = ExercisesAPI.GetExerciseById(id)
    const pageHandler = usePageHandler(api);

    pageHandler
        .listener("onCancel", (() => {
            navigate(-1);
        }));

    return (
        <PageHandlerView className={className} pageHandler={pageHandler}>
            {children}
        </PageHandlerView>
    )
}
