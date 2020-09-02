// StopWatch Program

function StopWatch(){
  let startTime, endTime, duration = 0;
  let running = false;

  this.start = () =>{
    if(running) throw new Error("stopwatch already started ...");
    running = true;
    startTime = new Date();
    console.log("starting ...")
  };

  this.stop = () => {
    if(!running) throw new Error("stopwatch already stopped ...");
    endTime = new Date();
    running = false;
    duration = (endTime.getTime() - startTime.getTime())/1000;
    console.log("Duration :", duration, "Seconds") 
  };

  this.reset = () => {
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  }

  Object.defineProperty(this, "duration", {
    get: function(){
      return duration
    }
  })
};
let stopWatch = new StopWatch();