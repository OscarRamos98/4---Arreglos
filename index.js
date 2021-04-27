let model = require('./student')

var students = [];
var aprobados = [];

let student = {
    name: 'Oscar Enrique Jaime Ramos',
    controlNumber: "16400937",
    email: "osenjaimera@ittepic.edu.mx",
    grade: 90
};

let student2 = {
    name: 'Oscar Enrique Jaime Ramos',
    controlNumber: "16400937",
    email: "osenjaimera@ittepic.edu.mx",
    grade: 90
};


students = model.create(student,students);
students = model.create(student2,students);
console.log("------ depsues de insertar------")
//students = model.create(student, students);

model.read(students);
students = model.erase(0, students);
console.log("------ depsues de borrar------")
model.read(students);

student = {
    name: 'Oscar Ramos',
    controlNumber: "16400937",
    email: "osenjaimera@ittepic.edu.mx",
    grade: 100
};

students = model.create(student,students);

console.log("------ despues de la segunda inserccion------")
model.read(students);


students = model.update(0,{name:"Otro alumno", controlNumber: "123456789",email:"correo", grade:70}, students);

console.log("------ depsues de la actualizacion------")
model.read(students);


console.log("------Consulta por numero de control------")
model.readN(students,"16400937");
console.log("------Despues de borrar por numero de control------")
model.eraseN("16400937",students);
model.read(students);

console.log("------Actualizar por numero de control------")
students = model.updateN("123456789",{name:"Martin", controlNumber: "123456789",email:"correo", grade:60}, students);
model.read(students);
console.log("------Lista de alumnos con mas de 70------")
model.cali(students,aprobados);










