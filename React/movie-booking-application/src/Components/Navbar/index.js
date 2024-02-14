import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../App';

function NavbarComp() {

  const naigate = useNavigate();

         const themeContextValue = useContext(ThemeContext);
        const isLightTheme = themeContextValue.theme==="light";
        const {changeTheme} = themeContextValue;


  const onLogout=()=>{
    localStorage.clear();
    naigate("/login");
    
  }

  const onThemeToggle=()=>{
    if(isLightTheme){
      changeTheme("dark");
    }else{
      changeTheme("light");
    }
  }


  return (
    <Navbar className={(isLightTheme)?"bg-dark text-light":"bg-light text-dark"} expand="lg" >
      <Container>
        <Navbar.Brand href="#home">Movie Booking Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <NavDropdown title="Trending" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Trending</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Button onClick={onLogout} className='bg-danger m-2'>
          Logout
        </Button>

         <Button onClick={onThemeToggle} className='bg-danger'>
          Toggle Theme
        </Button>


      </Container>
    </Navbar>
  );
}

export default NavbarComp;