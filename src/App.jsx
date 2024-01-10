import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import SecondNav from "./components/SecondNav";
import MyFooter from "./components/MyFooter";
import MyGallery from "./components/MyGallery";

function App() {
  return (
    <div className="App">
      <MyNav />
      <SecondNav />
      <MyGallery searchValue="batman" />
      <MyGallery searchValue="avengers" />
      <MyGallery searchValue="harry potter" />
      <MyFooter />
    </div>
  );
}

export default App;
