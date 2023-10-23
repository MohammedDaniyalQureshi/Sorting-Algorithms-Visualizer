
let toggleSize = true
let sorted = false
let sorting = false



let bars = [];


randomizeArray();


function randomizeArray() {
    sorted = false
    bars = [];

    //To create big bars
    if(toggleSize){

        const barsContainer = document.getElementById("bars-container");

        barsContainer.innerHTML = '';
    
        for (let i = 0; i < 50; i++) { // Change the number of bars as needed
            const height = Math.floor(Math.random() * 200) + 50; // Random height for bars
            bars.push(height);

            const bar = document.createElement("div");
            const value = document.createElement("div");

            bar.className = "bar";
            bar.style.height = height + "px";

            value.className = 'value'
            value.innerText = height

            
            const barElement = document.createElement("div")

            barElement.className = "bar-container"



            barElement.appendChild(bar)
            barElement.appendChild(value)
            
            barsContainer.appendChild(barElement);

        }
    }

    //To create small bars
    if(!toggleSize){

       
        bars = [];
        const barsContainer = document.getElementById("bars-container");
        barsContainer.innerHTML = '';
    
        for (let i = 0; i < 50; i++) { // Create 50 bars
            if(!toggleSize){

                bars = [];
                const barsContainer = document.getElementById("bars-container");
                barsContainer.innerHTML = '';
                barsContainer.style.display = 'block'
            
                for (let i = 0; i < 50; i++) { // Create 50 bars
                    const height = Math.floor(Math.random() * 100) + 10; // Random height for bars
                    bars.push(height);
                    const barElement = document.createElement("div");
                    barElement.className = "bar small-bar";
                    barElement.style.height = height + "px";
                    barElement.style.width = 8 + "px";
                    barsContainer.appendChild(barElement);
                }
            }
        }
    }

}


