let data = [
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "office":     "Edinburgh",
        "salary":     "$3,120",

    },
    {
        "name":       "Garrett Winters",
        "position":   "Director",
        "office":     "Edinburgh",
        "salary":     "$5,300",
    },
    {
        'name': "Ashton Cox",
        "position": "Junior Technical Author",
        "office":  "San Francisco",
        "salary": "$7,700",
    }
];
let table;
let indexForEdit;
$('#cancelButton').click(function (){
    nameInput.value = '';
    positionInput.value = '';
    officeInput.value = '';
    salaryInput.value = '';

    $('#addButton').hide()
    $('#cancelButton').hide();
})
$('#addButton').click(function () {
    data[indexForEdit].name = nameInput.value;
    data[indexForEdit].position = positionInput.value;
    data[indexForEdit].office = officeInput.value;
    data[indexForEdit].salary = salaryInput.value;
    table.clear();
    table.rows.add(data).draw();
    indexForEdit = null;
    nameInput.value = '';
    positionInput.value = '';
    officeInput.value = '';
    salaryInput.value = '';
    $('#addButton').hide()
    $('#cancelButton').hide();
})



$('document').ready(function () {
    table = $('#example').DataTable({
        select:{
            style: 'single'
        },
        data: data,
        columns: [
            {data: 'name'},
            {data: 'position'},
            {data: 'office'},
            {data: 'salary'},

        ],
        dom: 'Bfrtip',
        select: true,
        buttons:[
            'copy',
            'excel',
            {
                extend: 'selected',
                text: 'Edit',
                action: function (e, dt){
                    var rows = dt.rows({selected: true});
                    let dataIndex = rows[0][0];
                    indexForEdit = dataIndex;
                    $('#addButton').show()
                    $('#cancelButton').show()
                    // $('#addButton').disabled = false;

                    let item = data[dataIndex];
                    let name = $('#nameInput')[0];
                    let position = $('#positionInput')[0]
                    let office = $('#officeInput')[0]
                    let salary = $('#salaryInput')[0]

                    name.value = item.name;
                    position.value = item.position;
                    office.value = item.office;
                    salary.value = item.salary;
                }
            },
            {
                extend: 'selected',
                text: 'Delete',
                action: function ( e, dt, ) {
                    var rows = dt.rows({selected: true});
                    let dataIndex = rows[0][0];
                    data.splice(dataIndex, 1);
                    dt.clear();
                    dt.rows.add(data).draw();
                }
            },
            {
                text: 'Add row',
                action: function (e, dt){

                    let name = $('#nameInput')[0];
                    let position = $('#positionInput')[0]
                    let office = $('#officeInput')[0]
                    let salary = $('#salaryInput')[0]
                    let item = {
                        'name': name.value,
                        "position": position.value,
                        "office":  office.value,
                        "salary": salary.value,
                    };
                    dt.rows.add([item]).draw();
                    name.value = '';
                    position.value = '';
                    office.value = '';
                    salary.value = '';
                }
            },
        ]
    })
})
