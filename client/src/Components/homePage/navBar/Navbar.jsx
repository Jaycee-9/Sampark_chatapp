import { useState } from "react";
import ThreeDotsMenu from "./threeDotsMenu";
import UserImgMenu from "./userImgMenu";
function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const openUserMenu = Boolean(anchorElUser);

  const handleUserClick = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleUserClose = () => {
    setAnchorElUser(null);
  };

  const [anchorElDots, setAnchorElDots] = useState(null);
  const openDotsMenu = Boolean(anchorElDots);

  const handleDotsClick = (event) => {
    setAnchorElDots(event.currentTarget);
  };

  const handleDotsClose = () => {
    setAnchorElDots(null);
  };

  return (
    <div className="max-w-full h-[50px] p-10 bg-[#041a53] relative flex items-center ">
      <>
        <div className="w-[60px] rounded-[50%] absolute right-[2%] top-[12%] hidden sm:block">
          <UserImgMenu
            open={openUserMenu}
            handleClick={handleUserClick}
            handleClose={handleUserClose}
            anchorEl={anchorElUser}
          />
        </div>

        <div className="absolute right-[5%] top-[25%] sm:hidden text-white text-3xl">
          <ThreeDotsMenu
            open={openDotsMenu}
            handleClick={handleDotsClick}
            handleClose={handleDotsClose}
            anchorEl={anchorElDots}
          />
        </div>
      </>

      <h1 className="dekko-text-regular text-white text-3xl font-normal">
        Sampark
      </h1>
    </div>
  );
}

export default Navbar;
