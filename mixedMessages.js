// Mixed Messages Program for Codecademy

// Creates our message object.
const message = {
    // Creating arrays.
    _gods: ['Zeus','Athena','Ares','Poseidon','Hades','Dionysus','Demeter','Hermes','Aphrodite'],
    _emotions: ['angry', 'loving', 'frisky', 'drunk', 'spiteful', 'devious', 'war-bound', 'hyper'],
    _elements: ['water from the seas', 'lightening from the clouds', 'fire from the Earth\'s core', 'wind from the west'],
    _actions:[],
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
        return; 
    },
    generateEmotion(){
        return;
    },
    generateElement(){
        return;
    },
    generateAction(){
        return;
    },
    createMessage(){
        return;
    }
    
}
