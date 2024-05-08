import { MenuBar } from '../../components/exportPapa';
import styles from './creatPostImage.css';

class CreatPostScreen extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			this.shadowRoot.innerHTML += `
              <style>${styles}</style>

          `;
		}
	}
}

customElements.define('creatpost-image', CreatPostScreen);
export default CreatPostScreen;
