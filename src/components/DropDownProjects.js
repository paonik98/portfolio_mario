import { Link } from "react-scroll";

function DropDownProjects() {
  return (
    <div className="flex flex-col mx-8">
      <div
        className="border-4 border-black rounded-xl  my-4 
                        w-48
                        bg-[#b2f7ef] 
                        transition-all duration-300 ease-liner "
      >
        <ul className="px-2 py-1 font-bold font-sans">
          <li className="px-1 rounded-xl hover:bg-[#7bdff2] ">
            <Link to="test1" spy={true} smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className="px-1 rounded-xl hover:bg-[#7bdff2] ">
            Madetteranean tour
          </li>
          <li className="px-1 rounded-xl hover:bg-[#7bdff2] ">Berlusca</li>
        </ul>
      </div>
    </div>
  );
}

export default DropDownProjects;
