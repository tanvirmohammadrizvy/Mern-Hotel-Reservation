import React from 'react'
import {Link} from 'react-router-dom'

function sidebar() {
  return (
    <div>
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img src="dist/img/rizvy.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
        <span className="brand-text font-weight-light">Admin</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="dist/img/rizvy.jpg" className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">Tanvir Mohammad Rizvy</a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
             <Link to='/'>
             <li className="nav-item">
                  <a href="" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard</p>
                  </a>
              </li>
             </Link>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  </div>
  )
}

export default sidebar