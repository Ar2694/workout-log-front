
import ScheduleAPI from "api/schedule-api";
import PageHandlerView from "components/views/PageHandlerView";
import usePageHandler from "hooks/usePageHandler";
import {  useNavigate } from "react-router";

interface Props {
    className?: string
    children: React.ReactNode,
}

export default function HomeHandler({ children, className }: Props) {
    const navigate = useNavigate();

  
    const api = ScheduleAPI.GetSchedules();

    // const pageOptions = {
    //     api: ScheduleAPI.GetSchedules,
    //     name: "schedules",
    //     searchBy: "date",
    //     label: "date",
    //     order: "asc"
    // }


    const pageHandler = usePageHandler(api, null, { ui :{test: "helowro"}});

    pageHandler
        .listener("onNavigate", ((value:any) => {
            navigate(value);
        }))
   

    return (
        <PageHandlerView className={className} pageHandler={pageHandler}>
            {children}
        </PageHandlerView>
    )
}
