import "./Header.css"
import Link from "next/link";
import { Button } from "@mui/material";
import { Burger } from "../Burger/Burger";
import { NavLink } from "../NavLink/NavLink";

export function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">LOGO</Link>
      </div>
      <nav className="nav_list">
        <NavLink href="/about">ჩვენს შესახებ</NavLink>
        <NavLink href="/mentors">მენტორები</NavLink>
        <NavLink href="/contact">დაგვიკავშირდით</NavLink>
      </nav>
      <Button className="login_button" variant="contained" href="/" sx={{ backgroundColor: "var(--thirdColor)" }}>შესვლა</Button>
      <Burger />
    </header>
  )
}
