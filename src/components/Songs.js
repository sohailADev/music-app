import React, { useState } from 'react';
import SongList from './SongList';
import ArtistList from './ArtistList';
import Artist from './Artist'
import FavArtist from './FavArtist'
import { Navbar, InputGroup, Container, Form, Col, Row, Button } from "react-bootstrap";


const Songs = () => {

    const SONG_API_URL = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=`;
    const ARTIST_API_URL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=`;
    const ARTIST_TOP_ALBUMS_URL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=`;

    const API_KEY = '&api_key=7017252a4766cfbbbf53a5e0fdae112f&format=json'
    const [state, setState] = useState({
        searchSongTerm: "",
        searchAristTerm: "",
        songs: [],
        artistsTopAlbums: [],
        artist: {},
        error: ''
    })
    const [fav, setFav] = useState([])
    const handleSongSearch = (e) => {
        if (e.key == "Enter") {
            e.target.value = ""
        }
        e.preventDefault();
        if (state.searchSongTerm) {
            fetch(SONG_API_URL + state.searchSongTerm + API_KEY)
                .then((res) => res.json())
                .then((data) => {
                    setState(prevState => {
                        return {
                            ...prevState,
                            searchSongTerm: '',
                            artistsTopAlbums: [],
                            artist: [],
                            songs: data.results.trackmatches.track
                        }
                    })
                })

        }
    }
    const handleArtistSearch = (e) => {
        e.preventDefault();
        if (e.key == "Enter") {
            e.target.value = ""
        }
        if (state.searchAristTerm) {

            fetch(ARTIST_TOP_ALBUMS_URL + state.searchAristTerm + API_KEY)
                .then((res) => res.json())
                .then((data) => {

                    if (!data.error) {

                        setState(prevState => {
                            return { ...prevState, searchAristTerm: '', songs: [], error: '', artistsTopAlbums: data.topalbums.album }
                        })
                    } else {
                        setState(prevState => {
                            return { ...prevState, error: data.message }
                        })
                    }
                })
            fetch(ARTIST_API_URL + state.searchAristTerm + API_KEY)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setState(prevState => {

                        return { ...prevState, searchAristTerm: '', songs: [], artist: data }
                    })
                })

        }
    }
    const handleSongChange = (e) => {
        e.preventDefault();
        setState(prevState => {
            return {
                ...prevState, searchSongTerm: e.target.value,
            }
        })
    }
    const handleArtistChange = (e) => {
        e.preventDefault();
        setState(prevState => {
            return {
                ...prevState, searchAristTerm: e.target.value,
            }
        })
    }
    const handleFavSubmit = (artist) => {

        const found = fav.find(f => f.name === artist.name)
        //check if already added to fav
        if (found === undefined) {
            setFav(fav => [...fav, artist])

        }


    }
    const handleRemoveFavSubmit = (name) => {
        const filteredArtist = fav.filter(f => f.name !== name)
        setFav(filteredArtist)
    }
    const handleSaveToDatabase = (username) => {
      console.log(username)
    }

    return (
        <React.Fragment>

            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#">Music app </Navbar.Brand>
            </Navbar>
            <Form onSubmit={handleSongSearch}>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Search by Songs
                </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" value={state.searchSongTerm} onChange={handleSongChange} />
                    </Col>
                </Form.Group>
            </Form>
            <Form onSubmit={handleArtistSearch}>
                <Form.Group as={Row} >
                    <Form.Label column sm={2}>
                        Search by Artist
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" value={state.searchAristTerm} onChange={handleArtistChange} />

                    </Col>
                </Form.Group>
            </Form>
            <Row>
                <div style={{ marginLeft: '12rem', color: 'red' }}>

                    {state.error && <p>Error : {state.error}</p>}
                </div>
            </Row>
            <Row>
                {state.error || Object.keys(state.artist).length > 0 && <Artist artist={state.artist.artist} />}

            </Row>
            <Row>
                <Col>
                    <h2>Search result  </h2>
                    <SongList songs={state.songs} />
                    <ArtistList albums={state.artistsTopAlbums} handleFavSubmit={handleFavSubmit} />
                </Col>
                <Col>
                    <h2>Favorites </h2>
                   
                    <FavArtist favs={fav} handleRemoveFavSubmit={handleRemoveFavSubmit} handleSaveToDatabase={handleSaveToDatabase} />

                </Col>

            </Row>

        </React.Fragment>
    )
}

export default Songs;
