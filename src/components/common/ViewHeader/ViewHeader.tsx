// modules

// components

// styles
import { WrapperProps } from "../../../common/commonProps";
import "./ViewHeader.scss";
import "./ViewHeader_desktop.scss";
import "./ViewHeader_mobile.scss";

interface ViewHeaderProps extends WrapperProps {
	headerTitle: string;
}

const ViewHeader = (props: ViewHeaderProps) => <h2 className="view-header">{props.headerTitle}</h2>

export default ViewHeader;
