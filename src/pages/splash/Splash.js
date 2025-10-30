import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LogoLoader from "../../components/Loader/LoaderLogo";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <div className="splash-container">
        <div className="splash-animation-container">
          <LogoLoader theme={this.props.theme} />
        </div>
      </div>
    );
  }
}

export default Splash;
