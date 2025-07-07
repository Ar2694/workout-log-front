import React from 'react'
import ExercisesAPI from "api/exercises-api";

import WorkoutAPI from "api/workout-api";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import PageHandlerView from "components/views/PageHandlerView";
import usePageHandler from "hooks/usePageHandler";
import ScheduleAPI from "api/schedule-api";
import Schedule from "classes/schedule";

interface Props {
    children: React.ReactNode,
    className?: string
}

export default function AddScheduleHandler({ children, className }: Props) {
    const navigate = useNavigate();

    const api = [WorkoutAPI.GetWorkouts()];
    const pageHandler = usePageHandler(api);

    pageHandler
        .listener("onSave", (async ({ form, onClose }: any) => {
            const { validateFields } = form;
            const { hasError, fieldValues } = validateFields()

            console.log(hasError, fieldValues, "onSave")

            if (!hasError) {
                const { isOk } = await ScheduleAPI.CreateSchedule({ ...fieldValues, dateCreated: dayjs() })
                if (isOk) {
                    navigate(-1);
                }
            }
            onClose();
        }))
        .listener("onCancel", (() => {
            navigate("/schedules");
        }));

    console.log(pageHandler)

    return (
        <PageHandlerView className={className} pageHandler={pageHandler}>
            {children}
        </PageHandlerView>
    )
}
