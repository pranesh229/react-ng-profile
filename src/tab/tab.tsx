import * as React from 'react';
import './tab.scss';
import { Link } from 'react-router-dom';
export interface ITabProps {}

export interface ITabState {}

export default class Tab extends React.Component<ITabProps, ITabState> {
  constructor(props: ITabProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <React.Fragment>
        <header id="fh5co-header" role="banner">
          <div className="container">
            <div className="header-inner">
              <nav
                role="navigation"
                className="d-none d-md-block d-lg-block d-xl-block"
              >
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/resume">Resume</Link>
                  </li>
                </ul>
              </nav>
              <nav id="navigation" className="d-md-none d-lg-none d-xl-none">
                <div className="hamburger hamburger--spin">
                  <div className=" hamburger-box ">
                    <div className="hamburger-inner " />
                  </div>
                </div>

                <div className="">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/resume">Resume</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
