import React, { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const navItems = [
    {
      id: 1,
      title: "Home",
      url: "home",
    },
    {
      id: 2,
      title: "Skills",
      url: "skills",
    },
    {
      id: 3,
      title: "Resume",
      url: "resume",
    },
    {
      id: 3,
      title: "Tech Stack",
      url: "tech-stack",
    },
    {
      id: 4,
      title: "Businesses",
      url: "businesses",
    },
    {
      id: 5,
      title: "Contact",
      url: "footer",
    },
  ];

  const navLists = navItems.map((nav) => (
    <li>
      <Link activeClass="active" to={nav.url} smooth={true} offset={-100} duration={500}>
      {nav.title}
        </Link>
    </li>
  ));

  // const cta = [
  //     {
  //         'title':'Sign In',
  //         'url':'sign-in'
  //     },
  //     {
  //         'title':'Sign Up',
  //         'url':'sign-up'
  //     },
  // ];
  return (
    <div>
      <div className="fixed z-10 navbar bg-base-100 px-3">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLists}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">KBO.</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{navLists}</ul>
        </div>
        <div class="navbar-end">
          <label for="hireme" class="btn bg-primary rounded-3xl border-primary modal-button">Hire Me</label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
