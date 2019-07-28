import * as React from 'react';
import './resume.scss';
import ResumeService from './resume.service';
import ReactMarkdown from 'react-markdown';
export interface IResumeProps {}

export interface IResumeState {
  resume: string;
}

export default class Resume extends React.Component<
  IResumeProps,
  IResumeState
> {
  constructor(props: IResumeProps) {
    super(props);

    this.state = {
      resume: ''
    };
    let resumeService = new ResumeService();
    resumeService.getResume().then((result: any) => {
      this.setState({ resume: result.fields.resume });
    });
  }

  public render() {
    return (
      <div>
        <ReactMarkdown source={this.state.resume} />
      </div>
    );
  }
}
