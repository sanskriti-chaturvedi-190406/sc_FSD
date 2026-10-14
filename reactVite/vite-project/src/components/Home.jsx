import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>Welcome to Home page!
        <nav>
        <ul style = {{listStyle : "none"}}>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </ul>
        </nav>

        <Outlet/>
    </div>
  )
}

export default Home