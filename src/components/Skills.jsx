import { skills } from "../constants/cons";

function Skills() {
  return (
    <section className="px-6 pb-16 xs:px-8 sm:px-16 md:px-6 lg:px-20 xl:px-40">
      <div className="container mx-auto">
        <h2 className="mb-8 text-xl font-semibold tracking-wide xl:text-2xl">
          Additional technologies and skills
        </h2>

        <ul className="flex flex-wrap items-center justify-between md:justify-start md:gap-[5%]">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="mb-4 flex w-[50%] items-center gap-2 md:w-[30%]"
            >
              <div className="h-3 w-3 rounded-full bg-border-gradient" />
              <p className="font-semibold">{skill.skill}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
