'use server'
import sql from "./db";

export const insertData=async(email:string,city:string)=>{
  await sql `insert into records(email,city) values(${email},${city})`;
}

export const selectData=async(email:string)=>{
   const data=await sql `select * from records where email=${email}`;
   return data;
}
export const deleteData=async(sno:number)=>{
   const data=await sql `delete  from records where sno=${sno}`;
   return data;
}
