import {action, computed, makeObservable, observable} from 'mobx';

export interface Paper {
  company: string;
  price: number;
}

class UserStore {
  public userPapers: Paper[] = [
    {
      company: 'Tesla',

      price: 300,
    },
  ];
  public companies: Set<string> = new Set<string>();
  public money: number = 1000;
  public moneyGoal: number = 10000;
  constructor() {
    makeObservable(this, {
      userPapers: observable,
      buyPaper: action,
      sellPaper: action,
      companies: observable,
      money: observable,
      moneyGoal: observable,
      getCompanies: computed,
    });
  }
  buyPaper(paper: Paper, amount: number) {
    this.companies.add(paper.company);
    this.money = this.money - paper.price * amount;

    for (let i = 0; i < amount; i++) {
      this.userPapers.push(paper);
    }
  }

  sellPaper(paper: Paper, amount: number) {
    this.money = this.money + paper.price * amount;

    let companyPapers = this.userPapers.filter(
      paper => paper.company === paper.company,
    );

    let filtered = this.userPapers.filter(
      oldPaper => oldPaper.company != paper.company,
    );

    for (let i = 0; i < amount; i++) {
      companyPapers.pop();
    }

    let result = [...filtered, companyPapers]
    this.userPapers = result
    this.companies.add(paper.company);
    this.userPapers.push(paper);
  }
  /*buyPaper(paper: Paper) {
    this.companies.add(paper.company);
    //this.companies.add(paper.company);
    //this.money = this.money - paper.price * amount;
    //this.userPapers.push(paper);
  }*/

  public filterByCompany(company: string): Paper[] {
    return this.userPapers.filter(paper => paper.company === company);
  }

  public get getCompanies(): string[] {
    return Array.from(this.companies);
  }

}
export default UserStore;
