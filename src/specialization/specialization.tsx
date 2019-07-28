import * as React from 'react';
import Card from '@material-ui/core/Card';
import LazyLoad from 'react-lazyload';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import './specialization.scss';
export interface ISpecializationProps {
  specializationObj: any[];
}

export interface ISpecializationState {}
export default class Specialization extends React.Component<
  ISpecializationProps,
  ISpecializationState
> {
  constructor(props: ISpecializationProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-offset-3 fh5co-heading">
            <h2>Tools and Technologies</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="about-inner">
              <div className="row">
                {this.props.specializationObj.map((obj: any, index: number) => {
                  return (
                    <div key={index} className="col-md-6 col-xs-12 col-sm-12">
                      <Card className="specialization-card">
                        <CardContent>
                          <div>
                            <LazyLoad height={40}>
                              <img
                                src={obj.imageURL + '?w=40&h=40'}
                                alt=""
                                className="specialization-card-image"
                              />
                            </LazyLoad>
                          </div>
                          <Typography>{obj.title}</Typography>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
