const  convertToMinAndSeconds = (milliseconds) =>{
    let totalSeconds = Math.floor(milliseconds / 1000); 
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return { minutes, seconds };
  }