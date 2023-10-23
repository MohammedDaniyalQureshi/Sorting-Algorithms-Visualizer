async function shellSort() {

    document.getElementById('random').disabled = true;
    document.getElementById('size').disabled = true;

    if(!sorted && !sorting){
        sorting = true
        let n = bars.length;
    
        // Start with a big gap, then reduce the gap
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    
            // Do a gapped insertion sort for this gap size.
            // The first gap elements a[0..gap-1] are already
            // in gapped order keep adding one more element
            // until the entire array is gap sorted
            for (let i = gap; i < n; i += 1) {
    
                // add a[i] to the elements that have been gap
                // sorted save a[i] in temp and make a hole at
                // position i
                // await sleep(1); // Delay for visualization
                let temp = bars[i];
    
                const barsContainer = document.getElementById("bars-container");
                const barElements = barsContainer.getElementsByClassName("bar");
                const values = barsContainer.getElementsByClassName("value");
    
                
                await sleep(1)
                
                barElements[i].classList.toggle('swapping');
                values[i]?.classList.toggle('value-swapping');

                const tempHeight = barElements[i].style.height;
                const tempValue = values[i]?.innerText;

                
                let j;
                for (j = i; j >= gap && bars[j - gap] > temp; j -= gap) {
    
                    bars[j] = bars[j - gap];
                    await sleep(1)
                    barElements[j].style.height = barElements[j - gap].style.height;
                    barElements[j].classList.toggle('swapping')
                    barElements[j-gap].classList.toggle('swapping')
                    if(values[i]){
                        values[j].innerText = values[j - gap].innerText
                        values[j].classList.toggle('value-swapping')
                        values[j-gap].classList.toggle('value-swapping')
                    }
                }
    
                // put temp (the original a[i]) in its correct
                // location
                bars[j] = temp;
                await sleep(1)
                barElements[j].style.height = tempHeight;
                if (values[j]) values[j].innerText = tempValue;
                barElements[j].classList.toggle('swapping')
                values[j]?.classList.toggle('value-swapping')
            }
        }
        sorted = true
        sorting = false
    }
    if(!sorting){
        document.getElementById('random').disabled = false;
        document.getElementById('size').disabled = false;
    }
}