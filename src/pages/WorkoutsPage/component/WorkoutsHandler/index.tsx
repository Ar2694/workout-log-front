import React from 'react'

import WorkoutAPI from "api/workout-api";
import { createSearchParams, useNavigate } from "react-router";
import PageHandlerView from "components/views/PageHandlerView";
import usePageHandler from "hooks/usePageHandler";

interface Props {
    children: React.ReactNode,
    className?: string
}

export default function WorkoutsHandler({ children, className }: Props) {
    const navigate = useNavigate();
    const params = createSearchParams([["pageIndex", "1"], ["pageSize", "12"]]);
    const api = WorkoutAPI.GetWorkouts(params.toString());

    const pageOptions = {
        api: WorkoutAPI.GetWorkouts,
        name: "workouts",
        searchBy: "workoutName",
        label: "workoutName",
        order: "asc"
    }
    const pageHandler = usePageHandler(api, pageOptions);

    pageHandler
        .listener("onAdd", (() => {
            navigate("/workouts/add")
        }))
        .listener("onCancel", (() => {
            navigate("/workouts")
        }))
        .listener("onView", ((id: string) => {
            navigate(`/workouts/view/${id}`)
        }));

    return (
        <PageHandlerView className={className} pageHandler={pageHandler}>
            {children}
        </PageHandlerView>
    )
}
