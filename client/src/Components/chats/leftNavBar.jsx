function LeftNavBar() {
  return (
    <div className="h-full relative p-1 bg-gray-100">
      <div className="flex flex-col items-center rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-300 p-2">
        <img src="HomePage/allusers.png" alt="users" className="w-6 h-6" />
        <h1 className="dekko-text-regular mt-2">All users</h1>
      </div>
    </div>
  );
}

export default LeftNavBar;
