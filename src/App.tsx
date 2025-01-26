import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AddUser from "./components/ui/AddUser";
import SelectUser from "./components/SelectUser";
import { Toaster } from "@/components/ui/toaster"

const server = import.meta.env.VITE_SERVER

function App() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-4 gap-8">
      <AddUser />
      <SelectUser />
      <div className="border-t-2 w-screen">
        <h2 className="mb-10 text-xl text-center mt-10 sm:text-5xl dark:text-white text-black">
          Leaderboard
        </h2>
        <div className="flex justify-center gap-4 w-[60vw] m-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default App
