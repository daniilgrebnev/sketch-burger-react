import React from 'react'
import Home from './Pages/Home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About.jsx'
import Menu from './Pages/Menu/Menu.jsx'
import Layout from './Layout/Layout.jsx'

const App = () => {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default App
