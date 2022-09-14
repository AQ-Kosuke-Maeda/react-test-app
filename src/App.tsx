import { LikeButton } from "./components/LikeButton"
import { Sidebar } from "./components/Sidebar"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <LikeButton />
    </div>
  );
}
