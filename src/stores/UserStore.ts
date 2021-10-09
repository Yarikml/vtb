import {action, computed, makeObservable, observable} from 'mobx';

export interface Paper {
  company: string;
  price: number;
}

class UserStore {
  public userPapers: Paper[] = [];
  public companies: Set<string> = new Set<string>();
  public money: number = 1000;
  public moneyGoal: number = 10000;
  constructor() {
    makeObservable(this, {
      userPapers: observable,
      addPaperToUser: action,
      companies: observable,
      money: observable,
      moneyGoal: observable,
      getCompanies: computed,
    });
  }

  addPaperToUser(paper: Paper) {
    this.companies.add(paper.company);
    this.money = this.money - paper.price
    this.userPapers.push(paper);
  }

  public get getCompanies(): string[] {
    return Array.from(this.companies);
  }

}
export default UserStore;
