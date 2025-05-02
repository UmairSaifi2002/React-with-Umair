'use client'
import Image from "next/image";

export default function Home() {

  const handleClick = async () => {
    let data = {
      name: 'umair',
      role: 'Coder'
    }
    let a = await fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res);
    
  }

  return (
    <div className="container">
      <h1 className="text-3xl font-bold">Next Js API route demo</h1>
      <button className="" onClick={handleClick}>Click me</button>
    </div>
  );
}
