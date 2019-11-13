function getSleepHours (day){
    switch(day){
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 8;
      case 'thursday':
        return 9;
      case 'friday':
        return 6;
      case 'saturday':
        return 10;
      case 'sunday':
        return 9;
              }
  }
  
  function getActualSleepHours (){
    totalSleepHours = getSleepHours('monday') + getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
    return totalSleepHours;
  }
  
  function getIdealSleepHours (){
    let idealSleepHours = 9;
    return idealSleepHours = idealSleepHours * 7;
  }
  
  const wellRested = (totalSleepHours, idealSleepHours) =>{
    getActualSleepHours();
    getIdealSleepHours();
    if (totalSleepHours === idealSleepHours){
      return 'You got the PERFECT amount of sleep!'
    }
    else if (totalSleepHours > idealSleepHours){
      return 'You got' + (totalSleepHours - idealSleepHours) + 'hours too much sleep'
    }
    else if (totalSleepHours < idealSleepHours){
      return 'You need to sleep' + (idealSleepHours - totalSleepHours) + 'hours more!'
    }
    else{
      return 'error'
    }
  }
  
  
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  console.log(wellRested());