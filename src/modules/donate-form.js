import { Settings as valuta } from '../core/constants/settings'

export class DonateForm {
	#form;

	constructor(createNewDonate) {
		this.#form = document.createElement('form');
		this.#form.className = 'donate-form';
		this.createNewDonate = createNewDonate;

		this.#form.addEventListener('submit', (e) => {
			e.preventDefault();
			let newObj = [{}];
			newObj[0].date = new Date();
			let cleanInput = document.querySelector('.donate-form__donate-input');
			newObj[0].amount = Number(cleanInput.value);
			this.createNewDonate(newObj);
			cleanInput.value = '';

			return newObj
		})
	}

	render(totalAmount) {
		let h1 = document.createElement('h1');
		h1.setAttribute('id', 'total-amount');
		h1.textContent = totalAmount + valuta.currency;

		let label = document.createElement('label');
		label.className = 'donate-form__input-label';
		label.textContent = `Введите сумму в ${valuta.currency}`;

		let input = document.createElement('input');
		input.className = 'donate-form__donate-input';
		input.setAttribute('name', 'amount');
		input.setAttribute('type', 'number');
		input.setAttribute('max', '100');
		input.setAttribute('min', '0');
		input.setAttribute('required', '');
		label.append(input);

		let button = document.createElement('button');
		button.className = 'donate-form__submit-button';
		button.setAttribute('type', 'submit');
		button.textContent = 'Задонатить';

		this.#form.append(h1, label, button);

		return this.#form
	}

	updateTotalAmount(newAmount) {
		let itemTotalAmount = document.querySelector('[id="total-amount"]');
		itemTotalAmount.textContent = newAmount + valuta.currency;

		return itemTotalAmount
	}
}