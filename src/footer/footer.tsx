import * as React from 'react';
import './footer.scss';
export interface IFooterProps {}

export default class Footer extends React.Component<IFooterProps> {
  public render() {
    return (
      <div className="footerArea">
        This Progressive Web App was developed using
        <a href="https://angular.io/">Angular</a>, styled with
        <a href="https://material.angular.io/">Material Design</a> and
        <a href="https://github.com/twbs/bootstrap-sass">Bootstrap</a>. Content
        managed in <a href="www.contentful.com">Contentful.</a> Continous
        integration is done using <a href="https://travis-ci.org/">Travis-CI</a>
        .
      </div>
    );
  }
}
