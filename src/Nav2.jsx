import React, { useState } from 'react';
import './Nav2.css';
// import { SiQzone } from "react-icons/si";
import { Link } from 'react-router-dom';

 const navarray = [
   {
     logo: "Zameen.com",
     class: "logo",
   },
   {
     logo: "BUY",
     class: "buy",
   },
   {
     logo: " home",
     class: "buy1",
   },
   {
     logo: "plot",
     class: "buy1",
   },
   {
     logo: "Commercial",
     class: "buy1",
   },
   {
     logo: "RENT",
     class: "rent",
   },
   {
     logo: "AGENTS",
     class: "agents",
   },
   {
     logo: "New Projects",
     class: "newprojects",
   },
 ];

export default function Nav2() {
  const [showbuy,setshowbuy]=useState(true)
  const handlebuy=()=>{
    setshowbuy(prevState => !prevState);
  }

  return (
      <div className="header1">
        {
          navarray.map((i,j)=>(
              <Link 
              
              style={i.class.includes('buy1') && !showbuy ? {display: 'none'} : {}}
              to="" className={i.class}
              onClick={i.class==='buy' ? handlebuy : ""}
              >
               

                {i.logo}
                </Link>

          ))
        }
      </div>
  );
}
