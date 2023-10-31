import "./TrailerSubviewBase.scss"
import "./TrailerSubviewBase_desktop.scss"
import "./TrailerSubviewBase_mobile.scss"

import View from "../../../common/View/View"

import { WrapperProps } from "../../../../common/commonProps"

interface TrailerSubviewBaseProps extends WrapperProps {}
 
const TrailerSubviewBase = (props: TrailerSubviewBaseProps) => {
    return <>
        <View {...props} className="trailer-subview">{props.children}</View>
    </>
}
 
export default TrailerSubviewBase;