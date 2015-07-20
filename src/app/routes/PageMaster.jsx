
'use strict'

import React, { Component } from 'react';
import { Header, MobileHeader } from '../components/Header';
import RouteActions from '../actions/RouteActions';

// master template for all pages
class PageMaster extends Component {
  render() {
    return (
      <div className="page-master">
        <Header />
        <MobileHeader />
        <main class="mdl-layout__content">
          { this.renderContent() }
        </main>
      </div>
    );
  }
}

export default PageMaster