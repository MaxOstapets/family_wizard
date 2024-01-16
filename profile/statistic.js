function statistic() {
    console.log('The time has come');
}

function set_time() {
    const date = new Date();
    let month = date.getMonth() + 1; 
    
    let interval = 12 - month;
    let millisecondsMonths = 30 * 24 * 60 * 60 * 1000; 
    let intervalMiliseconds = interval * millisecondsMonths;
    
    setInterval(statistic(), intervalMiliseconds);
}

set_time();