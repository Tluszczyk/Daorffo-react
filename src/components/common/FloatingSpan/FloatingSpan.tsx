// modules

// components

// styles
import "./FloatingSpan.scss";
import "./FloatingSpan_desktop.scss";
import "./FloatingSpan_mobile.scss";

import { WrapperProps } from "../../../common/commonProps";

interface FloatingSpanProps extends WrapperProps {}

const FloatingSpan = (props: FloatingSpanProps) => {
  return (
    <div className={`floating-span-container ${props.className}`} id={props.id} style={props.style} onClick={props.onClick}>
      <span className="text-span floating-span">
        {props.children}
      </span>
    </div>
  );
};

export default FloatingSpan;