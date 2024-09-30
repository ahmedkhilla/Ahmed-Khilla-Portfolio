import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { technologies } from "../constants/cons";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#162950",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background:
      "linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)",
  },
}));

function Technologies() {
  return (
    <section
      id="technologies"
      className="px-6 py-16 xs:px-8 sm:px-16 md:px-6 lg:px-20 xl:px-40"
    >
      <div className="container mx-auto">
        <h2 className="mb-8 text-xl font-semibold tracking-wide xl:text-2xl">
          Technologies
        </h2>

        <ul className="space-y-8">
          {technologies.map((techno) => (
            <li key={techno.id}>
              <div className="flex items-center justify-between text-xs">
                <p>{techno.techno}</p>
                <p>{techno.progress}</p>
              </div>
              <div className="py-2">
                <BorderLinearProgress
                  variant="determinate"
                  value={techno.value}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Technologies;
