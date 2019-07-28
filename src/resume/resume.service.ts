import localForage from 'localforage';
export default class ResumeService {
  serviceURL =
    'https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/1nDLOS0AkEuUUyy4CE6SsO' +
    '?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412';
  constructor() {}
  getResume() {
    return new Promise((res, reg) => {
      if (window.navigator.onLine) {
        fetch(this.serviceURL)
          .then(response => response.json())
          .then(result => {
            localForage.setItem('resumeData', result);
            res(result);
          })
          .catch(err => {
            console.log(err);
            reg(err);
          });
      } else {
        localForage
          .getItem('resumeData')
          .then(response => {
            if (!response) {
              console.error('no data');
              reg('no data');
            } else {
              res(response);
            }
          })
          .catch(error => {
            console.error(error);
            reg(error);
          });
      }
    });
  }
}
