class Player {
  playTurn(warrior) {

  	if(!this._init){
  		warrior.think('is tying his shoelaces.');
  		this._prevHealth = warrior.health();
  		this._maxHealth  = warrior.health();
  		this._init       = true;
  	}
  	if(warrior.health() < this._maxHealth && warrior.feel().isEmpty()){
  		warrior.think('he should take a knee.');
  		warrior.rest();
  	}
    else if(warrior.feel().isEmpty()){
    	warrior.think('the road ahead is clear.');
    	warrior.walk();
    } else {
    	warrior.think('his steel is sharp.');
    	warrior.attack();
    }
    this._prevHealth = warrior.health();
  }
}
