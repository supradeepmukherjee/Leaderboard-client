import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/hooks/use-toast"
import { Form, FormControl, FormField, FormItem, FormMessage, } from "@/components/ui/form"
import { useEffect, useState } from "react";
import axios from "axios";

const FormSchema = z.object({ name: z.string({ required_error: "Please select a User's Name" }) })

const SelectUser = () => {
  const [users, setUsers] = useState<[{
    _id: string,
    name: string,
  }] | []>([])
  const form = useForm<z.infer<typeof FormSchema>>({ resolver: zodResolver(FormSchema) })
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: `Rewarding point(s) to ` + data.name,
      description: 'Please Wait...',
    })
    try {
      const res = await axios.put(import.meta.env.VITE_SERVER + `/reward`, { name: data.name }, { headers: { 'Content-Type': 'application/json' } })
      toast({
        title: res.data.msg,
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
  }
  useEffect(() => {
    axios.get(import.meta.env.VITE_SERVER + '/names')
      .then(({ data }) => setUsers(data.users))
      .catch(err => {
        console.log(err)
        toast({
          variant: "destructive",
          title: err?.response?.data?.msg || "Uh oh! Something went wrong while fetching Users' Names"
        })
      })
  }, [])
  return (
    <div className="border-t-2 w-screen">
      <h2 className="mb-10 text-xl text-center mt-10 sm:text-5xl dark:text-white text-black">
        Select User
      </h2>
      <div className="flex justify-center gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 flex justify-center items-center gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-[40vw]">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a User" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {users.map(u => (
                        <SelectItem value={u.name} key={u._id}>
                          {u.name}
                        </SelectItem>))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              Claim Reward
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default SelectUser