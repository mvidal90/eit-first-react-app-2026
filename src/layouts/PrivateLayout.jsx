import { useContext } from 'react'
import { Outlet } from 'react-router'

import Header from './Header'

import FavoriteContext from '../context/FavoriteContext'

function PrivateLayout() {

    const {favoriteList} = useContext(FavoriteContext)

    return (
        <div>
            <Header 
                navigations={[
                    {
                        to: "/home",
                        label: "Home"
                    }, {
                        to: "/history",
                        label: "Mis compras"
                    }, {
                        to: "/favorites",
                        label: `Mis favoritos (${favoriteList.length})`
                    }
                ]}
            />
            <div className="main-layout">
                <Outlet />
            </div>
        </div>
    )
}

export default PrivateLayout