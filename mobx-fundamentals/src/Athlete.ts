import { makeObservable, observable } from "mobx";

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
		});
	}
}

export default Athlete;
