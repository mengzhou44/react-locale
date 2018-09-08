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
        {intl.get('home.buttons.changeToEnglish')}
      </button>;
  }

  renderChangeToChineseButton() {
    return this.state.locale === "en-CA" &&
      <button onClick={() => this.setLocale("zh-CN")}>
        {intl.get('home.buttons.changeToChinese')}
      </button>;
  }

  render() {
    let className = "font-family-english";
    if (this.state.locale === "zh-CN") {
      className = "font-family-chinese";
    }

    return (
      this.state.initDone &&
      <div className={className}>
        <header className="app-header">
          <h1 className="app-title"> {intl.get('home.welcome')}</h1>
        </header>
        <p className="app-intro">
          {intl.get('home.introduction')}
        </p>
        {this.renderChangeToEnglishButton()}
        {this.renderChangeToChineseButton()}
      </div>
    );
  }
}

export default App;
