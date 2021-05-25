// Mixed Messages Program for Codecademy

// Creates our message object.
const message = {
    // Creating arrays.
    _gods: ['Zeus','Athena','Ares','Poseidon','Hades','Dionysus','Demeter','Hermes','Aphrodite'],
    _emotions: ['angry', 'loving', 'frisky', 'drunk', 'spiteful', 'devious', 'war-bound', 'hyper'],
    _elements: ['water from the seas', 'lightening from the clouds', 'fire from the Earth\'s core', 'wind from the west'],
    _actions:[
        // angry
        ['sends destructive energy your way!', 'demands blood!', 'says you will pay dearly in the coming days.'],
        // loving
        ['','',''],
        // frisky
        ['','',''],
        // drunk
        ['','',''],
        // spiteful
        ['','',''],
        // devious
        ['','',''],
        // war-bound
        ['','',''],
        // hyper
        ['','','']
    ],
    // Creating Getter Methods
    get gods() {
        return this._gods;
    },
    get elements(){
        return this._elements;
    },
    get actions(){
        return this._actions;
    },
    get emotions(){
        return this._emotions;
    },
    // Creating methods for generating pieces of the message.
    generateGod(){
        let randomNum = Math.floor(Math.random() * this.gods.length);
        return this.gods[randomNum]; 
    },
    generateEmotion(){
        let randomNum = Math.floor(Math.random() * this.gods.length);
        return this.emotions[randomNum];
    },
    generateElement(){
        let randomNum = Math.floor(Math.random() * this.gods.length);
        return this.elements[randomNum];
    },
    generateAction(){
        return;
    },
    createMessage(){
        return;
    }
    
}

//console.log(message.generateGod());