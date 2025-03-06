import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <div className="grid grid-flow-col grid-rows-1 justify-between border-b border-black h-12 items-center px-6">
      <NavButton type={"HAMBURGER"}></NavButton>
      <h1 className="text-4xl font-bold">Elevated Training</h1>
      <NavButton type={"USER"}></NavButton>
    </div>
  );
};

export default Navbar;
