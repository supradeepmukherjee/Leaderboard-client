import AddUser from "./components/AddUser";
import SelectUser from "./components/SelectUser";
import { Toaster } from "@/components/ui/toaster"
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
      <div className="h-full flex flex-col justify-center items-center px-4 gap-8">
        <AddUser />
        <SelectUser />
        <Leaderboard />
        <Toaster />
      </div>
  );
}

export default App
