import Avatar from "./Avatar";
import ColumnNav from "./ColumnNav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex bg-gradiente01 h-[100vh]">
      <Avatar />
      <ColumnNav />
      <main className="bg-onPrimary my-[20px] mx-[30px] w-[80vw] rounded-lg">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
