async function merge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;
   
    let L = new Array(n1);
    let R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++){
        L[i] = arr[l + i];
    }
    
    for (let j = 0; j < n2; j++){
        R[j] = arr[m + 1 + j];
    }

    // Merge the temp arrays back into arr[l..r]
    // Initial index of first, second and merged subarray
    let i = 0;
    let j = 0;
    let k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            await swapWithValue(k,L[i])
            i++;
        }
        else {
            await swapWithValue(k,R[j])
            j++;
        }
        k++;
    }
    
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        await swapWithValue(k,L[i])
        i++;
        k++;
    }
    
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        await swapWithValue(k,R[j])
        j++;
        k++;
    }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted
async function mergeSort(arr, l, r) {
    console.log(arr)
    if (l >= r) {
        return;
    }
    let m = l + parseInt((r - l) / 2);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
    //console.log(arr)
}

async function callMergeSort() {
    document.getElementById('random').disabled = true;
    document.getElementById('size').disabled = true;
    if(!sorted && !sorting){
        sorting = true
        await mergeSort(bars, 0, bars.length - 1)
        sorted = true
        sorting = false
    }
    if(!sorting){
        document.getElementById('random').disabled = false;
        document.getElementById('size').disabled = false;
    }
}