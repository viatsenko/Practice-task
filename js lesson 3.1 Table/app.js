let table = document.getElementById('tbody')
let row = table.insertRow(0)
let cellName = row.insertCell(0)
let cellPosition = row.insertCell(1)
let cellOffice = row.insertCell(2)
let cellSalary = row.insertCell(3)
cellName.innerHTML = 'Tiger Nixon';
cellPosition.innerHTML = 'System Architect';
cellOffice.innerHTML = 'Edinburgh';
cellSalary.innerHTML = '$3,120';

row = table.insertRow(1)
cellName = row.insertCell(0)
cellPosition = row.insertCell(1)
cellOffice = row.insertCell(2)
cellSalary = row.insertCell(3)
cellName.innerHTML = 'Garrett Winters';
cellPosition.innerHTML = 'Director';
cellOffice.innerHTML = 'Edinburgh';
cellSalary.innerHTML = '$5,300';

row = table.insertRow(2)
cellName = row.insertCell(0)
cellPosition = row.insertCell(1)
cellOffice = row.insertCell(2)
cellSalary = row.insertCell(3)
cellName.innerHTML = 'Ashton Cox';
cellPosition.innerHTML = 'Junior Technical Author';
cellOffice.innerHTML = 'San Francisco';
cellSalary.innerHTML = '$7,700';

let selectedRow;

let rows = document.querySelectorAll('#tbody tr');
for (let r of rows) {
        r.addEventListener('click', function () {
                selectedRow = r;
                for (let e of rows) {
                        e.classList.remove('selected')
                }
                r.classList.add('selected')
        })
}

let nameInput = document.getElementById('nameInput');
let positionInput = document.getElementById('positionInput');
let officePosition = document.getElementById('officePosition');
let salaryInput = document.getElementById('salaryInput');
let buttonAddRow = document.getElementById('AddRowButton');
let deleteButtonRow = document.getElementById('DeleteButton');
let editButtonRow = document.getElementById('EditButton');
let addButton = document.getElementById('addButton');
let canselButton = document.getElementById('canselButton')
buttonAddRow.addEventListener('click', function (){
        if (nameInput.value !== '' && positionInput.value !== '' &&
        officePosition.value !== '' && salaryInput.value !== ''){
                row = table.insertRow(0)
                cellName = row.insertCell(0)
                cellPosition = row.insertCell(1)
                cellOffice = row.insertCell(2)
                cellSalary = row.insertCell(3)
                cellName.innerHTML = nameInput.value;
                cellPosition.innerHTML = positionInput.value;
                cellOffice.innerHTML = officePosition.value;
                cellSalary.innerHTML = salaryInput.value;
                nameInput.value = '';
                positionInput.value = '';
                officePosition.value = '';
                salaryInput.value = '';
                row.addEventListener('click', function () {
                        selectedRow = row;
                        rows = document.querySelectorAll('#tbody tr');
                        for (let e of rows) {
                                e.classList.remove('selected')
                        }
                        row.classList.add('selected')
                })
        }
});
deleteButtonRow.addEventListener('click', function () {
        selectedRow.remove();
})
editButtonRow.addEventListener('click', function () {
        let tableCells = selectedRow.querySelectorAll('td');
        nameInput.value = tableCells[0].innerHTML;
        positionInput.value = tableCells[1].innerHTML;
        officePosition.value = tableCells[2].innerHTML;
        salaryInput.value = tableCells[3].innerHTML;
        addButton.style.display = 'inline-block';
        canselButton.style.display = 'inline-block';
});
addButton.addEventListener('click', function () {
        let tableCells = selectedRow.querySelectorAll('td');
        tableCells[0].innerHTML = nameInput.value;
        tableCells[1].innerHTML = positionInput.value;
        tableCells[2].innerHTML = officePosition.value;
        tableCells[3].innerHTML = salaryInput.value;
        nameInput.value = '';
        positionInput.value = '';
        officePosition.value = '';
        salaryInput.value = '';
        addButton.style.display = 'none';
        canselButton.style.display = 'none';
})
canselButton.addEventListener('click', function (){
        addButton.style.display = 'none';
        canselButton.style.display = 'none';
})