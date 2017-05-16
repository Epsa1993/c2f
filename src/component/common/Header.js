import React from 'react';
import { Link } from 'react-router';
// import { Menu } from 'antd';

class Header extends React.Component {
  constructor (props, context) {
    super(props, context);
    }

  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><Link to="/" activeStyle={{ color: 'red' }}>home</Link></li>
            <li><Link to="course"  activeStyle={{ color: 'red' }}>course</Link></li>
            <li><Link to="/about" activeStyle={{ color: 'red' }}>about</Link></li>
            <li><Link to="/manageCourse" activeStyle={{ color: 'red' }}>course</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
