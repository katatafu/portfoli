import React from "react";

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Kawasaki</h1>
            <nav>
                <ul style={navStyle}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

const  headerStyle = {
    backgroundColor: '#232323',
    color: '#ffffff',
    padding: '15px',
    textAlign: 'center',
};

const navStyle = {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
};



export default Header