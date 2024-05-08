class CreatPostx extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			this.shadowRoot.innerHTML += `
              <style>$</style>

          `;
		}
	}
}

customElements.define('creatpost-tweet', CreatPostx);
export default CreatPostx;
