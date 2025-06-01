import React, { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {

    const [form, setForm] = useState({ site: '', user: '', pass: '' })

    const ref = useRef()

    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem('passwords')
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const copyText = (text) => {
        toast('Copied to Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
        });
        navigator.clipboard.writeText(text)
    }

    const showPassword = () => {
        passwordRef.current.type = 'text'
        if (ref.current.src.includes("/open.png")) {
            ref.current.src = "/close.png"
            passwordRef.current.type = 'text'
        }
        else {
            ref.current.src = "/open.png"
            passwordRef.current.type = 'password'
        }
    }

    const savePasword = () => {
        // console.log(form);
        if (form.site === '' || form.user === '' || form.pass === '') {
            toast('Invalid Inputs', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce,
            });
            return
        }
        //save password logic
        if (form.site.length < 5 || form.user.length < 3 || form.pass.length < 5) {
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            setForm({ site: '', user: '', pass: '' })
            toast('Password saved Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce,
            });
        }
    }

    const deletePassword = (id) => {
        console.log("Deleting password with id:", id);
        //delete password logic
        const updatePasswords = passwordArray.filter(item => item.id !== id)
        setPasswordArray(updatePasswords)
        localStorage.setItem('passwords', JSON.stringify(updatePasswords))
        toast('Password deleted Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
        });
    }

    const editPassword = (id) => {
        console.log('Editing Password with id:', id)
        const temp = passwordArray.find(item => item.id === id)
        console.log(temp.site, temp.user, temp.pass);
        deletePassword(id)
        setForm({ site: temp.site, user: temp.user, pass: temp.pass })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const passwordRef = useRef()

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            // transition={Bounce}
            />
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
                            <input name='pass' value={form.pass} onChange={handleChange} placeholder='Enter Password' type="password" ref={passwordRef} className='rounded-full border border-green-500 w-full px-4 py-1' />
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

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='text-center font-bold text-red-500'>No Passwords to Show</div>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full rounded-xl overflow-hidden">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>UserName</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='border border-white py-2 text-center '>
                                            <div className='flex items-center justify-center gap-4' onClick={() => copyText(item.site)}>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <img className='cursor-pointer w-[15px]' src="/copy.svg" alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-white py-2 text-center '>
                                            <div className='flex items-center justify-center gap-4' onClick={() => copyText(item.user)}>
                                                <span>
                                                    {item.user}
                                                </span>
                                                <img className='cursor-pointer w-[15px]' src="/copy.svg" alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-white py-2 text-center '>
                                            <div className='flex items-center justify-center gap-4' onClick={() => copyText(item.pass)}>
                                                <span>
                                                    {item.pass}
                                                </span>
                                                <img className='cursor-pointer w-[15px]' src="/copy.svg" alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-white py-2 text-center flex items-center justify-center gap-4'>
                                            <div className='Edit cursor-pointer' onClick={() => editPassword(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/cbtlerlm.json"
                                                    trigger="hover"
                                                    // delay="150"
                                                    // state="in-dynamic"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </div>
                                            <div className='Delete cursor-pointer' onClick={() => deletePassword(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/nhqwlgwt.json"
                                                    trigger="morph"
                                                    state="morph-trash-in"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>



        </div>
    )
}

export default Manager