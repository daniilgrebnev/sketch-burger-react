import React from 'react'
import './main-block.scss'

const MainBlock = () => {
    const style = {
        backgroundImage:
            'url("https://mobimg.b-cdn.net/v3/fetch/1f/1f8eb2badb0163e0fc434f5d758fbaba.jpeg")',
    }
    return (
        <div className="home-main-block" style={style}>
            <div className="container">
                <div className="text">
                    <h1>Лучшие бургеры в вашем городе</h1>
                    <p>Пароль админ панели: admin</p>
                </div>
            </div>
        </div>
    )
}

export default MainBlock
