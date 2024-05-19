import Avatar from "./Avatar";
import ColumnNav from "./ColumnNav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-wrap">
      <Avatar />
      <ColumnNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
