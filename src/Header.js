import React from "react"

 export default function Header(){
    return(
      <header>
        <nav className="nav">
            <img src="sheds.jpg" alt="sheds pic" className="nav-logo"/>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    
      </header>
  
    )
  }