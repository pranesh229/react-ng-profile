import localForage from 'localforage';
export default class AboutMeService {
  serviceURL =
    'https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/557E2oqinYcsgIi4EegKaW' +
    '?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412';
  aboutmeData: any;
  constructor() {}
  getAboutMeData() {
    return new Promise((res, reg) => {
      if (window.navigator.onLine) {
        fetch(this.serviceURL)
          .then(response => response.json())
          .then(result => {
            this.aboutmeData = result;
            localForage.setItem('aboutmeData', result);
            res(true);
          })
          .catch(err => {
            console.log(err);
            reg(false);
          });
      } else {
        localForage
          .getItem('aboutmeData')
          .then(response => {
            if (!response) {
              console.error('no Data');
              reg(false);
            } else {
              this.aboutmeData = response;
              res(true);
            }
          })
          .catch(error => {
            console.log(error);
            reg(false);
          });
      }
    });
  }
  getAboutMeDescription(): string {
    return this.aboutmeData.fields.description;
  }
  getSpecializationArryObj(): Specialization[] {
    return this.aboutmeData.fields.specialization;
  }
  getSkills(): string {
    return this.aboutmeData.fields.skills;
  }
}
interface Specialization {
  title?: string;
  detail?: string;
  imageURL?: string;
}
