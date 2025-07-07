import sort from "../sort";

export default async function setPageData(state: any, updatePage: any, api: any) {
    let pageData = {};

    try {
        if (api instanceof Array) {
            const data = await Promise.all(api);
            const allData = data.reduce((acc, currentValue) => {
                return { ...acc, ...currentValue.data };
            }, {})

            pageData = {
                data: { ...allData },
            }

        } else {

            const { api, page } = state;

            if (api === null) {
                updatePage({ data: {} });
                return;
            }
            
            if (page) {
                const { selectedSort } = page;
                const { data }: any = await api;

                const sortedData = sort(state, updatePage, selectedSort, data);

                pageData = {
                    data: { ...sortedData },
                    page: {
                        ...page,
                        pageSize: data.pageSize,
                        pageCount: data.pageCount,
                        filteredData: { ...sortedData },
                        search: ""
                    }
                }
            } else {

                const { data }: any = await api;

                pageData = {
                    data: { ...data },
                }
            }
        }

        updatePage(pageData);
    }
    catch (error) {
        console.log(error);
    }
}
