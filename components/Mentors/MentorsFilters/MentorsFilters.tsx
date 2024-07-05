"use client"

import "./MentorsFilters.css";
import { TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function MentorsFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('searchText', term);
    } else {
      params.delete('searchText');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000)

  const handleSelect = useDebouncedCallback((term: string, param: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    params.set(param, term);
    replace(`${pathname}?${params.toString()}`);
  }, 500)

  return (
    <div className="mentors_filters">
      <TextField
        id="outlined-basic"
        label="მენტორის ძებნა"
        variant="outlined"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('searchText')?.toString()}
        sx={{ margin: "0.5rem 0" }}
      />
      <TextField
        label="ქალაქი"
        variant="outlined"
        select
        className="select"
        onChange={(e) => handleSelect(e.target.value, "city")}
        value={searchParams.get('city') ? searchParams.get('city')?.toString() : ""}
        sx={{ margin: "0.5rem 0" }}
      >
        <MenuItem value="ბათუმი">
          ბათუმი
        </MenuItem>
        <MenuItem value="ქუთაისი">
          ქუთაისი
        </MenuItem>
        <MenuItem value="თბილისი">
          თბილისი
        </MenuItem>
      </TextField>
      <TextField
        label="საგანი"
        variant="outlined"
        select
        className="select"
        onChange={(e) => handleSelect(e.target.value, "subject")}
        value={searchParams.get('subject') ? searchParams.get('subject')?.toString() : ""}
        sx={{ margin: "0.5rem 0" }}
      >
        <MenuItem value="ინგლისური ენა">
          ინგლისური ენა
        </MenuItem>
        <MenuItem value="ქიმია">
          ქიმია
        </MenuItem>
        <MenuItem value="ისტორია">
          ისტორია
        </MenuItem>
        <MenuItem value="ქართული ენა">
          ქართული ენა
        </MenuItem>
        <MenuItem value="მათემატიკა">
          მათემატიკა
        </MenuItem>
        <MenuItem value="ბიოლოგია">
          ბიოლოგია
        </MenuItem>
        <MenuItem value="გეოგრაფია">
          გეოგრაფია
        </MenuItem>
        <MenuItem value="ფიზიკა">
          ფიზიკა
        </MenuItem>
      </TextField>
    </div>
  )
}
