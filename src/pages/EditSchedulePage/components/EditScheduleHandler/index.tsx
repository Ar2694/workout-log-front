import React from 'react'
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

export default function EditScheduleHandler({ children, className }: Props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const api = [WorkoutAPI.GetWorkouts(), ScheduleAPI.GetScheduleById(id)];
    const pageHandler = usePageHandler(api);

    pageHandler
        .listener("onUpdate", (async ({ form, onClose }: any) => {
            const { validateFields } = form;
            const { hasError, fieldValues } = validateFields()

            console.log(hasError, fieldValues, "onSave")

            if (!hasError) {
                const { isOk } = await ScheduleAPI.UpdateSchedule({ ...fieldValues, dateCreated: dayjs() })
                if (isOk) {
                    navigate(-1);
                }
            }
            onClose();
        }))
        .listener("onDelete", (async (id: any) => {
            const { isOk } = await ScheduleAPI.DeleteScheduleById(id)
            if (isOk) {
                navigate(-1)
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
