import { useState } from "react";
import "./App.css";
import Dog from "./components/dog";
import Home from "./sections/Home";
import Header from "./components/header";
import Footer from "./components/footer";
import Information from "./components/information";

function App() {
  const [image,setImage] = useState<number>(1)

  return (
    <>
    <Header/>
      <Home image={image}>
        <Dog handleClick={() => {
          setImage((prevImage) => prevImage === 9 ? 1:prevImage + 1)
        }}/>
      </Home>
      <Information/>
      <Footer/>
    </>
  );
}

export default App;
