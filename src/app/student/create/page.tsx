"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createStudent } from "@/app/actions/student"
import { Student } from "@/app/generated/prisma"
import { toast } from "sonner"

const studentSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  studentid: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  isActive: z.boolean(),
 remarks: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})


export default function StudentCreatePage() {

  // 1. Define your form.
  const form = useForm<z.infer<typeof studentSchema>>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      username: "",
      lastname: "",
      studentid: "",
      isActive: true,
      remarks: "",
    },
  })

 
  async function onSubmit(values: z.infer<typeof studentSchema>) {
   await createStudent(values as Student);
   form.reset();
    toast ("Sutdent Created");
  }


  return (
    <div className="flex items-center justify-center h-screen">
        <div className="p-5 bg-slate-100 rounded-2xl">

       
<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>lastname</FormLabel>
              <FormControl>
                <Input placeholder="lastname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="studentid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>StudentId</FormLabel>
              <FormControl>
                <Input placeholder="studentid" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        /><FormField
          control={form.control}
          name="remarks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>remarks</FormLabel>
              <FormControl>
                <Input placeholder="remarks" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
     </div>
    </div>
    
  )
}