'use client'
import { submitAction } from "@/actions/form"
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  return (
    <div>
      {/* <h1 className="text-2xl font-bold" >Server Action's</h1> */}
      <form ref={ref} action={ (e) => {submitAction(e); ref.current.reset()} }>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-white" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-white" type="text" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
