let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addProperty(object, property, value) {
  object[property] = value;
  return object;
}

function getKeys(object) {
  return Object.keys(object)
}

function lengthOfObject(object) {
  return Object.keys(object).length
}
function listObject(object) {
  return Object.values(object)
}

let joinedObject = {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
}

function totalEstudantes(object) {
  let qtdEstudantes = {}
  for (let key in object){
    if (qtdEstudantes[object[key].materia] === undefined){
      qtdEstudantes[object[key].materia] = object[key].numeroEstudantes;
    }else {
      qtdEstudantes[object[key].materia] += object[key].numeroEstudantes;
    }
  }

  return qtdEstudantes;
}

function getValueByNumber(object, index) {
  let keys = Object.keys(object);

  return object[keys[index]]
} 

function verifyPair(object, objectKey, objectValue) {
  let entriesInfo = Object.entries(object);
  let existe = false;

  for (let value of entriesInfo){
    if (value[0] === objectKey && value[1] === objectValue) {
      existe = true;
    }
  }
  return existe
}
// console.log(info);
console.log(verifyPair(lesson3, 'mater', 'Matemática'));