import React from 'react';
import ContentLoader from "react-content-loader";


const PizzaLoadingBlock = () => {
	return (
		<ContentLoader
			className="pizza-block"
			speed={1}
			width={280}
			height={457}
			viewBox="0 0 280 457"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="140" cy="130" r="130" />
			<circle cx="145" cy="175" r="9" />
			<circle cx="176" cy="190" r="5" />
			<rect x="0" y="274" rx="5" ry="5" width="280" height="24" />
			<rect x="0" y="305" rx="5" ry="5" width="280" height="84" />
			<rect x="0" y="404" rx="5" ry="5" width="92" height="27" />
			<rect x="126" y="400" rx="5" ry="5" width="150" height="35" />
		</ContentLoader>
	);
};

export default PizzaLoadingBlock;