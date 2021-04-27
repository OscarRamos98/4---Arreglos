function create(student, students) {
    students.push(student);
    return students;
}

function read(students) {
    students.forEach(s => {
        console.log("Nombre: "+s.name);
        console.log("Numero de control: "+s.controlNumber);

    });
}

function readN(students,nc) {
    let e = students.find(student => student.controlNumber === nc);
    console.log(e);
     
}

function eraseN(nc,students) {
    let i = students.indexOf(students.find(student => student.controlNumber === nc));
    students.splice(i,1);
}

function erase(pos, students) {
    students.splice(pos,1);
    return students;
}

function updateN(nc, newelement, students) {
    let i = students.indexOf(students.find(student => student.controlNumber === nc));
    students[i]= newelement;
    return students;
}


function update(pos, newelement, students) {
    students[pos]= newelement;
    return students;
}

function cali(students,aprobados) {
    aprobados = students.find(student => student.grade >= 70);
    console.log(aprobados);
}
module.exports.create = create;
module.exports.read = read;
module.exports.readN = readN;
module.exports.erase = erase;
module.exports.eraseN = eraseN;
module.exports.update = update;
module.exports.updateN = updateN;
module.exports.cali = cali;