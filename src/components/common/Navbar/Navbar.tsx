import './Navbar.css'
import './Navbar_desktop.css'
import './Navbar_mobile.css'

import {WrapperProps} from "../../../common/commonProps";

interface NavbarProps extends WrapperProps {}
 
const Navbar = (props: NavbarProps) => 
    <div className={'navbar ' + props.className}>
        {props.children}
    </div>

export default Navbar;
