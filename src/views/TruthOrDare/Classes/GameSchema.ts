import { Dare } from "./Dare";
import { PlayerSchema } from "./PlayerSchema";
import { Truth } from "./Truth";

export class GameSchema {
	constructor(players: PlayerSchema[]) {
		this.players = players;
	}
	players: PlayerSchema[];
	girls: PlayerSchema[] = null;
	boys: PlayerSchema[] = null;
	addPlayer(player: PlayerSchema) {
		this.players = [...this.players, player];
	}
	removePlayer(name: string) {
		this.players = this.players.filter(p => p.name !== name);
	}
	startGame() {
		if(this.players.length < 2) return;
		this.girls = this.players.filter(player => player.gender !== false);
		this.boys = this.players.filter(player => player.gender !== true);
	}
	sayTruth() {
		return new Truth();
	}
	sayDare() {
		return new Dare();
	}
}