import { GitHub, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <div className="max-w-[800px] flex mx-auto relative top-[400px] rounded-3xl  text-white p-4 justify-between items-center max-lg:top-12 max-lg:flex-col">
      <div className="flex space-x-4">
        <a href="https://github.com/Jaycee-9" className="hover:text-gray-400">
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/jay-thakkur1998"
          className="hover:text-gray-400"
        >
          <LinkedIn />
        </a>
      </div>
      <h1 className="text-center text-sm max-lg:mt-4 max-sm:text-[6px]">
        © {new Date().getFullYear()} Sampark - A Personal Project by Jay.
      </h1>
    </div>
  );
}

export default Footer;
