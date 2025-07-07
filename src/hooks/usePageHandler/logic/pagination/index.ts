import { createSearchParams } from "react-router";
import sort from "../sort";

   export default async function pagination(state:any, updatePage:any, value: any) {
        try {
            const { page } = state;
            const { pageSize, api, selectedSort } = page;
            const params = createSearchParams([["pageIndex", value], ["pageSize", pageSize]]);
            const { data } = await api(params);
      
            const sortedData = sort(state, updatePage, selectedSort, data);

            const pageData = {
                data: { ...sortedData },
                page: {
                    ...page,
                    pageIndex: value,
                    filteredData: { ...sortedData },
                    search: ""
                },
            }

            updatePage(pageData);

        } catch (e) {
            console.log(e)
        }
    }