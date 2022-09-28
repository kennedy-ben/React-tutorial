import React from 'react'
import ReactDOM from 'react-dom'

function Header(){
  return(
    <header>
      <nav className="nav">
          <img src="logo192.png" alt="react logo" width="40px"/>
          <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
      </nav>
  
    </header>

  )
}

function Footer(){
  return(
    <footer>
          <small>
            @2022 Kenben dev projects
          </small>
    </footer>

  )
}

function MainContent(){
  return(

    <div>
        <h1>Importance Of Learning React</h1>
          <ol>
              <li>You can be hired easily </li>
              <li>Is simple than Angular</li>
              <li>Others search for your own</li>
          </ol>
    </div>
    
    
  )
}

function Page() {
    return(
    <div>
        <Header/>      
        <MainContent/>
        <Footer/>
    </div>
  );
}



ReactDOM.render(<Page/>, document.getElementById('root'))
