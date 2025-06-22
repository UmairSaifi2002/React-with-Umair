import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full relative '>
        <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/18.gif?token-hash=9IrSmEhiYatLIHxQhboickQ35B20kKEkgNwaX79sF_U%3D&token-time=1751587200" alt="cover_page" />
        <div className='absolute bottom left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <img className='border-4 border-white rounded-full' width={90} height={90} src="https://imgs.search.brave.com/mzYnhTsprrOd6Zviy4rFgzB0ZvF3Svxka26kVXH8dh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wNi82/ODQzMDJiMjUyNTEz/X2Z1bm55LWNhdC1w/aWNzLWdnb21pLmpw/Zw" alt="" />
        </div>
      </div>
      <div className='text-white p-4 flex flex-col justify-center items-center my-[50px] gap-2'>
        <div className='text-3xl font-bold'>
          @{params.username}
        </div>
        <div className='text-slate-400'>Creating Aniated Art for VTT's</div>
        <div className='text-slate-400'>9,719 members . 82 posts . $15,450/release</div>
      </div>

      <div className='flex gap-3 w-[80%] mx-auto '>
        <div className='w-1/2 bg-slate-900 rounded-lg text-white p-10'>
          <h2 className='text-xl text-center font-bold mb-5'>Supporters</h2>
          <ul className=''>
            <li className='my-2 flex gap-2 items-center text-[13px]'>
              <img className='' width={30} src="avatar.gif" alt="user-avatar" />
              User donates <span className='font-bold'>$30</span> with a msg : "I Support you bro! with lots of ❤"
            </li>
            <li className='my-2 flex gap-2 items-center text-[13px]'>
              <img className='' width={30} src="avatar.gif" alt="user-avatar" />
              User donates <span className='font-bold'>$30</span> with a msg : "I Support you bro! with lots of ❤"
            </li>
            <li className='my-2 flex gap-2 items-center text-[13px]'>
              <img className='' width={30} src="avatar.gif" alt="user-avatar" />
              User donates <span className='font-bold'>$30</span> with a msg : "I Support you bro! with lots of ❤"
            </li>
            <li className='my-2 flex gap-2 items-center text-[13px]'>
              <img className='' width={30} src="avatar.gif" alt="user-avatar" />
              User donates <span className='font-bold'>$30</span> with a msg : "I Support you bro! with lots of ❤"
            </li>
          </ul>
        </div>
        <div className='w-1/2 bg-slate-900 rounded-lg text-white p-10'>
          <h2 className='text-xl text-center font-bold mb-5'>Make a Payment</h2>
          <div className='flex flex-col gap-2'>
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Your Name' />
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Your Message' />
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter the Amount' />
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Pay</button>
          </div>
          <div className='flex gap-2 mt-5'>
            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-950'>Pay $10</button>
            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-950'>Pay $20</button>
            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-950'>Pay $40</button>
            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-950'>Pay $80</button>
            <button className='bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-950'>Pay $100</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Username