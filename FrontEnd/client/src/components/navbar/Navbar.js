import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">Reservation</span>
            <div className="navItems">
                <button className="navButton">Regiter</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar