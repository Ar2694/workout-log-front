import React from 'react'
import usePageHandler from "hooks/usePageHandler";
import WorkoutAPI from "api/workout-api";
import {useNavigate, useParams } from "react-router";
import PageHandlerView from "components/views/PageHandlerView";

interface Props {
    className?: string
    children: React.ReactNode,
}
export default function ViewWorkoutHandler({ children, className }: Props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const api = WorkoutAPI.GetWorkoutById(id)
    const pageHandler = usePageHandler(api);

    pageHandler
        .listener("onCancel", (() => {

            navigate(-1)
        }))
        .listener("onDuplicate", ((data: any) => {
            const { _id, dateCreated, dateModified, __v, ...otherData} = data

            if(data){
                navigate("/workouts/duplicate",{ state: {workoutCopy: otherData} });
            }
        }))
        .listener("onEdit", ((id: any) => {
            navigate(`/workouts/edit/${id}`)
        }));

    return (
        <PageHandlerView className={className} pageHandler={pageHandler}>
            {children}
        </PageHandlerView>
    )
}
