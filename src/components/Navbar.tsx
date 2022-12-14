import { FC, useState } from "react";
import { Link } from "react-router-dom";

//--------------------------------------------
// Global Components
import Icon from "components/Icon";

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants

const Navbar: FC = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <nav className="fixed hidden w-screen justify-center bg-white drop-shadow-lg md:flex">
        <div className="flex w-full max-w-[1200px] items-center justify-between p-4">
          <Link to="/">
            <img src="web3phl_logo.svg" alt="Web3PHL Logo" />
          </Link>
          <span className="flex items-center font-satoshi text-base font-bold text-purple-heart ">
            <Link className="mx-4" to="/">
              Home
            </Link>
            <a className="mx-4" href="#programme">
              Programme
            </a>
            <a className="mx-4" href="#sponsors">
              Sponsors
            </a>
            <a
              className="mx-4"
              href="https://web3philippines.org/discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="discord_icon.svg" alt="Discord" />
            </a>
            <a
              href="https://facebook.com/web3phl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="facebook.svg" alt="Facebook" />
            </a>
          </span>
        </div>
      </nav>

      <nav className="fixed w-screen flex-col justify-center bg-white drop-shadow-lg md:hidden">
        <div className="flex w-full max-w-[1200px] items-center justify-between p-4">
          <Link to="/">
            <img className="h-10" src="web3phl_logo.svg" alt="Web3PHL Logo" />
          </Link>

          <span
            onClick={() => setShowMobile((prev) => !prev)}
            className="hover:cursor-pointer"
          >
            <Icon symbol="menu" styling="text-purple-heart" />
          </span>
        </div>

        {showMobile && (
          <div className="text-center font-satoshi text-lg font-bold text-purple-heart">
            <div className="grid grid-cols-1 gap-2">
              <Link
                className="mx-4 p-2 hover:bg-purple-heart hover:text-white"
                to="/"
              >
                Home
              </Link>
              <a
                className="mx-4 p-2 hover:bg-purple-heart hover:text-white"
                href="#programme"
              >
                Programme
              </a>
              <a
                className="mx-4 p-2 hover:bg-purple-heart hover:text-white"
                href="#sponsors"
              >
                Sponsors
              </a>
              <span className="flex w-full justify-center p-4">
                <a
                  className="mx-2"
                  href="https://web3philippines.org/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="discord_icon.svg" alt="Discord" />
                </a>
                <a
                  className="mx-2"
                  href="https://facebook.com/web3phl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="facebook.svg" alt="Facebook" />
                </a>
              </span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

//--------------------------------------------
// Exports
export default Navbar;
