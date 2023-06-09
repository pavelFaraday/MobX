import { makeObservable, observable, action } from "mobx";

class Athlete {
	name: string;
	age: number;
	teamHistory: string[];

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
		this.teamHistory = [];

		// "this" means that this class will be marked as "observable"
		// "true" - means that we are giving to MobX choice to get choose what "teamHistory" should be (observable or NOT)
		makeObservable(this, {
			name: observable,
			age: observable,
			teamHistory: true,
			wishHappyBirthday: action,
			tradePlayer: action,
		});
	}

	wishHappyBirthday() {
		this.age++;
	}

	tradePlayer(team: string) {
		this.teamHistory.push(team);
	}
}

export default Athlete;
