import React, { Component } from 'react';
import intl from "react-intl-universal";
import { getMessages } from "./locales/_helper";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { initDone: false };
  }

  componentDidMount() {
    this.setLocale("zh-CN");
  }

  setLocale(locale) {
    this.setState({
      initDone: false,
      locale
    });

    intl.init({
      currentLocale: locale,
      locales: {
        [locale]: getMessages(locale)
      }
    })
      .then(() => {
        this.setState({ initDone: true });
      });
  }

  renderChangeToEnglishButton() {
    return this.state.locale === "zh-CN" &&
      <button onClick={() => this.setLocale("en-CA")}>
        {intl.get('home.button_changeToEnglish')}
      </button>;
  }

  renderChangeToChineseButton() {
    return this.state.locale === "en-CA" &&
      <button onClick={() => this.setLocale("zh-CN")}>
        {intl.get('home.button_changeToChinese')}
      </button>;
  }

  render() {
    return (
      this.state.initDone &&
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> {intl.get('home.welcome')}</h1>
        </header>
        <p className="App-intro">
          {intl.get('home.introduction')}
        </p>
        {this.renderChangeToEnglishButton()}
        {this.renderChangeToChineseButton()}
      </div>
    );
  }
}

export default App;
