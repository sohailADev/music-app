import React from 'react';
import {  Card, Col, Row, Button } from "react-bootstrap";
const Artist = ({artist}) => {
    
	return (
		<>
       
        
			<Card style={{ overflow: 'auto', height: '14rem', width: '180rem',marginTop:'1rem',boxShadow:'17px 17px 0px 0px #EBEBEB' ,marginBottom:'3rem' }}>
					<Card.Body>
					<Card.Title>Name : {artist.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Published:{artist.bio.published}</Card.Subtitle>
					<Card.Text>
					
                        
                        Bio:{artist.bio.content}
                        
				
                    </Card.Text>
					<Card.Link target="_blank" href={artist.url}>Read More</Card.Link>
					
					
					</Card.Body>
					</Card>
				
			
		</>
	);
};

export default Artist;