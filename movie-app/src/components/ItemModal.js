import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { img_500, unavailable } from "../config/Config"
import Button from '@material-ui/core/Button';
import TheatersIcon from '@material-ui/icons/Theaters';
import axios from "axios"


//Style
import "../scss/Item.scss"
import "../scss/ItemModal.scss"

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    paper: {
        backgroundColor: "#566585",
        border: 'none',
        outline: "none",
        active: "none",
        boxShadow: theme.shadows[5],
    },
}));



const ItemModal = ({ children, item }) => {
    const [videoId, setVidoId] = useState(0)

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setVidoId(0)
    };

    const poster = item.backdrop_path
    const title = item.original_name || item.title
    const date = item.first_air_date || item.release_date
    const overview = item.overview

    const fetchYoutube = async () => {
        if (!videoId) {

            try {
                const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title} trailler&key=${process.env.REACT_APP_Youtube_Token}&maxResults=1`)
                setVidoId(data.items[0].id.videoId)
            } catch (error) {
            }
        } else {
            setVidoId(0)
        }
    }

    return (
        <>
            <button type="button" onClick={handleOpen} className="item-component" style={{ border: "none" }}>
                {children}
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className="content-modal">
                            {!videoId ? <div className="modal-img-container">
                                <img src={poster ? `${img_500}${poster}` : unavailable
                                } alt={item.title} ></img>
                            </div> : <div className="modal-video-container">
                                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allow="autoplay" allowFullScreen title={item.title}></iframe>
                            </div>
                            }
                            <div className="modal-text-container">
                                <p className="modal-title">{title} ({date.substring(0, 4)})</p>
                                <p className="modal-overview">{overview}</p>
                                <Button
                                    onClick={() => fetchYoutube()}
                                    variant="contained"
                                    className="modal-button"
                                    startIcon={<TheatersIcon />}>
                                    Watch the Trailer
                                     </Button>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}
export default ItemModal