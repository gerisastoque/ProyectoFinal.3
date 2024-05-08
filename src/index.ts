import abueloStyles from './indexAbuelo.css';

// componentes
import './screens/account-Settings/accountSettings';
import './screens/change-Password/changePassword';
import './screens/creatPostImage/creatPostImage';
import './screens/creatPostTweet/creatPostTweet';
import './screens/createAccount/createAccount';
import './screens/dashboard/dashboard';
import './screens/logIn/logIn';
import './screens/profile-Post/profilePost';
import './screens/profile-Tweet/profileTweet';

import { navigate } from './store/actions';
import { addObserver, appState, dispatch } from './store';
import { Screens } from './types/store';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';

		switch (appState.screen) {
			case Screens.dashboard:
				const dashboard = this.ownerDocument.createElement('dashboard-screen');
				this.shadowRoot?.appendChild(dashboard);
				break;

			case Screens.accountSettings:
				const accountSettings = this.ownerDocument.createElement('app-accountSettings');
				this.shadowRoot?.appendChild(accountSettings);
				break;

			case Screens.profileTweet:
				const profileTweet = this.ownerDocument.createElement('profile-tweet');
				this.shadowRoot?.appendChild(profileTweet);
				break;

			case Screens.profilePost:
				const profilePost = this.ownerDocument.createElement('profile-post');
				this.shadowRoot?.appendChild(profilePost);
				break;

			case Screens.creatPostImage:
				const creatPostImage = this.ownerDocument.createElement('creatpost-image');
				this.shadowRoot?.appendChild(creatPostImage);
				break;

			case Screens.creatPostTweet:
				const creatPostTweet = this.ownerDocument.createElement('creatpost-tweet');
				this.shadowRoot?.appendChild(creatPostTweet);
				break;

			case Screens.createAccount:
				const createAccount = this.ownerDocument.createElement('create-account');
				this.shadowRoot?.appendChild(createAccount);
				break;

			case Screens.login:
				const login = this.ownerDocument.createElement('app-login');
				this.shadowRoot?.appendChild(login);
				break;

			case Screens.changePassword:
				const changePassword = this.ownerDocument.createElement('app-changePassword');
				this.shadowRoot?.appendChild(changePassword);
				break;

			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);
