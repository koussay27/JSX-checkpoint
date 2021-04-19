import logo from './logo.svg';
import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import ReactPlayer from "react-player"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{border:'solid 1px black',maxWwidth:'100vw'}}>

 <h1 className="title-red">Koussay</h1>

 

 <img src={imageInSrc} alt ='imageInSrc' ></img>

 

 <img src="/imageInPublic.jpg" alt="myimage" ></img>
</div>

<div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=fibYknUCIU4"
      />
    </div>
      </header>
    </div>
  );
}

export default App;
