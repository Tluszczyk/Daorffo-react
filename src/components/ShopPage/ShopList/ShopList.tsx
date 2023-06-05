// modules

// components
import { WrapperProps } from "../../../common/commonProps";

// styles
import "./ShopList.scss";

interface ShopListProps extends WrapperProps {}

const ShopList = (props: ShopListProps) => {
	return (
		<div className="shop-list">
			{props.children}
		</div>
	);
};

export default ShopList;
