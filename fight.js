let subzero = {
    name : 'Subzero',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon : ['gun','sword'],
    attack(name) {
        console.log(name+' Fight');
    }
}

subzero.attack(me);