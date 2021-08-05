import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';
import { calculateSumOfNumbers as calcSum } from '../core/utils/index';

const mockDonates = [
	{ amount: 4, date: new Date() },
	{ amount: 20, date: new Date() },
	{ amount: 3, date: new Date() },
	{ amount: 1, date: new Date() },
];

let arrOfNumbers = [];
mockDonates.forEach((elem) => {
	return arrOfNumbers.push(elem.amount);
});

export default class App {
	#donateForm;
	#donateList;

	constructor() {
		this.state = {
			donates: mockDonates,
			totalAmount: calcSum(arrOfNumbers),
		}
		this.#donateForm = new DonateForm(this.createNewDonate.bind(this)).render(this.state.totalAmount);
		this.#donateList = new DonateList(this.state.donates).render();

	}

	run() {
		document.body.append(this.#donateForm);
		document.body.append(this.#donateList);
		console.log("Hello World");//========================================================
	}

	createNewDonate(newDonate) {
		this.state.donates.push(...newDonate);
		this.state.totalAmount = 0;
		this.state.donates.forEach((elem, index) => {
			this.state.totalAmount += elem['amount'];
			return this.state.totalAmount;
		});


		let a = new DonateList;
		let b = new DonateForm;

		a.updateDonates(this.state.donates);
		b.updateTotalAmount(this.state.totalAmount);
		return this.state
	}
}