import Button from "./Button";

function Hero() {
  return (
    <section className="relative pb-[300px] pt-12 xs:pb-[370px] sm:pb-[450px] md:px-8 md:pb-12 lg:px-20 lg:pb-28 lg:pt-32 xl:px-40 xl:pb-36">
      <div className="container relative z-50 mx-auto flex justify-center md:justify-start">
        <div className="relative z-10 flex max-w-[255px] flex-col sm:max-w-[300px] md:max-w-[400px] lg:max-w-[650px] xl:max-w-[800px]">
          <h1 className="mb-6 text-[28px] font-semibold sm:text-[32px] md:text-[40px] lg:text-[52px]">
            <span className="block bg-border-gradient bg-clip-text text-transparent">
              Hello, I'm Khilla,
            </span>
            <span className="-mt-2 block">fronted developer</span>
          </h1>
          <p className="mb-8 text-xs text-grey-text sm:text-sm md:text-base">
            front-end web developer, seeking to apply strong problem-solving
            skills and attention to detail with a focus on collaboration,
            innovation, and passion for coding
          </p>
          <div>
            <Button
              className="hidden md:block"
              href="https://drive.google.com/file/d/123jZHkWobV6QdY77JP2if2odU8nv6AuH/view?usp=drive_link"
            >
              Download CV
            </Button>
          </div>
        </div>

        <div className="absolute -left-16 top-[14rem] z-0 aspect-square h-[18rem] w-[18rem] rounded-full bg-border-gradient px-[1px] xs:h-[22rem] xs:w-[22rem] sm:top-[17rem] sm:h-[26rem] sm:w-[26rem] md:left-[20rem] md:top-0 md:h-[20rem] md:w-[20rem] lg:left-[30rem] lg:h-[26rem] lg:w-[26rem] xl:left-[38rem]">
          <div className="h-full w-full rounded-full bg-primary-bcg">
            <div className="absolute right-0 top-0 z-10 rounded-full bg-border-gradient px-[2px] shadow-custom-profile">
              <img
                src="/public/assests/profile.jpg"
                width={120}
                height={120}
                className="rounded-full xs:h-[160px] xs:w-[160px] sm:h-[160px] sm:w-[160px]"
              />
            </div>
            <div className="absolute -right-4 top-20 h-[3rem] w-[3rem] rounded-full bg-border-gradient xs:top-24 sm:top-28">
              <div
                className="h-full w-full rounded-full"
                style={{ backgroundColor: "rgba(0, 0, 0, 15%)" }}
              ></div>
            </div>

            <Button
              className="absolute bottom-8 right-6 xs:bottom-16 xs:right-6 md:hidden"
              href="https://drive.google.com/file/d/123jZHkWobV6QdY77JP2if2odU8nv6AuH/view?usp=drive_link"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
