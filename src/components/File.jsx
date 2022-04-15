import React from 'react';

import '../styles/App.css';

const File = ({ name, isPlaying }) => {
	
	function displayFileIcon() {
		if (isPlaying) {
			return <i className={`${fileIcons} icon`} />;
		} else {
			const fileExtension = name.split('.')[1];
			return <i className={`${fileIcons[fileExtension]} icon`} />;
		}
	}

	const fileIcons = {
		mp3: 'headphones',
		jpg: 'file image',
		png: 'file image outline'
	};

	return (
		<React.Fragment>
			<div className="child">
				{displayFileIcon()}
				{name}
			</div>
		</React.Fragment>
	);
};

export default File;
