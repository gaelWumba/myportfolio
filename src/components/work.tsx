import Image from 'next/image'
export const Work = ({ textColor, bgColor, isOpen }: { textColor: string; bgColor: string; isOpen: boolean }) => {  

  return (
    <div className="pt-40 bg-transparent">
      <div className="h-full grid lg:grid-cols-3 md:grid-cols-2 p-5">
        <div className="md:hidden lg:block"></div>
        <p
          className="xs:text-4xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl"
          style={{
            WebkitTextStroke: `1px ${textColor}`,
            color: "transparent",
          }}
        >
          Donner<br />
          forme<br />
          aux idées.
        </p>
        <div className="md:hidden lg:block"></div>
      </div>
      <div className="">
        <div className={`${ isOpen ? "-z-10" : "relative" } w-full h-full`} >            
            <img
              src="images/projects.png"
              className="w-full"
              alt="réalisations"
            />
            <div
              style={{
                backgroundColor: bgColor,
                opacity: 0.5,
              }}
              className={`${ isOpen ? "-z-10" : ""} absolute top-0 left-0 w-full h-full mix-blend-multiply transition-colors duration-500 ease-in-out`}
            ></div>
          </div>
        </div>
    </div>
  );
};
