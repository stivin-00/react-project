import React from 'react'
import { social } from './data';
import "./index.css"

function App() {
    return (
        <>
    <nav className="yy">
      <div className='nav-center'>
        <div className='nav-header'>
          <h4>all projects created while taking <a href="https://github.com/john-smilga">JOHN SMILGA'S</a> complete react course.</h4>
        </div>
       
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>  
        </>
    )
}

export default App
