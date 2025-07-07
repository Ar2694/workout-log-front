import React from 'react'
import usePageHandler from "hooks/usePageHandler";
import WorkoutAPI from "api/workout-api";
import { useNavigate, useParams } from "react-router";
import PageHandlerView from "components/views/PageHandlerView";
import ScheduleAPI from "api/schedule-api";

interface Props {
    className?: string
    children: React.ReactNode,
}

export default function ViewScheduleHandler({ children, className }: Props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const api = [ScheduleAPI.GetScheduleById(id)];
    const pageHandler = usePageHandler(api);

    pageHandler
        .listener("onCancel", (() => {
            navigate("/schedules")
        }))
        .listener("onEditSchedule", ((id: any) => {
            navigate(`/schedules/edit/${id}`)
        }))
        .listener("onViewWorkout", ((id: any) => {
            navigate(`/workouts/edit/${id}`)
        }))
        .listener("onView", ((id: any) => {
            navigate(`/workouts/view/${id}`)
        }));

    return (
        <PageHandlerView className={className} pageHandler={pageHandler}>
            {children}
        </PageHandlerView>
    )
}
