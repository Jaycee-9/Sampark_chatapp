import { useEffect, useState } from "react";
import { getUserChats } from "../../service/api";
import { Discuss } from "react-loader-spinner";

import Search from "./Search";
import LeftNavBar from "./leftNavBar";

function Chats() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchUserChats = async () => {
      const data = await getUserChats();
      setChats(data.data);
    };
    try {
    } catch (error) {
      console.log(`error while fetching user chats, ${error.message}`);
    }

    fetchUserChats();
  }, []);

  if (chats.length === 0) {
    return (
      <div className="max-w-[400px] w-full h-[100vh] border-r-2 flex justify-center items-center">
        <Discuss
          visible={true}
          height="80"
          width="80"
          ariaLabel="discuss-loading"
          wrapperStyle={{}}
          wrapperClass="discuss-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
      </div>
    );
  }
  return (
    <div className="max-w-[400px] flex w-full h-[100vh] border-r-2 ">
      <LeftNavBar />
      <div className="m-3 flex-grow">
        <Search chats={chats} />
      </div>
    </div>
  );
}

export default Chats;
