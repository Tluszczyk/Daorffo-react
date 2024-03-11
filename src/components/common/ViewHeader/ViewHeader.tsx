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

const ViewHeader = (props: ViewHeaderProps) => <div className="view-header">{props.headerTitle}</div>

export default ViewHeader;
