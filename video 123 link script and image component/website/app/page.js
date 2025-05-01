import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300 relative">
      {/* <h1>Hello Umair Saifi.</h1> */}
      {/* <Image className="mx-auto" width={100} height={100} src="https://i.pinimg.com/736x/ec/ff/77/ecff778036a7dfa2a481c28925c932dd.jpg" alt="" /> */}
      {/* <Image className="mx-auto objrct-contain" src="https://i.pinimg.com/736x/ec/ff/77/ecff778036a7dfa2a481c28925c932dd.jpg" alt="" /> */}
      <Image className="mx-auto object-cover" fill={true} src="https://i.pinimg.com/736x/ec/ff/77/ecff778036a7dfa2a481c28925c932dd.jpg" alt="" />
    </div>
  );
}
 