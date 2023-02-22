import HeadInfo from "./Headinfo";
import Nav from "./Nav";


const Layout = ({ children }) => {
  return (
    <>
    <HeadInfo/>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
