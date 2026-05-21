import { useContext } from 'react'
import { Link } from 'react-router'

import AuthContext from '../context/auth/AuthContext.jsx'

import Text from '../components/Text'
import Button from '../components/Button'

function Header({ navigations }) {

    const { handleLogout } = useContext(AuthContext)

    return (
        <header className='header-container'>
            <Text as="h1" text="My App" className="header-title" />
            <div className="d-flex">
                {
                    navigations.length && (
                        <nav className='header-nav'>
                            {
                                navigations.map(
                                    nav => (
                                        <Link key={nav.to} to={nav.to}>{nav.label}</Link>
                                    )
                                )
                            }
                        </nav>
                    )
                }
                <Button
                    label="Logout"
                    color="error"
                    variant="solid"
                    handleClick={handleLogout} />
            </div>
        </header>
    )
}

export default Header