import { useToast } from "@/hooks/use-toast";
import axios from 'axios';
import { FormEvent, useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

const AddUser = () => {
  const [name, setName] = useState('')
  const { toast, } = useToast()
  const handleChange = () => {
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Adding New User",
      description: "Please wait..."
    })
    try {
      const { data } = await axios.post(import.meta.env.VITE_SERVER + `/new-user`, { name: name.trim() }, { headers: { 'Content-Type': 'application/json' } })
      toast({
        title: data.msg,
        description: "Reloading Page in 5 seconds"
      })
      setTimeout(() => {
        window.location.reload()
      }, 5000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err)
      toast({
        variant: "destructive",
        title: err?.response?.data?.msg || "Uh oh! Something went wrong.",
        description: "Please Try Again",
      })
    }
  };
  return (
    <div>
      <h2 className="mb-10 text-xl text-center mt-10 sm:text-5xl dark:text-white text-black">
        Add User
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={['Enter User Name']}
        onChange={handleChange}
        onSubmit={onSubmit}
        value={name}
        setValue={setName}
      />
    </div>
  )
}

export default AddUser