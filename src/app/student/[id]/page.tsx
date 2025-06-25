import { getStudentById } from "@/app/actions/student";
import React from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { promise, string } from "zod/v4-mini";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowBigLeft } from "lucide-react";

const StudentDetails = async ({
    params,
}: {
params : Promise < {id:string} >;
}) =>{
    const{id} = await params;
    const student = await getStudentById(Number(id));
        return(
            <div className="flex items-center justify-center">
<Card className="w-[300px]">
  <CardHeader>
    <CardTitle>{student.data?.studentid}</CardTitle>
    <CardDescription>{student.data?.username}{student.data?.lastname}</CardDescription>
  </CardHeader>
  <CardContent>
    <p> Status : {student.data?.isActive ? "Yes" : "No" }</p>
  </CardContent>
  <CardFooter className="flex items-center">
    <p>{student.data?.remarks}</p>
    <Link href="/student/list">
  <Button variant="ghost">
    <ArrowBigLeft className="mr-2" />
    Back
  </Button>
</Link>
  </CardFooter>
 

</Card>
</div>
        )
    
}

export default StudentDetails