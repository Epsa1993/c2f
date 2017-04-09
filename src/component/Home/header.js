import React from 'react';
import { Menu } from 'antd';

class Header extends React.component {
  constructor() {
    super();

  }

  render() {
    return(
      <Menu mode="horizontal">
        <Menu.Item key="mail">
           Navigation One
         </Menu.Item>
      </Menu>
    );
  }
}
export default Header;
