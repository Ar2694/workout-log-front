// Sort function
export default function sort(state: any, updatePage: any = null, value: any, _sortData: any = undefined) {
    const { data, page } = state;

    const { name } = page;
    let _page = Object.assign({}, page);
    let _data = Object.assign({}, _sortData ?? data);

    const [label, order] = value.split("_");

    _page.selectedSort = value;
    _page.order = order;
    _page.label = label

    if (Object.keys(_page.filteredData).length > 0) {
        _page.filteredData[name].sort((a: any, b: any) => {
            const labelA = a[label].toLowerCase();
            const labelB = b[label].toLowerCase();

            if (labelA < labelB) return order === "asc" ? -1 : 1
            if (labelA > labelB) return order === "asc" ? 1 : -1
            return 0
        })
    }
    if (Object.keys(_data).length > 0) {

        _data[_page.name].sort((a: any, b: any) => {
            const labelA = a[label].toLowerCase();
            const labelB = b[label].toLowerCase();

            if (labelA < labelB) return order === "asc" ? -1 : 1
            if (labelA > labelB) return order === "asc" ? 1 : -1
            return 0
        })

    }

    const pageData = {
        data: { ..._data },
        page: {
            ...page,
            ..._page
        }
    }

    if (_sortData) {
        return _data
    } else {

        if (updatePage === null) {
            return pageData
        } else {
            updatePage(pageData);
        }

    }

}