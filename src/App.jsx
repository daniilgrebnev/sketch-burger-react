import React from 'react'
import Home from './Pages/Home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About.jsx'
import Menu from './Pages/Menu/Menu.jsx'
import Layout from './Layout/Layout.jsx'
import BurgersMenuPage from './Pages/Menu/Burgers/BurgersMenuPage.jsx'


import Cart from './Pages/Cart/Cart.jsx'
import DrinksMenuPage from "./Pages/Menu/Drinks/DrinksMenuPage";

const App = () => {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="menu/burger" element={<BurgersMenuPage />} />
                    <Route path="menu/drinks" element={<DrinksMenuPage />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default App
