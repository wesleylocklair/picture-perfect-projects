import codepic1 from '../assets/codepic1.jpg'
import codepic2 from '../assets/codepic2.jpg'
import codepic4 from '../assets/codepic4.jpg'

export default function Portfolio() {
    return (
      <div className='container card'>
        <h1 className='header1'>Portfolio</h1>
          <p>
            Here is a list of some of my fav previous projects!
          </p>
        <div className="container">
          <a href="https://github.com/GriffinB97/The-Flavor-Direction" target="_blank">
          <div className="centered">Colloborative Project!</div>
            <img src={codepic1} className="image"/>
          </a>
        </div>
       
       <div className="container">
        <a href="https://github.com/wesleylocklair/readme-creator" target="_blank" >
        <div className="centered">NODE Inquirer Project</div>
          <img src={codepic2}  className="image"/>
        </a>
        </div>

        <div className="container">
        <a href="https://github.com/wesleylocklair/employee-directory" target="_blank" >
        <div className="centered">SQL + NODE Database Input</div>
          <img src={codepic4}  className="image"/>
        </a>
        </div>
      </div>
    );
  }
  