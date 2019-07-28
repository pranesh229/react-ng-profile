import * as React from 'react';
import './about-me.scss';
import AboutMeService from './about-me.service';
import Skills from '../skills/skills';
import Specialization from '../specialization/specialization';

export interface IAboutMeProps {}
export interface IAboutMeState {
  aboutMeDescription: string;
  skills: string;
  specializationObj: any;
}
export default class AboutMe extends React.Component<
  IAboutMeProps,
  IAboutMeState
> {
  componentDidMount() {}
  constructor(props: IAboutMeProps) {
    super(props);
    this.state = {
      aboutMeDescription: '',
      skills: '',
      specializationObj: {}
    };
    let aboutMeService = new AboutMeService();
    aboutMeService.getAboutMeData().then(response => {
      this.setState({
        aboutMeDescription: aboutMeService.getAboutMeDescription(),
        skills: aboutMeService.getSkills(),
        specializationObj: aboutMeService.getSpecializationArryObj()
      });
    });
  }

  public render() {
    return (
      <div id="fh5co-about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 fh5co-heading">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="about-inner">
                {this.state.aboutMeDescription ? (
                  <p>{this.state.aboutMeDescription}</p>
                ) : null}
              </div>
            </div>
          </div>
          {this.state.skills ? (
            <div>
              <Skills skills={this.state.skills} />
              <Specialization
                specializationObj={this.state.specializationObj}
              />
            </div>
          ) : null}

          {/* <app-skills *ngIf="skills" [skills]=skills></app-skills>
          <app-specialization *ngIf="specializationObj" [specializationObj]=specializationObj></app-specialization> */}
        </div>
      </div>
    );
  }
}
