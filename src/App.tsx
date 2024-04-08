import { useState } from "react";
import "./App.css";
import Dog from "./components/dog";
import Home from "./sections/Home";

function App() {
  const [image,setImage] = useState<number>(1)

  return (
    <>
      <Home image={image}>
        <Dog handleClick={() => {
          setImage((prevImage) => prevImage === 9 ? 1:prevImage + 1)
        }}/>
      </Home>
    </>
  );
}

export default App;
