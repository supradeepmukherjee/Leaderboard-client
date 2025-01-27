import AddUser from "./components/AddUser";
import Leaderboard from "./components/Leaderboard";
import SelectUser from "./components/SelectUser";

function App() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-4 gap-8 overflow-x-hidden">
      <AddUser />
      <SelectUser />
      <Leaderboard />
    </div>
  );
}

export default App
