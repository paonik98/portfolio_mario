import { Link } from "react-scroll";

function ProjectsBoard() {
  return (
    <div className="">
      <div className="h-screen grid place-items-center" id="projectboard">
        <div className="w-screen grid place-items-center">
          <div className="flex flex-row md:flex-row ">
            <Link
              to="project1"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Project1
            </Link>
            <Link
              to="project2"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer mx-8"
            >
              Project2
            </Link>
            <Link
              to="project3"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Project3
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsBoard;
