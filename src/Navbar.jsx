import { Link } from 'react-router-dom';
const Navbar = () => {
    const inlineStyle = {
        backgroundColor: '#f1356d',
        color: 'white',
        borderRadius: '8px'
    };
    return ( 
        <nav className="navbar">
            <h1>Blog Ninja</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={inlineStyle}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;