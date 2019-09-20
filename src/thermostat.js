function Thermostat(){
  this.temp = 20
  this.minTemp = 10
  this.maxTemp = 25
  this.powerSavingMode = true
}

Thermostat.prototype.checkTemp = function(){
  return this.temp;
};

Thermostat.prototype.isMaxTemp = function(){
  if(this.powerSavingModeOff){
   return this.temp === this.maxTemp
  }
   return this.maxTemp;
}

//checks if temp is at minimum
Thermostat.prototype.isMinTemp = function(){
  return this.temp === this.minTemp;
}
//increases temp
//this.temp === this.maxTemp
Thermostat.prototype.up = function(){
  if(this.isMaxTemp()){
    return;
  }
for(i = 0; i < 1; i++){
    this.temp++};
  };

  //decreases temp to minimum
  Thermostat.prototype.down = function(){
    if (this.isMinTemp()){
      return;
    }
    for(i = 0; i < 1; i++){
      this.temp--};
    };

    Thermostat.prototype.powerSavingModeOn = function(){
      this.powerSavingMode = true
      this.maxTemp = 25
    };
    Thermostat.prototype.powerSavingModeOff = function(){
      this.powerSavingMode = false
      this.maxTemp = 32
    };

    Thermostat.prototype.reset = function(){
      this.temp = 20
    };

    Thermostat.prototype.energyUsageStatus = function(){
      if(this.temp < 18){
        return "Low usage";
      } else if(this.temp >= 18 && this.temp < 25){
        return "Medium usage";
      } else {
        return "High usage";
      };
    };
