import {action, computed, makeObservable, observable} from 'mobx';

export interface Paper {
  company: string;
  price: number;
}

class UserStore {
  public userPapers: Paper[] = [];
  public companies: Set<string> = new Set<string>();
  constructor() {
    makeObservable(this, {
      userPapers: observable,
      addPaperToUser: action,
      companies: observable,
      getCompanies: computed,
    });
  }

  addPaperToUser(paper: Paper) {
    this.companies.add(paper.company);
    this.userPapers.push(paper);
  }

  public get getCompanies(): string[] {
    return Array.from(this.companies);
  }

}
export default UserStore;
