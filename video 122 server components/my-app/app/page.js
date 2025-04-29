// 'use client'
// import Image from "next/image";
// import { useState, useEffect } from "react";

// Next Js is by default a Server Components
// but if we want to use the hooks in next.js
// we have to use 'use client' at the top of the code

// export default function Home() {
//   // const [state, setState] = useState(0)
//   console.log('Hello Umair!');
  
//   return (
//     <div>
//       <div>Hello EveryOne</div>
//       {/* <div>I am a HomePage {state}</div> */}
//       {/* <div onClick={() => setState(state+1)}>Click me</div> */}
//     </div>
//   );
// }

// now i will tell you about the server components

// now this is a server component
import fs from 'fs/promises'

export default function Home() {
  console.log('Hello Umair.');
  let a = fs.readFile('.gitignore')
  a.then(e => console.log(e.toString()) )

  return (
    <div>
      I am Component
    </div>
  )
}

