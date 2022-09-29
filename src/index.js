import React from 'react'
import ReactDOM from 'react-dom'
import '../src/style.css'
import './header'

function Footer(){
  return(
    <footer className="footer">
          <small>
            @2022 Kenben dev projects
          </small>
    </footer>

  )
}

function MainContent(){
  return(

    <div className='body-content'>
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
    return (
    <div>
        <Header />      
        <MainContent />
        <Footer />
    </div>
  );
}



ReactDOM.render(<Page/>, document.getElementById('root'))
