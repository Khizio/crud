"use server"

import prisma from "@/lib/prisma";
import { Student } from "../generated/prisma";
import { create } from "domain";
import { z } from "zod";

export async function createStudent(formData:Student) {
    await prisma.student.create({

        data: {
            username: formData.username,
            lastname: formData.lastname,
            studentid: formData.studentid,
            isActive: formData.isActive,
            remarks: formData.remarks,

        }
    })
}
export async function getAllActiveStudents() {
  const student = await prisma.student.findMany({
    where: {
      isActive: true,
    },
  })

  return {
    success: true,
    data: student,
  }
}

export async function getStudentById(_id:number) {
    const student = await prisma.student.findUnique({
        where :{
            id :_id

        }
    })
 return{
    success: true,
    data: student
 }   
}

export async function deleteStudentById(_id:number) {
    const student = await prisma.student.delete({
        where :{
            id :_id

        }
    })   
}