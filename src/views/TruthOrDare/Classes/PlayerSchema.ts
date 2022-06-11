export class PlayerSchema {
	constructor(
		name: string,
		gender: boolean
	) {
		this.name = name;
		this.gender = gender;
	}
	name: string;
	gender: boolean;
	setName(newName: string) {
		console.log(`Changed (${this.name}) name to (${newName})`)
		this.name = newName;
	};
	setGender(gender: boolean) {
		console.log(`Changed (${this.name}) gender to (${gender ? 'M' : 'F'})`)
		this.gender = gender;
	}
}