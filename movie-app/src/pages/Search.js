import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button, createMuiTheme, Tab, Tabs, TextField, ThemeProvider } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search"
import Item from "../components/Item"
import PaginationComponent from "../components/Pagination"

//Style
import "../scss/App.scss"


const Trending = () => {
    const [type, setType] = useState(0)
    const [searchText, setSearchText] = useState("")
    const [page, setPage] = useState(1);
    const [content, setContent] = useState("")
    const [totalPages, setTotalPages] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}&page=${page}&include_adult=false&page=${page}`)
            setContent(data.results)
            setTotalPages(data.total_pages)
        } catch (error) {
            console.log(error)
        }
    }

    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#fff"
            }
        }
    })

    const handleChange = (event, newValue) => {
        setType(newValue);
        setPage(1)
    };

    useEffect(() => {
        if (!loaded) {
            setLoaded(true)
        } else {
            fetchSearch()
        }
        // do something else
        // return () => {
        //     fetchSearch.cancel()
        // }
        // eslint-disable-next-line
    }, [type, page])

    return (
        <div>
            <div style={{ marginTop: "20px" }}>
                <ThemeProvider theme={darkTheme}>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "15px", width: "50%", margin: "auto" }} >
                        <TextField
                            id="standard-basic"
                            label="Search"
                            variant="filled"
                            style={{ minWidth: "280px" }}
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <Button variant="contained" style={{ marginLeft: 10 }} onClick={() => fetchSearch()}><SearchIcon /></Button>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "15px", margin: "auto" }} >
                        <Tabs value={type} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                            <Tab style={{ width: "50%", minWidth: "150px" }} label="Search Movies" ></Tab>
                            <Tab style={{ width: "50%", minWidth: "150px" }} label="Search Series" ></Tab>
                        </Tabs>
                    </div>
                </ThemeProvider>

            </div >
            <div className="main-page-container">
                <div className="search-content">
                    {content && content.map((item) => (
                        <Item item={item} contentType={type ? "tv" : "movie"} key={item.id} />
                    ))}

                    {searchText ? <PaginationComponent setPage={setPage} totalPages={totalPages} /> : ""}
                    <h3>{totalPages === 0 ? "No Information found" : ""}</h3>
                </div>
            </div>
        </div>
    )
}

export default Trending
