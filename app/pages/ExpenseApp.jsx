import React, { Component } from 'react';
import Page from '../pages/Page';
import ExpenseAppContainer from '../containers/ExpenseApp';

/*
 * Top-level page component defining page meta-info. Wraps containers/ExpenseApp in a Page.j
 */
class ExpenseApp extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'About | reactGo';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'A reactGo example of life' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
          <ExpenseAppContainer {...this.props} />
      </Page>
    );
  }
}

export default ExpenseApp;
