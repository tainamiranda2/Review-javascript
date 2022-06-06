
//objeto 
//
let person=new Object();
person.name='thiago';
  
//
//console.log(person);

//forma literal
let person2={
  name:'Eduardo',
  
}
//console.log(person2)

let person4={
  name:'carlos',
  age:20,
  cursos:['excel', 'word', 'powerpoint']
}

//objeto de array
let person3={
  name:'thiago',
  age:29,
  status: false,
  //array
  array:['profissional', 'design', 'website'],
  //pode ter função/metodos
  work: function(){
    alert("Work");
  },
  //pode ter outros objeto
 support:person4,
  //usando this
  useThis: function(){
    return this.age;
  }
}
//manipulando objeo
//console.log(person3.name);
//console.log(person3.array);
//console.log(person3.work());
//console.log(person3.support);
//console.log(person3.support.name);
console.log(person3.support.cursos);
//outra forma de chamar objeto
console.log(person3['age']);
//usando função
console.log(person3.useThis());