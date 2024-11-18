'use client';

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
        <div className={`${ isOpen ? "hidden" : "relative" } w-full h-full`} >            
            <img
              src="images/wireframe.svg"
              className="w-full"
              alt="WUMBA BUATU Gaël"
            />
            <div
              style={{
                backgroundColor: bgColor,
                opacity: 0.5,
              }}
              className="absolute top-0 left-0 w-full h-full mix-blend-multiply"
            ></div>
          </div>
        </div>
    </div>
  );
};
