import { getDetailDoc, logIn } from '../../utils/firebase';
import MenuBar from '../../components/menuBar/menuBar';

const formData = {
	image: '',
	description: '',
};

class Post extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeImage(e: any) {
		formData.image = e?.target?.value;
	}

	changeDescription(e: any) {
		formData.description = e?.target?.value;
	}

	submitForm() {
		creatPost(formData);
	}

	render() {
		const sectionBar = this.ownerDocument.createElement('MenuBar') as MenuBar;
		this.shadowRoot?.appendChild(sectionBar);

		const section = this.ownerDocument.createElement('section');
		this.shadowRoot?.appendChild(section);

		const creatPost = this.ownerDocument.createElement('div');
		section.appendChild(creatPost);

		const sectionTittle = this.ownerDocument.createElement('div');
		creatPost.appendChild(section);

		const tittle = this.ownerDocument.createElement('p');
		tittle.innerText = 'Creat a new post';
		sectionTittle.appendChild(tittle);

		const share = this.ownerDocument.createElement('div');
		sectionTittle.appendChild(share);

		const shareButton = this.ownerDocument.createElement('button');
		shareButton.innerText = 'share';
		share.appendChild(shareButton);

		const sectionCreatePost = this.ownerDocument.createElement('div');
		section.appendChild(sectionCreatePost);

		const sectionImage = this.ownerDocument.createElement('section');
		sectionCreatePost.appendChild(sectionImage);

		const image = this.ownerDocument.createElement('imput');
		image.innerText = '+';
		// image.type = 'file';
		sectionImage.appendChild(image);

		const description = this.ownerDocument.createElement('section');
		sectionCreatePost.appendChild(description);

		const textDescription = this.ownerDocument.createElement('imput');
		textDescription.innerText = 'Write a description...';
		description.appendChild(textDescription);

		// 	if (signUpScreen) {
		// 		// Mostrar la pantalla de registro
		// 		signUpScreen.style.display = 'block';
		// 	} else {
		// 		console.error("Element with ID 'signup-screen' not found.");
		// 	}
		// });
		// signUp.appendChild(signUpButton);
	}
}

customElements.define('app-login', Post);
export default Post;
