async function bubbleSort() {

    document.getElementById('random').disabled = true;
    document.getElementById('size').disabled = true;
    if(!sorted && !sorting){
        sorting = true
        for (let i = 0; i < bars.length - 1; i++) {
            for (let j = 0; j < bars.length - i - 1; j++) {
                if (bars[j] > bars[j + 1]) {
                    await swap(j, j + 1);
                }
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