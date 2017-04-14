import React from 'react';
import {Helmet} from "react-helmet";
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';
import Header from './common/Header';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { children }= this.props;
    return(
      <div>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Home</title>
          </Helmet>
          <Header/>
          {children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.instanceOf(Object).isRequired
};
export default App;
