import React, { useRef, useState } from 'react'

const Manager = () => {

    const [form, setForm] = useState({site:'', user: '', pass: ''})

    const ref = useRef()

    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem('passwords')
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showPassword = () => {
        if (ref.current.src.includes("/open.png")) {
            ref.current.src = "/close.png"
        }
        else {
            ref.current.src = "/open.png"
        }
    }

    const savePasword = () => {
        console.log(form);        
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
            {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
            <div className="mycontainer mx-auto ">
                <h1 className='font-bold text text-4xl text-center'>
                    <div className="logo font-bold text-white text-2xl">
                        <span className='text-green-500'>&lt;</span>
                        <span className='text-slate-900'>
                            Pass
                        </span>
                        <span className='text-green-700'>OP/&gt;</span>
                    </div>
                </h1>
                <p className='text-green-800 text-center'>Your own Password Manager</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input name='site' value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full px-4 py-1' type="text" />
                    <div className="flex w-full justify-between gap-8">
                        <input name='user' value={form.user} onChange={handleChange} placeholder='Enter UserName' type="text" className='rounded-full border border-green-500 w-full px-4 py-1' />
                        <div className="relative">
                            <input name='pass' value={form.pass} onChange={handleChange} placeholder='Enter Password' type="text" className='rounded-full border border-green-500 w-full px-4 py-1' />
                            <span className='absolute right-0 top-[1px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-2' width={34} src="/open.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePasword} className='flex justify-center items-center bg-green-600 rounded-full px-4 py-2 w-fit hover:bg-green-500 gap-4 border-2 border-green-900 cursor-pointer'>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover"
                            // style="width:250px;height:250px"
                        >
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Manager