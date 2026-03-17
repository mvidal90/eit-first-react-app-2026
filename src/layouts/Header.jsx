import { Link } from 'react-router'
import Text from '../components/Text'

function Header({ navigations }) {
    return (
        <header className='header-container'>
            <Text as="h1" text="My App" className="header-title" />
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
        </header>
    )
}

export default Header