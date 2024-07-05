"use client"
import { Pagination } from "@mui/material"
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function PaginationUI({ total }: { total: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      onChange={(_, page) => createPageURL(page)}
      page={currentPage}
      count={total}
      showFirstButton
      showLastButton
      className="pagination"
    />
  )
}
