import React, { useEffect } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { useHistory } from 'react-router-dom';


const MainNav = () => {
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect(() => {
        switch (value) {
            case 0:
                history.push("/")
                break;
            case 1:
                history.push("/movies")
                break;
            case 2:
                history.push("/series")
                break;
            case 3:
                history.push("/search")
                break;
            default:
                history.push("/")
                break;
        }
    }, [value, history])

    const styles = {
        width: "100%",
        position: 'fixed',
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 99,
    }
    const white = { color: "white" }
    return (
        <BottomNavigation
            value={value}
            onChange={(event, index) => {
                setValue(newValue => newValue = index);
            }}
            showLabels
            style={styles}
        >

            <BottomNavigationAction style={white} label="Trending" icon={<WhatshotIcon />} to="/" />
            <BottomNavigationAction style={white} label="Movies" icon={<MovieIcon />} to="/movies" />
            <BottomNavigationAction style={white} label="TV Series" icon={<TvIcon />} to="/series" />
            <BottomNavigationAction style={white} label="Search" icon={<SearchIcon />} to="/search" />
        </BottomNavigation>
    );
}

export default MainNav