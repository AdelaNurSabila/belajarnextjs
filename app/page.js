import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full relative m-auto h-[400px] ">
        <Image
          src="/heroimg.png"
          alt="groov"
          className="object-cover"
          quality={100}
          fill
        />
        <p className="absolute  inset-y-40 left-40 text-3xl upsize text - [40px] text-sky-700">
          Building things is our mission.
        </p>
      </div>

      {/* // our reputation //  */}
      <div className="pb-16">
        <p className="text-3xl text-center pt-16 pb-[30px] mx-auto">
          Our Reputation
        </p>
        <div className="flex gap-16 justify-center ">
          <div className="box-content h-48 w-32 p-4 border-4 ">
            <Image
              className="mx-auto pb-3.5 "
              src="/Group.png"
              alt="logo"
              width={24}
              height={0}
            />
            <div className="text-center">
              <p className=" pb-6 ">Best Services</p>
              <p className="text-sm">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </div>
          </div>

          <div className="box-content h-48 w-32 p-4 border-4 ">
            <Image
              className="mx-auto pb-3.5 "
              src="/Group.png"
              alt="logo"
              width={24}
              height={0}
            />
            <div className="text-center">
              <p className=" pb-6 ">Best Services</p>
              <p className="text-sm">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </div>
          </div>

          <div className="box-content h-48 w-32 p-4 border-4 ">
            <Image
              className="mx-auto pb-3.5 "
              src="/Group.png"
              alt="logo"
              width={24}
              height={0}
            />
            <div className="text-center">
              <p className=" pb-6 ">Best Services</p>
              <p className="text-sm">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* about ceo */}
      <div>
        <div className=" flex pl-[200px] ">
          <Image src="/ceo.png" alt="logo" width={700} height={500} />
          <div className="absolute box-content right-[200px] my-[65px] bg-sky-700 h-[360px] w-[350px]">
            <p className="pb-[36px] ml-[40px] mt-[20px]  text-white font-bold">
              About us
            </p>
            <p className="pb-[20px] ml-[40px] mr-[40px] text-justify  text-white">
              For more than 30 years we have been delivering world-class
              construction and we've built many lasting relationships along the
              way. We've matured into an industry leader and trusted resource
              for those seeking quality, innovation and reliability when
              building in the U.S.{" "}
            </p>
            <div>
              <button class=" hover:bg-blue-700 text-black rounded ml-[40px] bg-white w-[200px] mx-1 my-1">
                More on our history
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* servis */}
      <div className="bg-slate-200 h-[550px]">
        <p className=" font-bold text-3xl text-center pb-8 pt-10">Services</p>
        <div className=" flex gap-8 content-center justify-center">
          <div className="h-[130px] w-[181px] rounded overflow-hidden shadow-lg bg-white m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/Construction.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="mx-auto m-4"
              src="/line.png"
              alt="logo"
              width={50}
              height={20}
            />
            <p class="font-bold text-xl mb-2 text-center">Construction</p>
          </div>

          <div className="h-[130px] w-[181px] rounded overflow-hidden shadow-lg bg-sky-700 m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/renov.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="mx-auto m-4"
              src="/line.png"
              alt="logo"
              width={50}
              height={20}
            />
            <p class="font-bold text-xl mb-2 text-center">Renovation</p>
          </div>

          <div className="h-[130px] w-[181px] rounded overflow-hidden shadow-lg bg-white m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/consult.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="mx-auto m-4"
              src="/line.png"
              alt="logo"
              width={50}
              height={20}
            />
            <p class="font-bold text-xl mb-2 text-center">Consultation</p>
          </div>
        </div>

        <div className=" flex gap-8 content-center justify-center">
          <div className="h-[130px] w-[181px] rounded overflow-hidden shadow-lg bg-sky-700 m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/repair.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="mx-auto m-4"
              src="/line.png"
              alt="logo"
              width={50}
              height={20}
            />
            <p class="font-bold text-xl mb-2 text-center">Repair Services</p>
          </div>

          <div className="h-[130px] w-[181px] rounded overflow-hidden shadow-lg bg-white m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/arct.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="mx-auto m-4"
              src="/line.png"
              alt="logo"
              width={50}
              height={20}
            />
            <p class="font-bold text-xl mb-2 text-center">Architecture</p>
          </div>

          <div className="h-[130px] w-[181px] rounded overflow-hidden shadow-lg bg-sky-700 m-8 ">
            <Image
              className=" mx-auto pt-3"
              src="/electric.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image
              className="mx-auto m-4"
              src="/line.png"
              alt="logo"
              width={50}
              height={20}
            />
            <p class="font-bold text-xl mb-2 text-center">Electric</p>
          </div>
        </div>
      </div>
    </>
  );
}
