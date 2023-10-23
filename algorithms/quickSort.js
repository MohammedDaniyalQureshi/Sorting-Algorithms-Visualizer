async function partition(bars, low, high) {
    // Choosing the pivot
    let pivot = bars[high];

    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (bars[j] < pivot) {
            // Increment index of smaller element
            i++;
            await swap(i, j)
            // [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
    await swap(i + 1, high)
    //[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position

    return i + 1; // Return the partition index
}

// The main function that implements QuickSort
async function quickSort(bars, low, high) {
    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        let pi = await partition(bars, low, high);
        // let pi = await partition(bars, 0, bars.length-1);

        // Separately sort elements before partition and after partition
        await quickSort(bars, low, pi - 1);
        await quickSort(bars, pi + 1, high);
    }
}

async function callQuickSort() {

    document.getElementById('random').disabled = true;
    document.getElementById('size').disabled = true;

    if(!sorted && !sorting){
        sorting = true
        await quickSort(bars, 0, bars.length - 1)
        sorted = true
        sorting = false
    }
    if(!sorting){
        document.getElementById('random').disabled = false;
        document.getElementById('size').disabled = false;
    }
}