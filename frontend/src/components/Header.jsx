import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate=useNavigate();
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="text-sm sm:text-xl font-semibold self-center px-3 py-5 dark:text-white"
      >
        <span className=" font-semibold bg-gradient-to-r from-red-300 via-pink-400 to-yellow-300 rounded-lg px-2 py-1">
          Madhuri's Project
        </span>
      </Link>
      <form className="max-w-sm relative hidden lg:inline">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="lg:hidden w-12 h-8" color="gray">
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-4 md:order-2">
        <Button
          className="w-12 h-10 sm:inline"
          pill
          gradientDuoTone="redToYellow"
        >
          <FaSun />
        </Button>
        <Button outline gradientDuoTone="redToYellow" onClick={()=>navigate("/sign-in")}>
          Sign In
        </Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="font-semibold text-gray-700 self-center">
        <Navbar.Link
          as="div"
          className="mr-6 hover:bg-gradient-to-r from-red-300 via-pink-400 to-yellow-300 md:px-2 md:py-1 rounded"
        >
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link
          as="div"
          className="mr-6 hover:bg-gradient-to-r from-red-300 via-pink-400 to-yellow-300 md:px-2 md:py-1 rounded"
        >
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link
          as="div"
          className="mr-6 hover:bg-gradient-to-r from-red-300 via-pink-400 to-yellow-300 md:px-2 md:py-1 rounded"
        >
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
