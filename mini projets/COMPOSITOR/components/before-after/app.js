class BeforeAfter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `before-after`;
    }
}

customElements.define('compositor-before-after', BeforeAfter);

export default BeforeAfter;