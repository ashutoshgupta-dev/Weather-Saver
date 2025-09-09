'use client'
// import { Metadata } from "next";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { insertData,selectData,deleteData } from "./serverFunction";
import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Home",
//   description: "Home",
// };
const Home=()=>{
    const{isSignedIn,user}=useUser()
    const[city,setCity]=useState("");
    const[msg,setMsg]=useState("");
    const[records,setRecords]=useState<{sno:number,city:string,temp:number,iconUrl:string,des:string}[]>([])
    let email="";
    if(isSignedIn){
       email=user.emailAddresses[0].emailAddress;
    }

    useEffect(()=>{
        if(isSignedIn){
           const fetchData=async()=>{
            const res=await selectData(email);
            const arr=[];
            for(const row of res){
                if(!row.city || row.city.trim()===""){
                    continue;
                }
                const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${row.city}&appid=3e67e145c7574ab64545eb7bad43df2e&units=metric`);
                const response=await data.json();
                console.log(response);
                const temp=response.main.temp;
                const icon=response.weather[0].icon;
                const iconUrl=`https://openweathermap.org/img/wn/${icon}@2x.png`;
                const des=response.weather[0].description
                const obj={sno:row.sno,city:row.city,temp,iconUrl,des};
                arr.push(obj)
            }
            setRecords(arr)
           }
           fetchData()
        }
    },[email,msg,isSignedIn])
    
    const handleAdd=()=>{
       insertData(email,city);
       setMsg(""+Math.random()*1000)
       console.log("city has been updated");   
    } 
    const handleDel=(sno:number)=>{
       deleteData(sno);
       setMsg(""+Math.random()*1000)
         
    }
    
    return(
        <div>
            {
                isSignedIn?
                <div>
                    <h2>✨Dashboard</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis itaque aperiam architecto laboriosam tempore expedita recusandae inventore placeat ipsa!</p>
                    <p className="input">
                        <input type="text" placeholder="Search City"onChange={(e)=>setCity(e.target.value)}/>
                        <input type="button" value="Add City" onClick={handleAdd}/>
                    </p>
                    <hr />
                    {
                        records.map((row,index)=>{return(
                            <div key={index} className="card">
                                <p>{row.city}</p>
                                <p>{row.temp}&deg;c</p>
                                <p>{row.des}</p>
                                <Image src={row.iconUrl} width={70} height={70} alt={row.city}/><br />
                                <input type="button" value="❌" onClick={()=>handleDel(row.sno)}/>
                            </div>
                        )})
                    }
                </div>
                :
                <div>
                    <h2>Access Denied</h2>
                    <p>you must Login to explore further</p>
                </div>
            }
        </div>
    )
}
export default Home;