
import React, { useState } from 'react'

import './PlaylistsCarousel.scss'
import Playlist from '../Playlist/Playlist';

const PlaylistsCarousel = ({ title, playlists }) => {
    const [isMoreShowen, setShowMore] = useState(false)
    return (
        <section className="playlists-carousel relative flex column">
            <span className="title">{title}</span>
            <ul className={"playlists-list clean-list flex " + (isMoreShowen? 'end' : 'start')}>
                {playlists.map((playlist, i) => <Playlist playlist={playlist} key={i} />)}
            </ul>
            <div className="carousel-controller flex space-between">
                <span onClick={() => setShowMore(false)} className={"left-arrow " + (isMoreShowen? 'active': 'inactive')}>‹</span>
                <span onClick={() => setShowMore(true)} className={"right-arrow " + (isMoreShowen? 'inactive': 'active')}>›</span></div>
        </section>
    )


}

export default PlaylistsCarousel
