var Student = [
    {
        id: 1,
        firstname: 'Aslam',
        lastname: 'Bilal',
        cnic: 5234524
    },
    {
        id: 2,
        firstname: 'Jim',
        lastname: 'Harry',
        cnic: 2323463,
    },
];


var Batch = [
    {
        name: 'MERN',
        teachername: 'Ali',
        roomnumber: 76, 
    },
    {
        name: 'Oracle',
        teachername: 'Hasan',
        roomnumber: 70
    },
];

var Assigned_by_user = [];

function mainmenu(){
    console.log("1)Create Student 2)Create Batch 3)Assign Batch 4)Show Batch Students 5)Search Student 6)Exit");
}

function hasDuplicatesNames(arr, newName){
    return arr.some((batch) => batch.name===newName);
}

function selectoption(){
    while(want_to_continue!=='n'){
        while(true){
            var option = prompt("1)Create Student 2)Create Batch 3)Assign Batch 4)Show Batch Students 5)Search Student 6)Exit. Enter your option (1/2/3/4/5/6): "); 
            option= parseInt(option);
            var id, firstname, lastname, cnic, name, roomnumber, batchnumber;
            if(option===1){
                id= prompt("Enter ID: ");
                id= parseInt(id);
                firstname= prompt("Enter firstname: ");
                lastname= prompt("Enter lastname: ");
                cnic= prompt("Enter CNIC: ");
                Student.push({
                    id: id,
                    firstname: firstname,
                    lastname: lastname,
                    cnic: cnic
                });
                break;
            }
            else if(option===2){
                while(true){
                    name= prompt("Enter name: ");
                    if(!hasDuplicatesNames(Batch, name)){
                        roomnumber= prompt("Enter roomnumber: ");
                        batchnumber= prompt("Enter batchnumber: ");
                        Batch.push({
                          name: name,
                          roomnumber: roomnumber,
                          batchnumber: batchnumber
                        });
                        break;
                    }
                    else{
                        alert("This batch name already exists. Enter again.")
                    }
                    
                }
                break;
            }
            else if(option===3){
                Student.forEach((element)=>{
                    console.log(element);
                })
                Batch.forEach((element)=>{
                    console.log(element);
                });
                console.log("Above are the students and batches.");
                console.log("Which student you want to select for a batch");
                var std = prompt("Enter student id: ");
                std= parseInt(std);
                var batch_name = prompt("You want to assign it to which batch. Enter batch name: "); 
                var student = Student.find(student => student.id===std)
                var batch = Batch.find(batch => batch.name===batch_name)
                if(student && batch){
                    Assigned_by_user.push(
                        {
                            batch: batch_name,
                            student: std 
                        }
                    );
                }
                else{
                    console.log("Invalid student ID or batch name");
                }
                break;
            }
            else if(option===4){
                console.log(Assigned_by_user);
                break;
            }
            else if(option===5){
                var search_std = prompt("Which student you want to search. Enter first name= ");
                var res;
                Student.forEach((element, index) =>{
                    if(search_std.toLowerCase()===Student[index].firstname.toLowerCase()){
                        res = "Student found"
                    }
                    else
                        res= "Student not found";
                });
                console.log(res);
                break;
            }
            else if(option===6){
                break;
            }
            else
                alert("Wrong option entered. Enter again.")
        }
        var want_to_continue= prompt("Do you want to continue (y/n): ");

    }
    
    
        

}

mainmenu();
selectoption();