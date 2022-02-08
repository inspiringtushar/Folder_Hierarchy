import "./styles.css";
import Folder from "../components/Folder";
import explorer from "./data/dataFolder.js";
export default function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
