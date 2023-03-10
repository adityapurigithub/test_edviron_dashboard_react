import { SideNav, Main } from "./Components";
import "./App.css";
function App() {
  return (
    <div className="App bg-dark-900 min-h-screen md:flex">
      <SideNav />
      <Main />
    </div>
  );
}

export default App;
