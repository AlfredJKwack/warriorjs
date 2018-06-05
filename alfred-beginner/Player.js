class Player {
  playTurn(warrior) {

  	if(!this._init){
  		warrior.think('tying his shoelaces is necessary.');
  		this._prevHealth = warrior.health();
  		this._maxHealth  = warrior.health();
  		this._init       = true;
  	}

  	if(warrior.health() < this._prevHealth && warrior.feel().isEmpty()){
  		warrior.think('he cannot rest here and should press on.');
  		warrior.walk();
  	}

  	else if(warrior.health() < this._maxHealth && warrior.feel().isEmpty()){
  		warrior.think('it is safe to take a knee.');
  		warrior.rest();
  	}

    else if(warrior.feel().isEmpty()){
    	warrior.think('the road ahead is clear.');
    	warrior.walk();
    } 

    else {
    	warrior.think('his steel is sharp.');
    	warrior.attack();
    }
    this._prevHealth = warrior.health();
  }
}
