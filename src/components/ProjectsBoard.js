import { Link } from "react-scroll";

function ProjectsBoard() {
  return (
    <div className="" id="projectboard">
      <div className="h-screen grid place-items-center">
        <div className="w-screen grid place-items-center">
          <div className="flex flex-row">
            {/* First project */}
            <Link to="project1" spy={true} smooth={true} duration={500}>
              <div className="relative overflow-hidden border-4 border-black p-2 mx-4 rounded-full cursor-pointer h-56 w-56 group">
                <img
                  src="https://media.wired.com/photos/593261cab8eb31692072f129/4:3/w_929,h_697,c_limit/85120553.jpg"
                  className="w-full scale-150 translate-y-4  group-hover:blur-sm transition duration-200 absolute"
                  alt="skrt"
                ></img>
                <div
                  className="h-full w-full grid place-items-center
                        font-extrabold font-mono text-2xl drop-shadow-2xl
                        opacity-0 group-hover:opacity-100 duration-500 
                        absolute"
                >
                  Progetto 1
                </div>
              </div>
            </Link>
            {/* End of first project */}
            {/* Second project */}
            <Link to="project2" spy={true} smooth={true} duration={500}>
              <div className="relative overflow-hidden border-4 border-black p-2 mx-4 rounded-full cursor-pointer h-56 w-56 group">
                <img
                  src="https://www.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg"
                  className="w-full scale-150 translate-y-4  group-hover:blur-sm transition duration-200 absolute"
                  alt="skrt"
                ></img>
                <div
                  className="h-full w-full grid place-items-center
                  font-extrabold font-mono text-2xl drop-shadow-2xl
                  opacity-0 group-hover:opacity-100 duration-500 
                  absolute"
                >
                  Progetto 2
                </div>
              </div>
            </Link>
            {/* End of second project */}
            {/* Third project */}
            <Link to="project3" spy={true} smooth={true} duration={500}>
              <div className="relative overflow-hidden border-4 border-black p-2 mx-4 rounded-full cursor-pointer h-56 w-56 group">
                <img
                  src="https://www.planetnatural.com/wp-content/uploads/2023/06/meerkat-compressed.jpg"
                  className="w-full scale-200 translate-y-8  group-hover:blur-sm transition duration-200 absolute"
                  alt="skrt"
                ></img>
                <div
                  className="h-full w-full grid place-items-center
                  font-extrabold font-mono text-2xl drop-shadow-2xl
                  opacity-0 group-hover:opacity-100 duration-500 
                  absolute"
                >
                  Progetto 3
                </div>
              </div>
            </Link>
            {/* End of third project */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsBoard;
