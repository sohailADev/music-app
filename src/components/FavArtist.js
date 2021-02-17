import React ,{useState} from 'react';
import { Card, Col, Row, Button, Form } from "react-bootstrap";
const FavArtist = ({ favs, handleRemoveFavSubmit ,handleSaveToDatabase}) => {
	const [userName,setUsername] = useState('')
    const handleChange = (e) => {
		e.preventDefault();
        setUsername(e.target.value)
    }

	return (
		<>
			{/* { Object.keys(favs).length > 0 &&
				<Card style={{ paddingLeft: '.5rem',paddingTop: '.5rem', }}>
				<Form >
					<h5>Add to data base please add username below</h5>
					<Form.Group as={Row} >
						<Form.Label column sm={3}>
							UserName 
                        </Form.Label>
						<Col sm={9}>
							<Form.Control type="text" value={userName} onChange={handleChange} />
						</Col>
					</Form.Group>
					<Button type='submit' onClick={() => handleSaveToDatabase(userName)}>Add to database</Button>
				</Form>
				</Card>
			} */}
			{favs.map((fav, index) => (
				<div key={index}>

					<Card style={{ width: '18rem', marginTop: '1rem' }}>
						<Card.Body>
							<Card.Title>Name : {fav.name}</Card.Title>
							<Card.Link target="_blank" href={fav.url}>Read More {fav.name}</Card.Link>
							<Card.Text>
								<Button onClick={() => handleRemoveFavSubmit(fav.name)}>Removed from Favorites</Button>
							</Card.Text>

						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
};

export default FavArtist;