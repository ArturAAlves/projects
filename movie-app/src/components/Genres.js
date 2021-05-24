import React, { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import axios from 'axios';



const OutlinedChips = ({ type, genres, setGenres, selectedGenres, setSelectedGenres, setPage }) => {

    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        setGenres(data.genres)

    }
    const handleDelete = () => {
        return ""
    };

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter((item) => item.id !== genre.id))
        setPage(1)
    }

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((item) => item.id !== genre.id))
        setGenres([genre, ...genres])
        setPage(1)
    }

    useEffect(() => {
        fetchGenres()
        return () => {
            setGenres([])
        }
        // eslint-disable-next-line
    }, [])


    return (
        <div className="chip"
            style={{
                padding: "3px",
                display: 'flex',
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "15px",
                width: "100%"
            }}>
            {selectedGenres && selectedGenres.map((genre) => (
                <Chip
                    onClick={() => handleRemove(genre)}
                    label={genre.name}
                    key={genre.id}
                    style={{ margin: "5px" }}
                    clickable
                    size="small"
                    color="primary"
                    onDelete={handleDelete}
                />
            ))}
            {genres && genres.map((genre) => (
                <Chip
                    onClick={() => handleAdd(genre)}
                    label={genre.name}
                    key={genre.id}
                    style={{ margin: "5px" }}
                    clickable
                    size="small"
                />
            ))}

        </div>
    );
}


export default OutlinedChips