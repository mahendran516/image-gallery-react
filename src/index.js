import "./index.css"
import ReactDOM from 'react-dom/client';
import one from "./assets/images/one.jpeg"
import two from "./assets/images/two.jpeg"
import three from "./assets/images/three.jpeg"
import four from "./assets/images/four.jpeg"
import five from "./assets/images/five.jpeg"
import six from "./assets/images/six.jpeg"


const root = ReactDOM.createRoot(document.getElementById('root'));

function Image()
{
  return(
    <div id="main">
      <div id="img">
      <img src={one} alt="one"></img>
       <p style={{textAlign:"center"}}>Champion 2018</p>
      </div>
      <div id="img">
      <img src={two} alt="one"></img>
       <p style={{textAlign:"center"}}>World Cup 2011</p>
      </div>
      <div id="img">
      <img src={three} alt="one"></img>
       <p style={{textAlign:"center"}}>T20i World Cup 2024</p>
      </div>
      <div id="img">
      <img src={four} alt="one"></img>
       <p style={{textAlign:"center"}}>Virat&Rohit</p>
      </div>
      <div id="img">
      <img src={five} alt="one"></img>
       <p style={{textAlign:"center"}}>Csk</p>
      </div>
      <div id="img">
      <img src={six} alt="one"></img>
       <p style={{textAlign:"center"}}>Champion 2023</p>
      </div>
      <div id="img">
      <img src={one} alt="one"></img>
       <p style={{textAlign:"center"}}>Csk</p>
      </div>
      <div id="img">
      <img src={two} alt="one"></img>
       <p style={{textAlign:"center"}}>India</p>
      </div>
      
        
        
    </div>
  )
}

root.render(<Image></Image>);

