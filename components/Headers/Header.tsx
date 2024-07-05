import "./Header.css"
import Link from "next/link";
import { Button } from "@mui/material";
import { Burger } from "../Burger/Burger";
import { NavLink } from "../NavLink/NavLink";
import Image from "next/image";
import logo from "@/public/logo.svg"

export function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <Image src={logo} width={100} height={100} alt="logo" />
        </Link>
      </div>
      <nav className="nav_list">
        <NavLink href="/about">ჩვენს შესახებ</NavLink>
        <NavLink href="/mentors">მენტორები</NavLink>
      </nav>
      <Button className="login_button" variant="contained" href="/" sx={{ backgroundColor: "var(--thirdColor)" }}>შესვლა</Button>
      <Burger />
    </header>
  )
}
