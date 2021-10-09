import {action, makeObservable, observable} from 'mobx';

interface Paper {
  company: string;
  price: number;
}

class UserStore {
  public userPapers: Paper[] = [];
  constructor() {
    makeObservable(this, {
      userPapers: observable,
      addPaperToUser: action,
    });
  }

  addPaperToUser(paper: Paper) {
    this.userPapers.push(paper);
  }
}
export default UserStore;
