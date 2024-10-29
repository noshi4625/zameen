import React from "react";
import "./Nav.css";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { ImHome3 } from "react-icons/im";
import { MdSearch } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";




export default function Nav() {
  const page = {
    nav: [

      {
         title:<ImHome3 className="icoo" />
      },

      {title: "PROPERTIES"

      },

      { title: "PLOTFINDER",icon:null 

      },
      { title: "AREA GUIDES",icon:null

       },
      { title: "BLOG" ,icon:null

      },
      { title: "MAPS",icon:null

       },
      { title: "TOOLS", icon:<MdArrowDropDown  className="ico"/>

      },
      { title: "MORE",icon:<MdArrowDropDown className="ico" />

      },
    ],
    nav2: {
      butn: "Property ID",
      butn1: "Add Property",
      icon: [<IoSettingsOutline />,<IoSettingsOutline />,<IoMdContact />],
    },
  };

  return (
    <div>
      <div className="header">
        <ul>
          {page.nav.map((i,j) => (
            <li key={i}>{i.title} {i.icon && i.icon}</li>
          ))}
        </ul>
        <ul className="ua">
          <input className="me-3 " type="text" id="text" placeholder={page.nav2.butn}/>
          <MdSearch  className="search"/>
          <LuPlus  className="plus"/>
          <button className="b1 me-3"><Link >{page.nav2.butn1}</Link></button>

          {page.nav2.icon.map((icon, i) => (
            <button className="b2 me-3 " key={i}>{icon}</button>
          ))}
        </ul>
      </div>
    </div>
  );
}
