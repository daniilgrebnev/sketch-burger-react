import React from 'react'
import Home from './Pages/Home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About.jsx'
import Menu from './Pages/Menu/Menu.jsx'
import Layout from './Layout/Layout.jsx'
import BurgersMenuPage from './Pages/Menu/BurgersMenuPage/BurgersMenuPage.jsx'
import BurgerPage from './Pages/Menu/BurgersMenuPage/BurgerPage/BurgerPage.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/index.js'
import Cart from './Pages/Cart/Cart.jsx'

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="menu" element={<Menu />} />
                        <Route
                            path="menu/burger"
                            element={<BurgersMenuPage />}
                        />
                        <Route
                            path="menu/burger/:BurgerId"
                            element={<BurgerPage />}
                        />
                        <Route path="cart" element={<Cart />} />
                    </Routes>
                </Layout>
            </div>
        </Provider>
    )
}

export default App
