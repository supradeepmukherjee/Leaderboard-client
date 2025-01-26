import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const SelectUser = () => {

  return (
    <div className="border-t-2 w-screen">
      <h2 className="mb-10 text-xl text-center mt-10 sm:text-5xl dark:text-white text-black">
        Select User
      </h2>
      <div className="flex justify-center gap-4">
        <Select >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button disabled={false}>
          Claim Reward
        </Button>
      </div>
    </div>
  )
}

export default SelectUser