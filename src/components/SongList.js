import React from 'react';
import {  Card, Col, Row, Button } from "react-bootstrap";
const SongList = (props) => {
	return (
		<>
			
			{props.songs.map((song, index) => (
				<div key={index}>
					
					<Card style={{ width: '18rem',marginTop:'1rem' }}>
					<Card.Body>
					<Card.Title>Song : {song.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">artist:{song.artist}</Card.Subtitle>
					<Card.Text>
					Listeners:{song.listeners}
					</Card.Text>
					<Card.Link target="_blank" href={song.url}>Listen song</Card.Link>
					
				
					</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
};

export default SongList;