import React from 'react'

const Username = ({params}) => {
  return (
    <>
        <div className='text-white text-2xl font-bold p-4 flex justify-center items-center'>
            {params.username}
        </div>
        <div className='cover w-full relative '>
          <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/18.gif?token-hash=9IrSmEhiYatLIHxQhboickQ35B20kKEkgNwaX79sF_U%3D&token-time=1751587200" alt="cover_page" />
          <div className='absolute bottom left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <img width={70} height={70} src="https://imgs.search.brave.com/mzYnhTsprrOd6Zviy4rFgzB0ZvF3Svxka26kVXH8dh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wNi82/ODQzMDJiMjUyNTEz/X2Z1bm55LWNhdC1w/aWNzLWdnb21pLmpw/Zw" alt="" />
          </div>
        </div>
    </>
  )
}

export default  Username