// modules

// components

// styles
import { WrapperProps } from "../../../common/commonProps";
import "./ViewHeader.scss";

interface ViewHeaderProps extends WrapperProps {
	headerTitle: string;
}

const ViewHeader = (props: ViewHeaderProps) => <h1 className="view-header">{props.headerTitle}</h1>

export default ViewHeader;
