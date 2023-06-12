import React,{useState} from 'react';
import { Container, Row, Col , Form, Nav, Navbar, NavDropdown, Button, Offcanvas} from 'react-bootstrap';
import '../../App.css'
import { UserIcons } from '../../assets/Index';
import { Link, NavLink } from "react-router-dom"

const Nav__link = [
  {
    path:"home",
    display:"Home"
  },
  {
    path:"shop",
    display:"Shop"
  },
  {
    path:"cart",
    display:"Cart"
  },
]
const user__link = [
  {
    path:"signup",
    display:"Signup"
  },
  {
    path:"login",
    display:"Login"
  },
]


const Header = () => {

  return (
    <>
    <header>
         <>
      {['md'].map((expand) => (
        <Navbar key={expand} fixed="top" bg="white" expand={expand} className="mb-3">
          <Container className='container-3xl ' >
            <Navbar.Brand>
             <Link className='text-decoration-none' to="/"> <h4 className='text-black' >Multimart</h4> </Link>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="d-flex justify-content-center align-items-center flex-grow-1 nav">
                 <ul className='list-unstyled d-flex justify-content-center align-items-center' >
                  {
                    Nav__link.map((item,index)=>(
                      <li className='mx-4' key={index} >
                    <NavLink to={item.path} className="text-decoration-none text-truncate text-black fs-5" {...(navClass)=>navClass.isActive ? 'nav__active' : '' } >{item.display}</NavLink>
                  </li>
                    ))
                  }
                 </ul>
                </Nav>
                <ul className="navbar-nav icons position-relative">
                        <li className=" nav-item pe-3">
                            <a>
                            <i class="ri-shopping-cart-2-line"></i>
                                <span className="num rounded-circle shopping">1</span>
                            </a>
                        </li>
                        <li className=" nav-item pe-3">
                            <a>
                            <i class="ri-heart-line"></i>
                                <span className="num rounded-circle Heart">3</span>
                            </a>
                        </li>
                        <li className=" nav-item pe-3" >
                            {/* <a>
                              <img className='uerimg' src={UserIcons}  alt="img-logo" />
                            </a>
                          <ul>
                            <li>home</li>
                            <li>home</li>
                          </ul> */}
                          <div class="dropdown">
                          {/* <button class="dropbtn">Dropdown</button> */}
                          <img className='uerimg' src={UserIcons}  alt="img-logo" />
                          <div class="dropdown-content">
                            {
                              user__link.map(items=>(
                                <a><NavLink to={items.path} className='text-center' >{items.display}</NavLink></a>
                              ))
                            }
                          </div>
                        </div>
                        </li>
                        
                    </ul>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    
    </header>
    </>
  )
}

export default Header