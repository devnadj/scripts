class Counter extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.
        this.innerHTML = `Mon composant<br>`;
        // this.count = 0;
        // this.innerHTML = `Mon compteur : ${this.count}`;
        // setInterval(() => {
        //     this.count++;
        //     this.innerHTML = `Mon compteur : ${this.count}`;
        // }, 1000);
    }

    static get observedAttributes() {
    }

    connectedCallback() {
    }

    render() {
        // this.innerHTML = `<span id="count">${this.count}</span>`;
        this.innerHTML = `<span id="count">${1234}</span>`;
    }
}

// le nom de l'élément doit obligatoirement contenir au minimum un tiret
// en second paramètre on passe la classe à déclarer
customElements.define('compositor-counter', Counter);

//export default Counter;

/*
    exemple
    <counter start="0" end="1000" duration="1000"></counter>
*/
