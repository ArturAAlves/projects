import React from 'react'
import "../scss/Header.scss"

const Header = () => {
    return (
        <div className="header" onClick={() => window.scroll(0, 0)}>🎬 Entertainment Center 🎥</div>
    )
}

export default Header