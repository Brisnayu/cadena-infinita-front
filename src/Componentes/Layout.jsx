import Avatar from "./Avatar";
import ColumnNav from "./ColumnNav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-wrap">
      <Avatar />
      <ColumnNav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;