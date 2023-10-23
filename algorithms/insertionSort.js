async function insertionSort() {
    
    document.getElementById('random').disabled = true;
    document.getElementById('size').disabled = true;
    

    if(!sorted && !sorting){
        sorting = true
        let i, key, j;
        for (i = 0; i < bars.length; i++) {
            key = bars[i];
            j = i - 1;
    
            /* Move elements of arr[0..i-1], that are 
            greater than key, to one position ahead 
            of their current position */
            while (j >= 0 && bars[j] > key) {
                await swap(j + 1, j)
                j = j - 1;
            }
            bars[j + 1] = key;
        }
        sorted = true
        sorting = false
    }
    if(!sorting){
        document.getElementById('random').disabled = false;
        document.getElementById('size').disabled = false;
    }
}