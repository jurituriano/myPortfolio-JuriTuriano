import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkinIcon,
} from "../components/icons/socialIcons";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-14 ">
      {/* Name */}
      <div>
        <h1 className=" text-[18px]">My Personal Portfolio</h1>
      </div>

      {/* Social Media links */}
      <div className="flex justify-center items-center gap-2">
        <a href="https://www.facebook.com/tjurisalvador/" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/justjurii/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://github.com/tJuri-sub" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/jurituriano/" target="_blank">
          <LinkinIcon />
        </a>
      </div>
    </div>
  );
};

export default Header;
