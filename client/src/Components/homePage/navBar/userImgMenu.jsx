import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

function UserImgMenu({ open, handleClose, handleClick, anchorEl }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={user.picture} alt="user" className="rounded-[50%]" />
      </button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            logOut();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default UserImgMenu;
