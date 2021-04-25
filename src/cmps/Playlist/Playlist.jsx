
import React from 'react'

import './Playlist.scss'

const Playlist = ({ playlist }) => {
    const { description, image_url, name, playlist_id } = playlist
    return (
        <li className="playlist flex column ">
            <img className="playlist-img" src={image_url} alt={name} />
            <span className="playlist-title">{name}</span>
            <span className="playlist-desc">{description}</span>
        </li>
    )


}

export default Playlist
