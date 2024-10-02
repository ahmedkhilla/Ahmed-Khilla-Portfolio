function Aboutme() {
  return (
    <section
      id="aboutme"
      className="px-6 pt-16 xs:px-8 sm:px-16 md:px-6 lg:px-20 xl:px-40"
    >
      <div className="container mx-auto">
        <h2 className="mb-8 text-xl font-semibold tracking-wide xl:text-2xl">
          About me
        </h2>

        <p className="text-sm font-medium tracking-wide">
          I'm a passionate Front-end Developer specializing in React.js with a
          strong focus on building clean, responsive web interfaces using
          Tailwind CSS. I transitioned from dentistry to web development, driven
          by my love for coding and problem-solving. Now, I create dynamic
          applications and constantly learn new technologies to improve my
          skills, currently diving deeper into Next.js.
        </p>
        {/* <ul>
          <li className="mb-4">
            <span className="mr-4 inline-block h-3 w-3 rounded-full bg-border-gradient" />
            <span className="text-sm font-medium tracking-wide">
              Front-end Developer with a passion for building dynamic,
              user-friendly web applications. My focus is on creating clean,
              responsive interfaces using React.js, and I love solving complex
              problems with simple, efficient solutions. I primarily work with
              Tailwind CSS for styling, ensuring a sleek and modern look for
              every project.
            </span>
          </li>
          <li className="mb-4">
            <span className="mr-4 inline-block h-3 w-3 rounded-full bg-border-gradient" />
            <span className="text-sm font-medium tracking-wide">
              {" "}
              I switched to web development from a career as a dentist, driven
              by my love for coding, which started as a hobby. Now, I’ve built
              multiple projects ranging from simple to complex apps,
              continuously honing my skills and expanding my knowledge.
            </span>
          </li>

          <li className="mb-4">
            <span className="mr-4 inline-block h-3 w-3 rounded-full bg-border-gradient" />
            <span className="text-sm font-medium tracking-wide">
              {" "}
              Always eager to learn new technologies and refine my craft, I’m
              currently deepening my expertise in Next.js and looking for
              exciting challenges where I can apply my skills.
            </span>
          </li>
        </ul> */}
      </div>
    </section>
  );
}

export default Aboutme;
