class Counter {
    #start;
    #end;
    #duration;  // duration in milliseconds (min 100ms)
    #separator; // separator between numbers : space, comma, dot, none, etc.
    #increment;
    #value;

    constructor(increment, start, end, separator, htmlElement) {
        this.#increment = (end - start) / (this.#duration * 1000);
        this.#start = start;
        this.#end = end;
    }
    
    increment() {
        this.#value += this.#increment;
    }


    start() {
        
    }

    stop() {
        
    }
    
    getCount() {
        return this.count;
    }
}


// nombre   : start -> end
// duration : 0     -> duration