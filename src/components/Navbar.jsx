
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">

       
        <NavLink to="/" className="text-[26px] font-extrabold text-blue-600">
          KEA
        </NavLink>

        
        <ul className="hidden lg:flex items-center gap-8 text-[14px] font-medium">
          <NavItem to="/" label="Home" />
          <NavItem to="/services" label="Our Services" />
          <NavItem to="/experts" label="Our Experts" />
          <NavItem to="/insights" label="Company Insights" />
          <NavItem to="/contact" label="Contact Us" />
          <NavItem to="/careers" label="Careers" />
        </ul>

        
        <button
          className="text-[14px] font-semibold px-6 py-2 text-white transition"
          style={{ backgroundColor: "#3b54adff", borderRadius: "7px" }}
        >
          Get A Quote
        </button>
      </div>
    </nav>
  );
};


const NavItem = ({ to, label }) => {
  return (
    <li>
      <NavLink
        to={to}
        end={to === "/"} 
        className={({ isActive }) =>
          `cursor-pointer transition ${
            isActive
              ? "text-blue-600 font-semibold" 
              : "text-black hover:text-blue-600"
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  );
};

export default Navbar;
