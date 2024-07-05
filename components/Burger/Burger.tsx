"use client"

import "./Burger.css"
import { useState } from "react";
import { Button } from "@mui/material";
import { NavLink } from "../NavLink/NavLink";
import { IconButton } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";

export function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="burger_container">
      <IconButton title="მენიუ" className="burgerButtonOpen" onClick={toggleBurger} color="primary">
        <Menu />
      </IconButton>
      <div className={isOpen ? "burgerOverlay" : "burgerOverlay burgerOverlay_close"} >
        <IconButton title="დახურვა" className="burgerButtonClose" onClick={() => setIsOpen(false)} color="primary">
          <Close />
        </IconButton>
        <div className="burger_menuButtons">
          <Button variant="contained" href="/" sx={{ backgroundColor: "var(--thirdColor)" }}>შესვლა</Button>
        </div>
        <nav >
          <NavLink href="/about" onClick={toggleBurger}>ჩვენს შესახებ</NavLink>
          <NavLink href="/mentors" onClick={toggleBurger}>მენტორები</NavLink>
          <NavLink href="/contact" onClick={toggleBurger}>დაგვიკავშირდით</NavLink>
        </nav>
      </div>
    </div>
  )
}