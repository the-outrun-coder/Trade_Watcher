import { PropsWithChildren } from "react";
// NOTE - Found tut on how to define a type for a projected component
// https://blog.logrocket.com/react-children-prop-typescript/

function DynamicContainer({children} : PropsWithChildren) {
	return (
		<div className="dyna-container">
			<div className="column">
				{children}
			</div>
		</div>
	);
}

export default DynamicContainer;