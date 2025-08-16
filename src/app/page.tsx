"use client";
import {Button} from "@/components/ui/button";
import{Input}from"@/components/ui/input"
import{useState}from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const { data: session}=authClient.useSession()

  const onSubmit=()=>{
    authClient.signUp.email({
      email,
      name,
      password,
    },{
      onError:()=>{
        window.alert("something went wrong")
      },
      onSuccess:()=>{
        window.alert("success")
      }
    });
  }
  if(session){
    return(
      <div className="p4 flex flex-col gap-y-4">
        <p>logged in as {session.user.name}</p>
        <Button onClick={()=>authClient.signOut()}>Sign out</Button>
      </div>
    );
  }
  
 

  return (<div className="p4 flex flex-col gap-y-4">
    <Input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <Input placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <Input placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <Button onClick={onSubmit}>Create user</Button>

  </div>
  );
}
