import React, { useState } from 'react';

const Folder = ({ name, children }) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const clickHandler = () => {
		setIsOpen(!isOpen);
	};

	const direction = isOpen ? 'down' : 'right';
	const open = isOpen ? 'open' : '';

	return (
		<div className="folder">
			<span onClick={clickHandler}>
				<i className={`folder ${open} icon`} />
				<i className={`caret ${direction} icon `} />
				{name}
			</span>
			<div className="child">{isOpen ? children : null}</div>
		</div>
	);
};

export default Folder;
