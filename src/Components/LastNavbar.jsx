import React from "react";

const LastNavbar = () => {
  return (
    <section>
      <nav className="flex flex-col justify-between items-center mt-16 lg:flex-row">
        <div>
          <img
            src="https://solarsaver.vercel.app/assets/logo-CeUqb7XY.png"
            className="h-[80px] "
            alt=""
          />
        </div>

        <div>
          <ul className="flex items-center text-white">
            <li className="mx-3">Pricing</li>
            <li className="mx-3">About</li>
            <li className="mx-3">Tools</li>
            <li className="mx-3">How It Works</li>
            <li className="mx-3">Testinomials</li>
            <li className="mx-3">FAQ</li>
          </ul>
        </div>
      </nav>
      <div className="w-full h-[1px] bg-[#ffffff1a] m-[30px 0] mt-3 ">

      </div>
    </section>
  );
};

export default LastNavbar;
