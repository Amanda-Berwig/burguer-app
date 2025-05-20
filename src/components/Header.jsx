import React from "react";
import Logo from "../assets/logo.png";
import { UserRound } from "lucide-react";

function Header() {
  return (
    <div className="text-black flex">
      <img src={Logo} alt="logo da hamburgueria" className="w-20 h-20" />
      <div>
        <UserRound color="black" />
        <p className="text-">Perfil</p>
      </div>
    </div>
  );
}

export default Header;
