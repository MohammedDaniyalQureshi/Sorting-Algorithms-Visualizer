async function selectionSort() {

    document.getElementById('random').disabled = true;
    document.getElementById('size').disabled = true;

    if(!sorted && !sorting){
        sorting = true
        let i, j, min;
    
        // One by one move boundary of unsorted subarray
        for (i = 0; i < bars.length - 1; i++) {
            // Find the minimum element in unsorted array
            min = i;
            for (j = i + 1; j < bars.length; j++)
                if (bars[j] < bars[min])
                    min = j;
    
            // Swap the found minimum element with the first element
            await swap(min, i);
        }
        sorted = true
        sorting = false
    }
    
    if(!sorting){
        document.getElementById('random').disabled = false;
        document.getElementById('size').disabled = false;
    }
        
}