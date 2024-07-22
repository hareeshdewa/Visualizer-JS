async function startQuickSort() {
    document.getElementById("visualizer").innerHTML = `
        <br />
        <p class="header">Quick Sort</p>
        <div id="array"></div>
    `;

    var container = document.getElementById("array");

    function generateArray() {
        for (var i = 0; i < 20; i++) {
            var value = Math.ceil(Math.random() * 100);
            var arrayEle = document.createElement("div");
            arrayEle.classList.add("block");
            arrayEle.style.height = `${value * 3}px`;
            arrayEle.style.transform = `translate(${i * 30}px)`;
            var arrayEleLabel = document.createElement("label");
            arrayEleLabel.classList.add("block_id");
            arrayEleLabel.innerText = value;
            arrayEle.appendChild(arrayEleLabel);
            container.appendChild(arrayEle);
        }
    }

    async function partition(l, r, delay = 700) {
        var blocks = document.querySelectorAll(".block");
        var pivot = Number(blocks[r].childNodes[0].innerText);
        var i = l - 1;

        for (var j = l; j < r; j++) {
            blocks[j].style.backgroundColor = "orange";
            await new Promise((resolve) => setTimeout(resolve, delay));

            if (Number(blocks[j].childNodes[0].innerText) < pivot) {
                i++;
                var temp1 = blocks[i].style.height;
                var temp2 = blocks[i].childNodes[0].innerText;
                blocks[i].style.height = blocks[j].style.height;
                blocks[j].style.height = temp1;
                blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
                blocks[j].childNodes[0].innerText = temp2;
                await new Promise((resolve) => setTimeout(() => resolve(), delay));
                blocks[i].style.backgroundColor = "blue";
            }
        }

        var temp1 = blocks[i + 1].style.height;
        var temp2 = blocks[i + 1].childNodes[0].innerText;
        blocks[i + 1].style.height = blocks[r].style.height;
        blocks[r].style.height = temp1;
        blocks[i + 1].childNodes[0].innerText = blocks[r].childNodes[0].innerText;
        blocks[r].childNodes[0].innerText = temp2;

        blocks[i + 1].style.backgroundColor = "#6b5b95";

        return i + 1;
    }

    async function quickSort(l, r, delay = 100) {
        if (l < r) {
            var pivotIdx = await partition(l, r);
            await quickSort(l, pivotIdx - 1);
            await quickSort(pivotIdx + 1, r);
        }
    }

    generateArray();
    await quickSort(0, 19);
    var blocks = document.querySelectorAll(".block");
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "#13CE66";
    }
}

function startSelectionSort() {
    document.getElementById("visualizer").innerHTML = `
        <br />
        <p class="header">Selection Sort</p>
        <div id="array"></div>
    `;

    var container = document.getElementById("array");

    function generateArray() {
        for (var i = 0; i < 20; i++) {
            var value = Math.ceil(Math.random() * 100);
            var arrayEle = document.createElement("div");
            arrayEle.classList.add("block");
            arrayEle.style.height = `${value * 3}px`;
            arrayEle.style.transform = `translate(${i * 30}px)`;
            var arrayEleLabel = document.createElement("label");
            arrayEleLabel.classList.add("block_id");
            arrayEleLabel.innerText = value;
            arrayEle.appendChild(arrayEleLabel);
            container.appendChild(arrayEle);
        }
    }

    async function selectionSort(delay = 300) {
        var blocks = document.querySelectorAll(".block");
        for (var i = 0; i < blocks.length; i += 1) {
            var minIdx = i;
            blocks[i].style.backgroundColor = "#FF4949";
            for (var j = i + 1; j < blocks.length; j += 1) {
                blocks[j].style.backgroundColor = "#FF4949";
                await new Promise((resolve) => setTimeout(() => resolve(), delay));
                var val1 = parseInt(blocks[j].childNodes[0].innerText);
                var val2 = parseInt(blocks[minIdx].childNodes[0].innerText);
                if (val1 < val2) {
                    if (minIdx !== i) blocks[minIdx].style.backgroundColor = " rgb(24, 190, 255)";
                    minIdx = j;
                } else {
                    blocks[j].style.backgroundColor = " rgb(24, 190, 255)";
                }
            }
            var temp1 = blocks[minIdx].style.height;
            var temp2 = blocks[minIdx].childNodes[0].innerText;
            blocks[minIdx].style.height = blocks[i].style.height;
            blocks[i].style.height = temp1;
            blocks[minIdx].childNodes[0].innerText = blocks[i].childNodes[0].innerText;
            blocks[i].childNodes[0].innerText = temp2;
            await new Promise((resolve) => setTimeout(() => resolve(), delay));
            blocks[minIdx].style.backgroundColor = " rgb(24, 190, 255)";
            blocks[i].style.backgroundColor = " rgb(49, 226, 13)";
        }
        document.getElementById("Button1").disabled = false;
        document.getElementById("Button1").style.backgroundColor = "#6f459e";
        document.getElementById("Button2").disabled = false;
        document.getElementById("Button2").style.backgroundColor = "#6f459e";
    }

    generateArray();
    selectionSort();
}

function startBubbleSort() {
    document.getElementById("visualizer").innerHTML = `
        <br />
        <p class="header">Bubble Sort</p>
        <div id="array"></div>
    `;

    var container = document.getElementById("array");

    function generateArray() {
        for (var i = 0; i < 20; i++) {
            var value = Math.ceil(Math.random() * 100);
            var arrayEle = document.createElement("div");
            arrayEle.classList.add("block");
            arrayEle.style.height = `${value * 3}px`;
            arrayEle.style.transform = `translate(${i * 30}px)`;
            var arrayEleLabel = document.createElement("label");
            arrayEleLabel.classList.add("block_id");
            arrayEleLabel.innerText = value;
            arrayEle.appendChild(arrayEleLabel);
            container.appendChild(arrayEle);
        }
    }

    async function swap(el1, el2) {
        return new Promise((resolve) => {
            var temp = el1.style.transform;
            el1.style.transform = el2.style.transform;
            el2.style.transform = temp;
            window.requestAnimationFrame(function () {
                setTimeout(() => {
                    container.insertBefore(el2, el1);
                    resolve();
                }, 250);
            });
        });
    }

    async function bubbleSort(delay = 100) {
        var blocks = document.querySelectorAll(".block");
        for (var i = 0; i < blocks.length; i += 1) {
            for (var j = 0; j < blocks.length - i - 1; j += 1) {
                blocks[j].style.backgroundColor = "#FF4949";
                blocks[j + 1].style.backgroundColor = "#FF4949";
                await new Promise((resolve) => setTimeout(() => resolve(), delay));
                var value1 = Number(blocks[j].childNodes[0].innerText);
                var value2 = Number(blocks[j + 1].childNodes[0].innerText);
                if (value1 > value2) {
                    await swap(blocks[j], blocks[j + 1]);
                    blocks = document.querySelectorAll(".block");
                }
                blocks[j].style.backgroundColor = "#6b5b95";
                blocks[j + 1].style.backgroundColor = "#6b5b95";
            }
            blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
        }
    }

    generateArray();
    bubbleSort();
}

function startInsertionSort() {
    document.getElementById("visualizer").innerHTML = `
        <br />
        <p class="header">Insertion Sort</p>
        <div id="array"></div>
    `;

    var container = document.getElementById("array");

    function generateArray() {
        for (var i = 0; i < 20; i++) {
            var value = Math.ceil(Math.random() * 100);
            var arrayEle = document.createElement("div");
            arrayEle.classList.add("block");
            arrayEle.style.height = `${value * 3}px`;
            arrayEle.style.transform = `translate(${i * 30}px)`;
            var arrayEleLabel = document.createElement("label");
            arrayEleLabel.classList.add("block_id");
            arrayEleLabel.innerText = value;
            arrayEle.appendChild(arrayEleLabel);
            container.appendChild(arrayEle);
        }
    }

    async function insertionSort(delay = 600) {
        var blocks = document.querySelectorAll(".block");

        for (var i = 1; i < blocks.length; i++) {
            var key = parseInt(blocks[i].childNodes[0].innerText);
            var j = i - 1;

            blocks[i].style.backgroundColor = "darkblue";

            while (j >= 0 && parseInt(blocks[j].childNodes[0].innerText) > key) {
                blocks[j].style.backgroundColor = "darkblue";
                blocks[j + 1].style.height = blocks[j].style.height;
                blocks[j + 1].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
                j--;

                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            blocks[j + 1].style.height = `${key * 3}px`;
            blocks[j + 1].childNodes[0].innerText = key;

            await new Promise((resolve) => setTimeout(resolve, delay));

            for (var k = 0; k <= i; k++) {
                blocks[k].style.backgroundColor = " rgb(49, 226, 13)";
            }
        }

        document.getElementById("Button1").disabled = false;
        document.getElementById("Button1").style.backgroundColor = "#6f459e";
        document.getElementById("Button2").disabled = false;
        document.getElementById("Button2").style.backgroundColor = "#6f459e";
    }

    generateArray();
    insertionSort();
}


function startMergeSort() {
    document.getElementById("visualizer").innerHTML = `
        <br />
        <p class="header">Merge Sort</p>
        <div id="array"></div>
    `;

    var container = document.getElementById("array");

    function generateArray() {
        for (var i = 0; i < 20; i++) {
            var value = Math.ceil(Math.random() * 100);
            var arrayEle = document.createElement("div");
            arrayEle.classList.add("block");
            arrayEle.style.height = `${value * 3}px`;
            arrayEle.style.transform = `translate(${i * 30}px)`;
            var arrayEleLabel = document.createElement("label");
            arrayEleLabel.classList.add("block_id");
            arrayEleLabel.innerText = value;
            arrayEle.appendChild(arrayEleLabel);
            container.appendChild(arrayEle);
        }
    }

    async function merge(left, middle, right, delay) {
        var blocks = document.querySelectorAll(".block");
        var n1 = middle - left + 1;
        var n2 = right - middle;

        var leftArray = new Array(n1);
        var rightArray = new Array(n2);

        for (var i = 0; i < n1; i++) leftArray[i] = parseInt(blocks[left + i].childNodes[0].innerText);
        for (var j = 0; j < n2; j++) rightArray[j] = parseInt(blocks[middle + 1 + j].childNodes[0].innerText);

        var i = 0, j = 0;
        var k = left;

        while (i < n1 && j < n2) {
            if (leftArray[i] <= rightArray[j]) {
                blocks[k].style.height = `${leftArray[i] * 3}px`;
                blocks[k].childNodes[0].innerText = leftArray[i];
                i++;
            } else {
                blocks[k].style.height = `${rightArray[j] * 3}px`;
                blocks[k].childNodes[0].innerText = rightArray[j];
                j++;
            }
            blocks[k].style.backgroundColor = "darkblue";
            k++;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }

        while (i < n1) {
            blocks[k].style.height = `${leftArray[i] * 3}px`;
            blocks[k].childNodes[0].innerText = leftArray[i];
            blocks[k].style.backgroundColor = "darkblue";
            i++;
            k++;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }

        while (j < n2) {
            blocks[k].style.height = `${rightArray[j] * 3}px`;
            blocks[k].childNodes[0].innerText = rightArray[j];
            blocks[k].style.backgroundColor = "darkblue";
            j++;
            k++;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }

        await new Promise((resolve) => setTimeout(resolve, delay));

        for (var p = left; p <= right; p++) {
            blocks[p].style.backgroundColor = " rgb(49, 226, 13)";
        }
    }

    async function mergeSort(left, right, delay = 700) {
        if (left >= right) return;
        var middle = left + Math.floor((right - left) / 2);
        await mergeSort(left, middle);
        await mergeSort(middle + 1, right);
        await merge(left, middle, right, delay);
    }

    generateArray();
    mergeSort(0, 19);
}

function restart() {
    window.location.reload();
}