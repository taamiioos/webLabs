const table = document.getElementById('table');

function addInTable(data) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = data;
    table.appendChild(newRow);

    const cookieData = getCookie('tableData');
    let dataArray = [];
    if (cookieData) {
        dataArray = JSON.parse(cookieData);
    }
    const index = dataArray.indexOf(data);
    if (index !== -1) {
        dataArray[index] = data;
    } else {
        dataArray.push(data);
    }
    setCookie('tableData', JSON.stringify(dataArray), 30);
}

function loadData() {
    const cookieData = getCookie('tableData');
    if (cookieData) {
        const dataArray = JSON.parse(cookieData);
        for (const data of dataArray) {
            addInTable(data);
        }
    }
}

window.onload = function () {
    loadData();
};

function reset() {
    const table = document.getElementById('table');
    const rows = table.getElementsByTagName('tr');

    for (let i = rows.length - 1; i > 0; i--) {
        table.removeChild(rows[i]);
    }
    setCookie('tableData', '', -1);
}
