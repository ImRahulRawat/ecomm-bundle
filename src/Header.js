import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user-info'));
  function logout(){
    localStorage.clear();
    navigate('/register')
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto nav_bar_wrapper">
          {
            localStorage.getItem('user-info')?
                <>
             <Link to="/add-product">Add Product</Link>
            <Link to="/update-product">Update Product</Link>
            </>
            :
            <>
             <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
          }
          </Nav>
          {
            localStorage.getItem('user-info')?
          
          <Nav className="ms-auto">
            <NavDropdown title={user?.name || "User"}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :null
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
