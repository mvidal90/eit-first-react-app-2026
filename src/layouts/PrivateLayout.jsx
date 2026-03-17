import { Outlet } from 'react-router'
import Header from './Header'

function PrivateLayout() {
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
                        label: "Mis favoritos"
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