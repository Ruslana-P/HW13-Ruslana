function Clock(elem) {
    this.format = true;
    this.element = elem;

    this.reduce = function() {
        if (this.format) {
            elem.innerHTML = new Date().toLocaleTimeString();
        } else {
            elem.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
        }
    }

    this.checkFormat = function() {
        this.format = !this.format;
    }

    this.element.addEventListener('click', () => this.checkFormat());

    this.interval = setInterval( ()=> {
        this.reduce()
    }, 1000);
}

let timeNow = document.querySelector('#timeNow');
let clock1 = new Clock (timeNow);

clock1





