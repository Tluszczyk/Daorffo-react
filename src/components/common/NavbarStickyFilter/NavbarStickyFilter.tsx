// modules

// components

// styles
import "./NavbarStickyFilter.scss";
import "./NavbarStickyFilter_desktop.scss";
import "./NavbarStickyFilter_mobile.scss";

interface NavbarStickyFilterProps {}

const NavbarStickyFilter = (props: NavbarStickyFilterProps) => {
	return (
		<div className="navbarstickyfilter" style={{
			background: "linear-gradient(#898989ff, #00000000)"
		}}/>
	);
};

export default NavbarStickyFilter;
