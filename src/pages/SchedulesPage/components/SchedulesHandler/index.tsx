import ExercisesAPI from "api/exercises-api";
import ScheduleAPI from "api/schedule-api";
import PageHandlerView from "components/views/PageHandlerView";
import usePageHandler from "hooks/usePageHandler";
import { createSearchParams, useNavigate, useParams } from "react-router";

interface Props {
    className?: string
    children: React.ReactNode,
}

export default function SchedulesHandler({ children, className }: Props) {
    const navigate = useNavigate();
    const params = createSearchParams([["pageIndex", "1"], ["pageSize", "12"]]);
    const api = ScheduleAPI.GetSchedules(params.toString());

    const pageOptions = {
        api: ScheduleAPI.GetSchedules,
        name: "schedules",
        searchBy: "date",
        label: "date",
        order: "asc"
    }

    const pageHandler = usePageHandler(api, pageOptions);

    pageHandler
        .listener("onCancel", (() => {
            navigate(-1);
        }))
        .listener("onEdit", ((id: string) => {
            navigate(`/workouts/edit/${id}`)
        }))
            .listener("onView", ((id: string) => {
              navigate(`/schedules/view/${id}`)
        }))
        .listener("onAddSchedule", (() => {
            navigate("/schedules/add")
        }))
        .listener("onDeleteAllSchedules", (async (_value: any, state: any) => {
            const { refreshPage } = state;
            const { isOk } = await ScheduleAPI.DeleteAllSchedules();

            if (isOk) {
                refreshPage();
            }
        }));

    return (
        <PageHandlerView className={className} pageHandler={pageHandler}>
            {children}
        </PageHandlerView>
    )
}
