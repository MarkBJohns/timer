console.log('timers exercise');

function countDown(num){
  const countdownArr=[];
  // There was either a large delay between 1 and DONE! or no delay
  //    at all, so I gave it an array to iterate throu
  for(let i=num;i>=1;i--){
    countdownArr.push(i);
  }
  const countDownInterval = setInterval(()=>{
    if(countdownArr.length>0){
      console.log(countdownArr.shift());
    }else{
      console.log('DONE!');
      clearInterval(countDownInterval);
    }
  },1000);
}

function randomGame(){
  let count = 0;
  const randomGameInterval = setInterval(()=>{
    const randNum = Math.random();
    count++;
    if(randNum>.75){
      console.log(`It took ${count} tries to get a number greater than .75`);
      clearInterval(randomGameInterval);
    }
  },1000);
}

