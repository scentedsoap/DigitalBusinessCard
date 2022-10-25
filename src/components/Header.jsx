import React from 'react'
import profilepic from '../assets/Rectangle90.png'
import './styles/header.css'


export default function Header() {
    return (
        <header className="header">
            <img src={profilepic} alt="profilepic"></img>
            <h1 className="header-name">Laura Smith</h1>
            <h2 className="header-role">Frontend Developer</h2>
            <p className="header-website">laurasmith.website</p>
            <div className="header-buttons">
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </header>
    )
}