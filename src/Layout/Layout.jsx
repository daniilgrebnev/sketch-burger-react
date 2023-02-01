import React from 'react'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
