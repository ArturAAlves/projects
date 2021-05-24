import React from 'react'
import ItemModal from "../components/ItemModal"
import { img_300, unavailable } from "../config/Config"

//Style
import "../scss/Item.scss"

const Item = ({ item, contentType }) => {
    const title = item.original_name || item.title
    const vote = item.vote_average
    const poster = item.poster_path
    const date = item.first_air_date || item.release_date
    const type = item.media_type ? item.media_type : contentType
    const id = item.id
    return (
        <ItemModal key={id} item={item}>
            <div className="item-img-container">
                <img src={poster ? `${img_300}${poster}` : unavailable

                } alt={item.title} ></img>
                <div className="score"> <p>{vote}</p> </div>
            </div>
            <div className="item-title-container">
                <p className="tittle"><b>{title}</b></p>
                <p className="type">{type}</p>
                <p className="date">{date}</p>
            </div>
        </ItemModal>

    )
}
export default Item
