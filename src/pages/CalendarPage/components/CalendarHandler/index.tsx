import React from 'react'
import ExercisesAPI from "api/exercises-api";
import WorkoutAPI from "api/workout-api";
import { useNavigate, useParams } from "react-router";
import dayjs from "dayjs";
import PageHandlerView from "components/views/PageHandlerView";
import usePageHandler from "hooks/usePageHandler";
import ScheduleAPI from "api/schedule-api";

interface Props {
    children: React.ReactNode,
    className?: string
}

export default function CalendarHandler({ children, className }: Props) {
    const navigate = useNavigate()
    const api = ScheduleAPI.GetSchedules();

    const pageHandler = usePageHandler(api);

    pageHandler
        .listener("onScheduleView", ((value: any) => {
            const scheduleId = value;
            navigate(`/schedules/view/${scheduleId}`);
        }))
        .listener("onAddSchedule", (() => {
            navigate("/schedules/add");
        }))
        .listener("onScheduleEdit", ((value: any) => {
            const scheduleId = value;
            navigate(`/schedules/edit/${scheduleId}`);
        }));

    return (
        <PageHandlerView className={className} pageHandler={pageHandler}>
            {children}
        </PageHandlerView>
    )
}
