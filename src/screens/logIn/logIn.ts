import { getDetailDoc, logIn } from '../../utils/firebase';

const formData = {
	email: '',
	password: '',
};

class Login extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeEmail(e: any) {
		formData.email = e?.target?.value;
	}

	changePassword(e: any) {
		formData.password = e?.target?.value;
	}

	submitForm() {
		logIn(formData);
	}

	render() {
		const title = this.ownerDocument.createElement('h1');
		title.innerText = 'Login';
		this.shadowRoot?.appendChild(title);

		const email = this.ownerDocument.createElement('div');
		email.innerText = 'E-mail';
		this.shadowRoot?.appendChild(email);

		const mail = this.ownerDocument.createElement('input');
		mail.placeholder = 'Enter your email';
		mail.addEventListener('change', this.changeEmail);
		email.appendChild(mail);

		const password = this.ownerDocument.createElement('div');
		password.innerText = 'Password';
		this.shadowRoot?.appendChild(password);

		const enterPassword = this.ownerDocument.createElement('input');
		enterPassword.placeholder = 'At least 8 characters';
		enterPassword.addEventListener('change', this.changePassword);
		password.appendChild(enterPassword);

		const save = this.ownerDocument.createElement('button');
		save.innerText = 'Log In';
		save.addEventListener('click', this.submitForm);
		this.shadowRoot?.appendChild(save);

		const privacy = this.ownerDocument.createElement('p');
		privacy.innerHTML = 'By creating an account, you agree to the Raw Terms of Service and Privacy Policy';
		this.shadowRoot?.appendChild(privacy);

		const signUp = this.ownerDocument.createElement('div');
		this.shadowRoot?.appendChild(signUp);

		const newAccount = this.ownerDocument.createElement('p');
		newAccount.innerText = 'Dont  have account';
		signUp.appendChild(newAccount);

		const signUpButton = this.ownerDocument.createElement('p');
		signUpButton.innerText = 'Sign Up';
		signUpButton.addEventListener('click', () => {
			// Obtener referencia a la pantalla de registro
			const signUpScreen = document.getElementById('app-register');

			if (signUpScreen) {
				// Mostrar la pantalla de registro
				signUpScreen.style.display = 'block';
			} else {
				console.error("Element with ID 'signup-screen' not found.");
			}
		});
		signUp.appendChild(signUpButton);
	}
}

customElements.define('app-login', Login);
export default Login;
