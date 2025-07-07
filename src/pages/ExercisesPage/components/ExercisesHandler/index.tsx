import React from 'react'
import usePageHandler from "hooks/usePageHandler";
import WorkoutAPI from "api/workout-api";
import { createSearchParams, useNavigate, useParams } from "react-router";
import PageHandlerView from "components/views/PageHandlerView";
import ExercisesAPI from "api/exercises-api";

interface Props {
    className?: string
    children: React.ReactNode,
}
export default function ExercisesHandler({ children, className }: Props) {
    const navigate = useNavigate();
    const params = createSearchParams([["pageIndex", "1"], ["pageSize", "50"]]);

    const api = ExercisesAPI.GetExercises(params.toString());

  

    const pageOptions = {
        api: ExercisesAPI.GetExercises,
        name: "exercises",
        searchBy: "name",
        label: "name",
        order: "asc"
    }

    const pageHandler = usePageHandler(api, pageOptions);

    pageHandler.listener("onView",(id:any)=>{

            navigate(`/exercises/view/${id}`)
      
    })


    return (
        <PageHandlerView className={className} pageHandler={pageHandler}>
            {children}
        </PageHandlerView>


    )
}
