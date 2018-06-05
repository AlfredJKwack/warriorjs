class Player {
  playTurn(warrior) {

  	if(!this._init){
  		warrior.think('tying his shoelaces is necessary.');
  		this._underAttack   = false;
  		this._prevHealth    = warrior.health();
  		this._critHealth    = false;
  		this._maxHealth     = warrior.health();
  		this._startFromWall = !warrior.feel('backward').isEmpty() || warrior.feel().isWall();
  		this._init          = true;
  	}

  	if(warrior.health() < this._prevHealth){
  		warrior.think('he is under attack.');
  		this._underAttack = true;
  	} else {
  		warrior.think('he is not under attack.');
  		this._underAttack = false;
  	}

  	if(warrior.health() < Math.round(this._maxHealth/3)+1){
  		warrior.think('his health is critical.');
  		this._critHealth = true;
  	} else {
  		warrior.think('his health good enough to do battle.');
  		this._critHealth = false;
  	}



  	if(!this._startFromWall || warrior.feel().isWall()){
  		warrior.think('he should turn around.');
  		warrior.pivot();
  	}

  	else if(this._critHealth && this._underAttack){
  		warrior.think('he should retreat to a safer position.');
  		warrior.walk('backward');
  	}

  	else if(!this._underAttack && warrior.health() < this._maxHealth){
  		warrior.think('it is safe to take a knee.');
  		warrior.rest();
  	}

    else if(warrior.feel().isEmpty()){
    	warrior.think('the road ahead is clear.');
    	warrior.walk();
    } 

    else if(warrior.feel().getUnit().isBound()){
    	warrior.think('this captive needs to be rescued.');
    	warrior.rescue()
    }

    else if(warrior.feel().getUnit().isEnemy()){
    	warrior.think('his steel is sharp.');
    	warrior.attack();    	
    }

    else {
    	warrior.think('he is totally lost and panic may set in.');

    }
    this._prevHealth = warrior.health();
  }
}
