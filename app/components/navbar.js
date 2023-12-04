import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className=" bg-white sticky top-0 left-0 z-50 shadow-md">
       
        <div className=" m-auto max-w-[1260px] h-[100px] flex items-center justify-between">
          <div className="flex gap-[8px] font-bold">
          <Image 
            src="/Group.png"
            alt="logo"
            width={24}
            height={0}
          />
          <p className="text-sky-700 text-[20px]">The Box</p>
          </div>
          <ul className="flex gap-12 font-bold text-[20px] text-sky-700">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Team</li>
          </ul>
        </div>
      </div>
      </>
  );
}