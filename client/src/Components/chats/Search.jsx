import TextField from "@mui/material/TextField";
import { useState } from "react";
function Search({ chats }) {
  const [searchUser, setSearchUser] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleInput = (evt) => {
    setSearchUser(evt.target.value);
  };

  const newUser = chats.filter((user) => {
    return user.name.toLowerCase() === searchUser?.toLowerCase();
  });

  return (
    <>
      <TextField fullWidth label="Search" onChange={handleInput} />
      {newUser.length === 0
        ? chats
            .filter((chat) => chat.sub !== user.sub)
            .map((chat, index) => {
              return (
                <ul
                  key={index}
                  className="flex bg-gray-100 rounded-[20px] m-3 p-3 cursor-pointer transition-all duration-300 hover:bg-gray-300"
                >
                  <img
                    src={chat.picture}
                    alt="user"
                    className="w-[80px] rounded-[50%]"
                  />
                  <li className="dekko-text-bold text-2xl ml-4 font-bold">
                    {chat.name}
                  </li>
                </ul>
              );
            })
        : newUser?.map((chat, index) => {
            return (
              <ul
                key={index}
                className="flex bg-gray-100 rounded-[20px] m-3 p-3 cursor-pointer transition-all duration-300 hover:bg-gray-300"
              >
                <img
                  src={chat.picture}
                  alt="user"
                  className="w-[80px] rounded-[50%]"
                />
                <li className="dekko-text-bold text-2xl ml-4 font-bold">
                  {chat.name}
                </li>
              </ul>
            );
          })}
    </>
  );
}

export default Search;
