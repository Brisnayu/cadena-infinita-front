import Avatar from "./Avatar";
import RowNav from "./RowNav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-wrap">
      <Avatar />
      <RowNav />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
