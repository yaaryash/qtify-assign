import "./App.css";
import Button from "./Components/Button/Button";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div>
      <Button text="Give Feedback" />
      <Search placeholder="Search a song of your choice" />
    </div>
  );
}

export default App;
