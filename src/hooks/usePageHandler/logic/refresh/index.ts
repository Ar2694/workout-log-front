import { createSearchParams } from "react-router";
import sort from "../sort";

export default async function refresh(state: any, updatePage: any) {
    try {
        const { page } = state;
        const { pageSize, api, selectedSort, pageIndex } = page;
        const params = createSearchParams([["pageIndex", pageIndex], ["pageSize", pageSize]]);
        const { data } = await api(params);

        const sortedData = sort(state, updatePage, selectedSort, data);

        const pageData = {
            data: { ...sortedData },
            page: {
                ...page,
                pageIndex: pageIndex,
                filteredData: { ...sortedData },
                search: ""
            },
        }

        updatePage(pageData);

    } catch (e) {
        console.log(e)
    }
}