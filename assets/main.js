let dashboardData;
let currentHourSpaces = document.querySelectorAll(".current-hours")
let previousHoursSpaces = document.querySelectorAll(".previous-hours")
let currentlySelectedTimeframe = "weekly";
let timeframeButtons = document.querySelectorAll(".timeframe") 

// getting json data
async function getJSON() {
    let response = await fetch("../data.json");
    // 
    if(!response.ok){
        // handle later
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

function handleActiveStatus(current){
    timeframeButtons.forEach((button)=> {
        if(button.dataset.timeframe !== current){
            button.classList.remove("active");
        }else{
            currentlySelectedTimeframe = current;
            button.classList.add("active");
        }
    })
}

function handleTimeframeOnClick(selected){
    if(selected.dataset.timeframe !== currentlySelectedTimeframe){
        // make it active others inactive
        handleActiveStatus(selected.dataset.timeframe);
        setHours(dashboardData, currentlySelectedTimeframe);
    }
}

timeframeButtons.forEach((timeframeButton)=> {
    timeframeButton.addEventListener("click", (e)=> {
        handleTimeframeOnClick(e.target);
    })
})

getJSON().then((data)=>{
    dashboardData = data;
    console.log(dashboardData);
    // console.log(Array.isArray(dashboardData));
}).then(()=>{setHours(dashboardData, 'weekly')});

