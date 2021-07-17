import {React,useEffect,useref} from 'react';
//import './App.css';

export default function timer(){

   const [timerdays, setTimerDays]=React.useState('');
   const [timerhours, setTimerHours]=React.useState('');
   const [timerminutes, setTimerMinutes]=React.useState('');
   const [timerseconds, setTimerSeconds]=React.useState('');

const interval = useref();

   const startTimer = () => {
       const countdownDate = new Date('May 30 , 2020 00:00:00').getTime();
  
       interval = setInterval(() => {
         const now = new Date().getTime();
         const distance = countdownDate - now;
       
         const days = Math.floor(distance/(1000*60*60*24));
         const hours = Math.floor(distance%(1000*60*60*24)/(1000*60*60));
         const minutes = Math.floor(distance%(1000*60*60)/(1000*60));
         const seconds = Math.floor(distance%(1000*60)/1000);

       if (distance<0) {
               //stop our timer
               clearInterval(interval.current);
            }else{
                //update timer
                setTimerDays(days);
                setTimerHours(hours); 
                setTimerMinutes(minutes); 
                setTimerSeconds(seconds); 

            }
        
         }, 1000);
       
      }; 

useEffect(() => {
startTimer();

});
      
return(
<div>
<section className="timer-container">
<section className="timer">
         <div>
            <span classname="mdi mdi-calandar-clock timer-icon"></span>
            <h2>countdown Timer</h2>
            <p>countdown to a really special date.one you could or would never imagine!</p>
         </div>
         <div>
             <section>
                 <p>{timerdays}</p>
                 <p><small>Days</small></p>
             </section>
             <span>:</span>
             <section>
                 <p>{timerhours}</p>
                 <p><small>Hours</small></p>
             </section>
             <span>:</span>
             <section>
                <p>{timerminutes}</p>
                <p><small>minutes</small></p>
             </section>
             <span>:</span>
             <section>
                  <p>{timerseconds}</p>
                  <p><small>seconds</small></p>
             </section>

</div>
</section>
</section>
</div>
);
}            
   