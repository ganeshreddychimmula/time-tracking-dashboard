let dashboardData;
let currentHourSpaces = document.querySelectorAll(".current-hours");
let previousHoursSpaces = document.querySelectorAll(".previous-hours");
let currentlySelectedTimeframe = "weekly";
let timeframeButtons = document.querySelectorAll(".timeframe");
let handledBreakpoint1 = false;

// getting json data
async function getJSON() {
    let response = await fetch("./data.json");

    if(!response.ok) {
      console.error(`Failed to load data: ${response.status} ${response.statusText}`);
      return [];
    }
    let data = await response.json();
    return data;
}

// Setting  Hours
function setHours(data, timeframe){
    try{
        data.forEach((element, index, arr) => {
            try{
                currentHourSpaces[index].innerText = `${element.timeframes[timeframe].current}hrs`;
                previousHoursSpaces[index].innerText = `Last Week - ${element.timeframes[timeframe].previous}hrs`;
            }catch(err){
                throw new Error(` We got an error when setting got ${timeframe} Hours at ${element.title}`)
            }
        });
    }catch(err){
        console.log(err.message)
    }
}

// handle activity frequency selection
function handleActiveStatus(current){
    timeframeButtons.forEach((button)=> {
        if(button.dataset.timeframe !== current){
            // button.classList.remove("active");
            button.dataset.state = "";
        }else{
            currentlySelectedTimeframe = current;
            // button.classList.add("active");
            button.dataset.state = "active"; 
        }
    })
    setHours(dashboardData, currentlySelectedTimeframe);
}

function handleTimeframeOnClick(selected){
    if(selected.dataset.timeframe !== currentlySelectedTimeframe){
        // make it active others inactive
        handleActiveStatus(selected.dataset.timeframe);
    }
}

timeframeButtons.forEach((timeframeButton)=> {
    timeframeButton.addEventListener("click", (e)=> {
        handleTimeframeOnClick(e.target);
    })
})
// end of activity frequency selection handling

getJSON().then((data)=>{
    dashboardData = data;
    console.log(dashboardData);
    // console.log(Array.isArray(dashboardData));
}).then(()=>{setHours(dashboardData, 'weekly')});

/* handling resize */
// handling resize for current hours
function breakpoint1Handler(){
        if(window.innerWidth >= 550){
            if(!handledBreakpoint1){
                handledBreakpoint1 = true;
            currentHourSpaces.forEach((currentHour)=> {currentHour.classList.replace("text-preset-3","text-preset-1")});
            }    
        }else{
            handledBreakpoint1 = false;
            currentHourSpaces.forEach((currentHour)=> {currentHour.classList.replace("text-preset-1", "text-preset-3")});
        }
}

breakpoint1Handler();

window.addEventListener('resize', breakpoint1Handler)
