import { Settings as valuta } from '../core/constants/settings';
import { getFormattedTime as getDate } from '../core/utils/index';

export class DonateList {
	#donates

	constructor(donates) {
		this.#donates = donates;
	}

	render() {
		let div = document.createElement('div');
		div.className = 'donates-container';
		document.body.append(div);

		let h2 = document.createElement('h2');
		h2.className = 'donates-container__title';
		h2.textContent = 'Список донатов';
		div.append(h2);

		let subDiv = document.createElement('div');
		subDiv.className = 'donates-container__donates';
		div.append(subDiv);

		//donates
		console.log('this.#donates', this.#donates);//========================================================
		this.#donates.forEach((elem) => {
			let donatesItem = document.createElement('div');
			donatesItem.className = 'donate-item';
			donatesItem.innerHTML = getDate(elem.date) + ` - <b>${elem.amount}${valuta.currency}</b>`; //
			subDiv.append(donatesItem);

			return subDiv
		});

		//console.log(subDiv); // Тут донаты добавляются, а на странице - нет

		return div
	}

	updateDonates(updatedDonates) {
		this.#donates = updatedDonates;
		let container = document.querySelector('.donates-container');
		container.remove();
		this.render();

		return this.#donates
	}
}