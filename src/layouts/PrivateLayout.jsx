import { 
    use,
    //useContext
} from 'react'
import { Outlet } from 'react-router'

import Header from './Header'

import FavoriteContext from '../context/favorite/FavoriteContext'

function PrivateLayout() {

    // const {favoriteList} = useContext(FavoriteContext)
    const {favoriteList} = use(FavoriteContext)

    return (
        <div>
            <Header 
                navigations={[
                    {
                        to: "/home",
                        label: "Home"
                    }, {
                        to: "/todos",
                        label: "Mis tareas"
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