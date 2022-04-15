/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './styles/App.css';

import Folder from './components/Folder';
import File from './components/File';

import audio1 from './audio/AUD-20201004-WA0004.mp3';
import audio2 from './audio/AUD-20201004-WA0005.mp3';
import audio3 from './audio/AUD-20201004-WA0006.mp3';

const App = () => {
	const [ isPlaying, setIsPlaying ] = useState(false);

	const clickHandler = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="App">
			<Folder name="Desktop">
				<Folder name="Music">
					<span onClick={clickHandler}>
						<File
							name={!isPlaying ? 'song1.mp3' : <ReactAudioPlayer src={audio1} controls />}
							isPlaying={isPlaying}
						/>
					</span>

					<span onClick={clickHandler}>
						<File
							name={!isPlaying ? 'song2.mp3' : <ReactAudioPlayer src={audio2} controls />}
							isPlaying={isPlaying}
						/>
					</span>

					<span onClick={clickHandler}>
						<File
							name={!isPlaying ? 'song3.mp3' : <ReactAudioPlayer src={audio3} controls />}
							isPlaying={isPlaying}
						/>
					</span>
				</Folder>

				<Folder name="Images">
					<File name="birds.jpg" />
					<File name="dogs.png" />
					<File name="cats.jpg" />
				</Folder>
			</Folder>

			<Folder name="Applications" />
		</div>
	);
};

export default App;
