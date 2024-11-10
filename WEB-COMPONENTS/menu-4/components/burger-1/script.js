/** Burger Component **/

class Burger extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <span class="layer top"></span>
            <span class="layer middle"></span>
            <span class="layer bottom"></span>
        `;
    }

    connectedCallback() {
    }
}

customElements.define('my-burger', Burger);


// class Burger {
//     #top;    // top layer
//     #middle; // middle layer
//     #bottom; // bottom layer

//     constructor() {
//         this.burger = document.createElement('div');
//         this.burger.classList.add('burger');

//         this.#top = document.createElement('span');
//         this.#top.classList.add('layer');
//         this.#top.classList.add('top');

//         this.#middle = document.createElement('span');
//         this.#middle.classList.add('layer');
//         this.#middle.classList.add('middle');

//         this.#bottom = document.createElement('span');
//         this.#bottom.classList.add('layer');
//         this.#bottom.classList.add('bottom');
//     }
// }

// const top = document.createElement('span');
// top.classList.add('layer');
// top.classList.add('top');

// const middle = document.createElement('span');
// middle.classList.add('layer');
// middle.classList.add('middle');

// const bottom = document.createElement('span');
// middle.classList.add('layer');
// middle.classList.add('bottom');

// function addElements(burger) {
//     burger.appendChild(top);
//     burger.appendChild(middle);
//     burger.appendChild(bottom);
// }