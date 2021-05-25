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
        ['says your true love is closer than you think.','says a new life will make it\'s way into yours.','fills you with warmth <3.'],
        // frisky
        ['will visit soon for a midnight treat.','pushes all the blood in all the right places.','will soon make you irresistible.'],
        // drunk
        ['will fill your cup eternally!','sees a blurry vision of your future.','has fallen asleep at the wheel.'],
        // spiteful
        ['moves your furniture ever-so slightly left.','will decline bank information for the next 24 hours.','sends a horde of acne to that beautiful skin tone.'],
        // devious
        ['plots a week full of cunning pranks.','makes you feel more forgetful than usual.','pokes holes in your lambskin.'],
        // war-bound
        ['calls you to fight along the path to victory!','will push you to complete your tasks with a vengeance!','sends misfortune to your enemies!'],
        // hyper
        ['warn\'s you that coffee has some... side effects.','curses you with everlasting pacing habits.','invites you to go streaking.. could be fun!']
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
        let randomNum = Math.floor(Math.random() * this.emotions.length);
        return this.emotions[randomNum];
    },
    generateElement(){
        let randomNum = Math.floor(Math.random() * this.elements.length);
        return this.elements[randomNum];
    },
    generateAction(emotion){
        let randomNum = Math.floor(Math.random() * 3);
        let act = 0;
        switch (emotion) {
            case 'angry':
                act = 0
                break;
            case 'loving':
                act = 1
                break;
            case 'frisky':
                act = 2
                break;
            case 'drunk':
                act = 3
                break;
            case 'spiteful':
                act = 4
                break;
            case 'devious':
                act = 5
                break;
            case 'war-bound':
                act = 6
                break;
            case 'hyper':
                act = 7
                break;
            default:
                return "Error: Something went wrong in generating an action!";
    }
        return this._actions[act][randomNum];
    },
    createMessage(){
        const god = generateGod();
        const element = generateElement();
        const emotion = generateEmotion();
        const action = generateAction(emotion);
        return `${god} is feeling ${emotion}. ${god} conjures ${element} and ${action}`;
    }
    
}

//console.log(message.generateGod());