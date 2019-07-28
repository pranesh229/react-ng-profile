import * as React from 'react';
import ReactMarkdown from 'react-markdown';
export interface ISkillsProps {
  skills: string;
}

export interface ISkillsState {}

export default class Skills extends React.Component<
  ISkillsProps,
  ISkillsState
> {
  constructor(props: ISkillsProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <React.Fragment>
        <div className="col-md-offset-3 fh5co-heading">
          <h2>Skills and Experience</h2>
        </div>
        <ReactMarkdown source={this.props.skills} />
      </React.Fragment>
    );
  }
}
