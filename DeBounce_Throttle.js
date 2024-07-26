//Throttle & Debounce


//Defination:Debounce
//1. Debouncing means to delay the execution of a fn untill t-time is passed from the last time it was called.
//2. Each time you'll execute, it will reset the timer & will again wait untill t has passed to execute the inside fn. 


//Defination:Throttle
//1. Throttle means to limit the number of calls happening with a time span, but you dont wanna miss any calls.
//2. It means when user clicks call will be made , and untill time t is passed no next call will be made, any calls in b/w will be blocked.



function debounce(fnToBeDebounced, timeDelay) {
    return (function deBounceInternal() {
        let timedFn
        clearTimeout(timedFn)
        timedFn = setTimeout(() => {  // over here fn will be executed instantly 
            fnToBeDebounced()
        }, timeDelay);
    }
    )()
}


function throttle(fnToBeThrottled, timeDelay){
    return (()=>{
        let timedFn = null
        if(timedFn == null){
            timedFn = setTimeout(() => {  // with currecnt code it wont start instantly for first call, since the fntobethrottles is inside timeout
                fnToBeThrottled()       // if you want to start it instantly , you can keep this outside the timeout , and just change the 
                timedFn = null          // value of timedfn inside timeout.
            }, timeDelay);
        }
    })()

}


