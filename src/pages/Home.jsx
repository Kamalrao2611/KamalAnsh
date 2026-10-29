import Countdown from "../components/Countdown";
import "./Home.css"
import Todo from "../components/Todo";
import weddingImage from "../assets/weds 6.jpg";
function App() {
  return (
    <div>
      <p>Kamal <img src={weddingImage} height={"100px"} /> Anshu</p>

      <Countdown />

      {/* <Todo /> */}
    </div>
  );
}

export default App;