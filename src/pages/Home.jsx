
import Countdown from "../components/Countdown";
import "./Home.css";
import weddingImage from "../assets/weds 6.jpg";
import ours from "../assets/ours.jpeg";

// import Todo from "../components/Todo";

function App() {
  return (
    <div className="home">
      <img
          src={ours}
          alt="Kamal and Anshu"
          className="ours-image"
        />
      <p className="couple-title">
        Kamal
        <img
          src={weddingImage}
          alt="Kamal and Anshu"
          className="wedding-image"
        />
        Anshu
      </p>

      <Countdown />

      {/* <Todo /> */}
    </div>
  );
}

export default App;
