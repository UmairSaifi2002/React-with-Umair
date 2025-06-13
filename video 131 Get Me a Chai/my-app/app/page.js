import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-4">
        <div className="font-bold text-6xl flex justify-center items-center gap-4">
          <div className="">
            <span className="text-purple-600">Buy me a Chai</span>
          </div>
          <span><img src="/tea.gif" alt="tea" width={100} /></span>
        </div>
        <p>
          A Crowd Funding Website for Chai Lovers by Umair. Start Now!
        </p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Buy now</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      <div >

        <div className="bg-white h-1 opacity-10"></div>

        <div className="text-white container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-[20px]">Your Supporter can Buy you a Chai</h2>
          <div className="flex gap-5 justify-around">
            <div className="item space-y-3 flex flex-col items-center justify-center">
              <img className="bg-slate-400 rounded-full p-2 text-black" src="/man.gif" alt="working man" width={100} />
              <p className="font-bold">Fund Yourself</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="item space-y-3 flex flex-col items-center justify-center">
              <img className="bg-slate-400 rounded-full p-2 text-black" src="/coin.gif" alt="working man" width={100} />
              <p className="font-bold">Fund Yourself</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="item space-y-3 flex flex-col items-center justify-center">
              <img className="bg-slate-400 rounded-full p-2 text-black" src="/group.gif" alt="working man" width={100} />
              <p className="font-bold">Fans wants to help</p>
              <p>Your fans are available to help you Anytime.</p>
            </div>
          </div>
        </div>

        <div className="bg-white h-1 opacity-10"></div>

        <div className="text-white container mx-auto py-16 flex flex-col justify-center items-center gap-16">
          <h2 className="text-3xl font-bold text-center ">Learn More About Us</h2>
          {/* <div className="flex gap-5 justify-around">
            <div className="item space-y-3 flex flex-col items-center justify-center">
              <img className="bg-slate-400 rounded-full p-2 text-black" src="/man.gif" alt="working man" width={100} />
              <p className="font-bold">Fund Yourself</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="item space-y-3 flex flex-col items-center justify-center">
              <img className="bg-slate-400 rounded-full p-2 text-black" src="/coin.gif" alt="working man" width={100} />
              <p className="font-bold">Fund Yourself</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="item space-y-3 flex flex-col items-center justify-center">
              <img className="bg-slate-400 rounded-full p-2 text-black" src="/group.gif" alt="working man" width={100} />
              <p className="font-bold">Fans wants to help</p>
              <p>Your fans are available to help you Anytime.</p>
            </div>
          </div> */}
          <iframe width={560} height={315} src="https://www.youtube.com/embed/QtaorVNAwbI?si=yukvYrJ8CvNVIK_E" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/sgNZcK8QIyc?si=xg6YN8bbR9CAZ3r0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/T-KEXiSKa-k?si=sTZ-MCRAE7aYPEKO" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </div>

    </>
  );
}
