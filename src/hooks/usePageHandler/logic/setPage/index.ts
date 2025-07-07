export default function setPage(api: any= null, pageOptions: any = null, pageProps: any) {
  // Page filter list
  const name = pageOptions?.name ?? "";
  const search = pageOptions?.search ?? "";
  const searchBy = pageOptions?.searchBy ?? "";
  const label = pageOptions?.label ?? "label";
  const order = pageOptions?.order ?? "asc";
  const selectedSort = pageOptions?.selectedSort ?? `${label}_${order}`;
  const filteredData = pageOptions?.filteredData ?? {};
  const pageIndex = pageOptions?.pageIndex ?? 1;
  const pageSize = pageOptions?.pageSize ?? 10;
  const pageCount = pageOptions?.pageCount ?? 10;

  const page: any = {
    name,
    search,
    searchBy,
    label,
    order,
    selectedSort,
    filteredData,
    pageIndex,
    pageSize,
    pageCount,
    api: pageOptions?.api ?? api,
  };

  if (pageOptions) {
    return {
      api: api ,
      data: null,
      page: page,
      pageProps
    };
  } else {
    return {
      api: api,
      data: null,
      pageProps
    };
  }
}
