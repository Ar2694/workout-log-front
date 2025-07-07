import { Pagination as BasePaginaton } from "@mui/material"

export default function PaginationBase(props: any) {
  const { page, onChange } = props;

  return (
    <BasePaginaton onChange={onChange("page")} count={page.pageCount} page={page.pageIndex} />
  )
}
