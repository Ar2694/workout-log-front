import { useEffect, useState } from "react";
import _pagination from "./logic/pagination";
import _sort from "./logic/sort";
import _search from "./logic/search";
import _setPageData from "./logic/setPageData";
import _refreshPage from "./logic/refresh";
import PageHandler from "./classes/PageHandler";
import setPage from "./logic/setPage";

const usePageHandler = (api?: any, pageOptions?:any, pageProps?: any) => {
    const page = setPage(api, pageOptions, pageProps);
    const [state, setState] = useState({ ...page });

    // Update page function
    const updatePage = (value: any) => setState({ ...state, ...value });

    // Set page data function
    const setPageData = (api: any) => _setPageData(state, updatePage, api);

    const refreshPage = async () =>  _refreshPage(state, updatePage);

    // Page function
    const pagination = async (value: any) => _pagination(state, updatePage, value);

    // Search function
    const search = (value: any) => _search(state, updatePage, value);

    // Sort function
    const sort = (value: any, _sortData: any = undefined) => _sort(state, updatePage, value, _sortData);

    //onChange event for page ui
    const onPageChange = (type: any) => (evt: any, val?: any) => {
        const { value } = evt.target;

        switch (type) {
            case "page":
                pagination(val);
                break;
            case "search":
                search(value);
                break;
            case "sort":
                sort(value)
                break;
            default:
                return state;
        }
    }

    useEffect(() => {
        setPageData(api);
    }, [])

    if (pageOptions) {
        const pageHandler = PageHandler.init({ ...state, updatePage, refreshPage, onPageChange });
        return pageHandler;
    } else {
        const pageHandler = PageHandler.init({ ...state, updatePage, refreshPage});
        return pageHandler;
    }

};

export default usePageHandler;