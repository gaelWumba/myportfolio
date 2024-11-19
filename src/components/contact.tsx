import Image from 'next/image'

export const Contact = ({ textColor, bgColor, isOpen }: { textColor: string; bgColor: string; isOpen: boolean }) => {
  return (
    <div className="h-full grid lg:grid-cols-3 md:grid-cols-2 p-8 pt-56">
      <div className="md:hidden lg:block"></div>
      <div className="stroke-text">
        <p
          className="xs:text-4xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl"
          style={{
            WebkitTextStroke: `1px ${textColor}`,
            color: "transparent",
          }}
        >
          Une <br />
          action <br />
          à la fois.<br />
        </p>
      </div>
      <div className="">
        <h1 className="sm:text-base sm:mt-4 md:text-xl lg:text-3xl font-medium">
          • WUMBA BUATU Gaël
        </h1>
      </div>
      <div className="sm:hidden md:hidden lg:block"></div>

      <div className="gid grid-rows-3">
        <h4 className="sm:text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
          • Disponible pour un poste en alternance.
        </h4>
        <div className="sm:my-10 md:my-36 lg:my-52 xl:my-44 2xl:my-56 text-transparent">d</div>
        <div className="xs:text-[13px] sm:text-xs md:text-base lg:text-lg 2xl:text-lg font-medium flex items-center justify-between pe-4  md:py-0 lg:py-0">
          <a
            href="mailto:g.wumbabuatu@gmail.com"
            className="hover:text-foreground border-b-2 border-foreground"
          >
            g.wumbabuatu@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/gael-wumba-buatu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground border-b-2 border-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/gaelWumba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground border-b-2 border-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
        <div>
          <figure className={`${ isOpen ? "-z-10" : "relative" } w-fit h-fit imgIndex`} >            
            <img
              src="/images/profil.jpg"
              className="sm:h-[100px] md:h-[400px] lg:h-[500px] xl:h-[430px] 2xl:h-[550px]"
              alt="WUMBA BUATU Gaël"
            />
            <div
              style={{
                backgroundColor: bgColor,
                opacity: 0.5,
              }}
              className={`${ isOpen ? "-z-10" : ""} absolute top-0 left-0 w-full h-full mix-blend-multiply`}
            ></div>
          </figure>
        </div>
    </div>
  
  );
};
