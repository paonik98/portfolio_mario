import Carousel from "./Carousel";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

function Project1() {
  const slides = [
    {
      src: "https://picsum.photos/seed/img1/600/400",
      alt: "Image 1 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img2/600/400",
      alt: "Image 2 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img3/600/400",
      alt: "Image 3 for carousel",
    },
  ];

  return (
    <div className="h-screen grid place-items-center" id="project1">
      <div className="px-16">
        <Link
          to="projectboard"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <BsFillArrowUpCircleFill />
        </Link>
        <Carousel data={slides} />
      </div>
    </div>
  );
}

export default Project1;
