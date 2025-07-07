export default function search(state: any, updatePage: any, value: any) {
    const { data, page } = state;
    const { name, searchBy } = page;
    const tempData = Object.assign({}, data)
    let filteredData = { ...tempData };

    filteredData[name] = tempData[name].filter((item: any) => {
        return item[searchBy].toLowerCase().includes(value.toLowerCase());
    });

    const pageData = {
        page: {
            ...page,
            filteredData: { ...filteredData },
            search: value
        }
    }

    updatePage(pageData);
}