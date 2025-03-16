import React from 'react'
import { NavLink } from 'react-router'

const styledNavlink = ({ isActive }) => (
  { 
    color: isActive ? '#007BFF' : '#fff', 
    backgroundColor: isActive ? '#fff' : '#007BFF', 
    textDecoration: 'none', margin: '0 20px', 
    fontWeight : isActive ? 'bold' : 'normal', 
    padding: 5, 
    borderRadius: 6 ,
  }
)

const Header = () => {
  return (
    <div style={{
        backgroundColor: '#007BFF',
        color: '#fff',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ margin: 0 }}>Biblioteca CFT</h2>
        <nav style={{ margin: 2 }}>
          <NavLink to='/' style={styledNavlink} >Home</NavLink>
          
          <NavLink to='/acervo' style={styledNavlink} >Acervo</NavLink>
          
          <NavLink to='/institucional' style={styledNavlink} >Institucional</NavLink>
        </nav>
      </div>
  )
}

export default Header