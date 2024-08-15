import codepic1 from '../assets/codepic1.jpg'
import codepic2 from '../assets/codepic2.jpg'
export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
        <p>
        Here is a list of some of my fav previous projects!
        </p>
        <a href="https://github.com/GriffinB97/The-Flavor-Direction" target="_blank">
          <img src={codepic1} className="image"/>
        </a>
       
        <a href="https://react.dev" target="_blank" >
          <img src={codepic2}  className="image"/>
        </a>
      </div>
    );
  }
  