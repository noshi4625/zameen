import React from 'react'
import './Footer.css';

export default function Footer() {

    const page={
        ft1:[
            {
                header:"Do You Need Help ?",
                description: "Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.",
                num: "0 800 300-353",
                text:"Free from fixed and mobile phones in USA.",
                Email:"Email:",
                c1:"Call Center hours",
                date:"Mon-Sun 09:00-19:00",

            }

        ],




        ft2:[
          {
            class:"a1",
            title:"Let Us Help You ",
            d1:"Accessibility Statement ",
            d2:"Your Orders",
            d3:"Returns & Replacements",
            d4:"Shipping Rates & Policies",
            d5:"Refund and Returns Policy",
            d6:"Privacy Policy",
            d7:"Terms and Conditions",
            d8:"Cookie Settings",
            d9:"Help Center"
          },
          {
            class:"a2",
            title:"Make Money with Us: ",
            d1:"Sell on Blonwe ",
            d2:"Sell Your Services on Blonwe",
            d3:"Sell on Blonwe Business",
            d4:"Sell Your Apps on Blonwe",
            d5:"Become an Affilate",
            d6:"Advertise Your Products",
            d7:"Sell-Publish with Us",
            d8:"Become an Blonwe Vendor"
          },
          {
            class:"a3",
            title:"Get to Know Us",
            d1:"Careers for Blonwe",
            d2:"About Blonwe",
            d3:"Inverstor Relations",
            d4:"Blonwe Devicess",
            d5:"Customer reviews",
            d6:"Social Responsibility",
            d7:"Store Locations"
          },
        ],

        nav:[    
            {
              title:"f"
            },
    
            {
              title:"I"
            },
    
            {
              title:"Y"
            },
    
            {
              title:"T"
            },
        ],


        nav1:[    
          {
            title:"App Store"
          },
  
          {
            title:"Google Play"
          },
  
      ],

      nav2:[    
        {
          title:"Visa"
        },

        {
          title:"PayPal"
        },

        {
          title:"Skrill"
        },
        {
          title:"Klarna"
        },

    ],
    }    
  return (
    <div>
      <div className="main">
        <div className="child1">
        {page.ft1.map((i) => (
      <div key={i.header}> 
        <h1>{i.header}</h1>
        <p>{i.description}</p>
        <h1>{i.num}</h1>
        <p>{i.text}</p>
        <p>{i.Email} <b>info@example.com</b></p>
        <p>{i.c1}</p>
        <h1>{i.date}</h1>
      </div>
    ))}
          </div>
        <div className="child2">

        {
          page.ft2.map((i,j)=>(
            <div className={i.class} key={j}>
              <h1>{i.title}</h1>
              <p>{i.d1}</p>
              <p>{i.d2}</p>
              <p>{i.d3}</p>
              <p>{i.d4}</p>
              <p>{i.d5}</p>
              <p>{i.d5}</p>
              <p>{i.d6}</p>
              <p>{i.d7}</p>
              <p>{i.d8}</p>
              <p>{i.d9}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="main2">
          
           <div className="nav">
          <h4>Follow Us:</h4>
         
              {
                page.nav.map((i,j)=>(
                 
                  <button className='butn1'><a href="#"><b>{i.title}</b></a></button>
                ))
                
              }
          </div>


          <div className="nav1">
          <h4>Download App:</h4>
         
              {
                page.nav1.map((i)=>(
                 
                  <button className='butn2'><a href="#"><b>{i.title}</b></a></button>
                ))
                
              }
          </div>
      </div>

      <div className="main3">
        <p>Copyright 2024 © Blonwe WordPress Theme. All right reserved. Powered by.<a href="#">KLBTheme</a></p>

          <h3>We Accept:</h3>
          <ul>
          {page.nav2.map((i) => (
              <li><a href="#"><b>{i.title}</b></a></li>
            ))}
          </ul>
        
      </div>

    </div>
  )
}
