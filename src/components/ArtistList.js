import React from 'react';
import {  Card, Col, Row, Button } from "react-bootstrap";
const ArtistList = ({handleFavSubmit,albums}) => {
	return (
		<>
		
			{albums.map((album, index) => (
				<div key={index}>
					
					<Card style={{ width: '18rem',marginTop:'1rem' }}>
					<Card.Body>
					<Card.Title>Album Name : {album.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">artist:{album.artist.name}</Card.Subtitle>
					<Card.Text>
					Playcount:{album.playcount}
					</Card.Text>
					<Card.Link target="_blank" href={album.url}>Listen {album.name}</Card.Link>
					
					<Card.Text>
					<Button onClick={() => handleFavSubmit(album.artist)}>Add to Favorites</Button>
					</Card.Text>
					</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
};

export default ArtistList;