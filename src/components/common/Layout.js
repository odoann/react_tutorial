import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        < >
            <header >
                <NavBar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default Layout