import { useLocation, useSearchParams } from "react-router-dom";
import { useAppData } from "../context/AppContext"
import { useState } from "react";

const Navbar = () => {
    const { isAuth } = useAppData();
    const currLocation = useLocation();
    
    const isHomePage = currLocation.pathname === "/";
    
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("search") || "");

  return (
    <div>Navbar</div>
  )
}

export default Navbar