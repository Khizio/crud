import React from "react"
import Link from "next/link"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { EyeIcon, TrashIcon } from "lucide-react"
import prisma from "@/lib/prisma"
import DeleteDialog from "@/components/ui/customs/delete-dialog"
import { number, string } from "zod/v4-mini"

async function getAllActiveStudents() {
  const students = await prisma.student.findMany({
    where: {
      isActive: true,
    },
  })

  return {
    success: true,
    data: students,
  }
}

const StudentList = async () => {
  const students = await getAllActiveStudents()

  return (
    <div className="flex items-center justify-center">
      <div className="w-[750px] p-8">
        <Table>
          <TableCaption>List of all active students.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">StudentId</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Lastname</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Remarks</TableHead>
              <TableHead>View</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.data.map((student: any) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.studentid}</TableCell>
                <TableCell>{student.username}</TableCell>
                <TableCell>{student.lastname}</TableCell>
                <TableCell>{student.isActive ? "Yes" : "No"}</TableCell>
                <TableCell>{student.remarks}</TableCell>
                <TableCell>
                  <Link href={`/student/${student.id}`}>
                    <Button variant="ghost">
                      <EyeIcon />
                    </Button>
                  </Link>
                </TableCell>
                <TableCell>
                <DeleteDialog id = {student.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default StudentList
