async function swap(i, j) {

    await sleep(1);

    const temp = bars[i];
    bars[i] = bars[j];
    bars[j] = temp;

    const barsContainer = document.getElementById("bars-container");
    const barElements = barsContainer.getElementsByClassName("bar");
    const values = barsContainer.getElementsByClassName("value");

    
    barElements[j].classList.toggle('swapping')
    barElements[i].classList.toggle('swapping')
    values[j]?.classList.toggle('value-swapping')
    values[i]?.classList.toggle('value-swapping')
    
    
    await sleep(1)

    const tempHeight = barElements[i].style.height;
    const tempValue = values[i]?.innerText || ''
    barElements[i].style.height = barElements[j].style.height;
    barElements[j].style.height = tempHeight;
    if(values[i]){
        values[i].innerText = values[j].innerText
        values[j].innerText = tempValue
    }
    
    await sleep(1)
    
    barElements[j].classList.toggle('swapping')
    barElements[i].classList.toggle('swapping')
    values[j]?.classList.toggle('value-swapping')
    values[i]?.classList.toggle('value-swapping')
   
}



async function swapWithValue(i, value) {
await sleep(1); // Delay for visualization

bars[i] = value;

const barsContainer = document.getElementById("bars-container");
const barElements = barsContainer.getElementsByClassName("bar");
const values = barsContainer.getElementsByClassName("value");

await sleep(1); // Delay for visualization

barElements[i].classList.toggle('swapping')
values[i]?.classList.toggle('value-swapping')
barElements[i].style.height = `${value}px`

if(values[i]) values[i].innerText = value


await sleep(1); // Delay for visualization

barElements[i].classList.toggle('swapping')
values[i]?.classList.toggle('value-swapping')

}




function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}




function changeSize() {
if(!sorting){

    if (toggleSize) {
        createSmallBars()
        toggleSize = !toggleSize
    }else{      
        createBigBars()
        toggleSize = !toggleSize
    }
}
}



function createSmallBars(){
    const barsContainer = document.getElementById("bars-container");
    barsContainer.innerHTML = '';
    console.log(bars)

    for (let i = 0; i < 50; i++) { // Create 50 bars
        const height = Math.floor(bars[i]/2) // Random height for bars
        bars[i] = Math.floor(bars[i]/2) // Random height for bars

        const barElement = document.createElement("div");
        barElement.className = "bar small-bar";
        barElement.style.height = height + "px";
        barsContainer.appendChild(barElement);

        
        barsContainer.appendChild(barElement);
        console.log(bars)
}
}

function createBigBars(){
    const barsContainer = document.getElementById("bars-container");
    barsContainer.innerHTML = '';

    console.log(bars)

    for (let i = 0; i < 50; i++) { 
        const height = bars[i]*2
        bars[i] = bars[i]*2 

        const bar = document.createElement("div");
        const value = document.createElement("div");

        bar.className = "bar";
        bar.style.height = height + "px";

        value.className = 'value'
        value.innerText = height

        const barElement = document.createElement("div");
        barElement.className = "bar-container";
        

        barElement.appendChild(bar)
        barElement.appendChild(value)
        
        barsContainer.appendChild(barElement);

        console.log(bars)
}
}

