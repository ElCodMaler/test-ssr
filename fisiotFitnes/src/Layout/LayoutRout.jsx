import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function LayoutRout() {
    return (
      <div className="root-layout">
        <header>
            <nav>
                <h1>Inicio</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/segundo">Segundo</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
      </div>
    )
  }
  
  export default LayoutRout