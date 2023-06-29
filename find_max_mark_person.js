
// JSON JavaScript Object Notation

// 2. Find the students whose physics is more than 80

let array_student_obj 
 = [{name:"Nanda",
	 age:19,
	 salary: 10000, 
	 marks:{
			maths:80, 
			physics: 78, 
			chemistry:90
		}
	 },
	 {name:"Deepika",
	 age:18,
	 salary: 10000, 
	 marks:{
			maths:95, 
			physics: 95, 
			chemistry:89
		}
	 },
	 {name:"Boopalan",
	 age:2,
	 salary: 10000, 
	 marks:{
			maths:76, 
			physics: 81, 
			chemistry:76
		}
	 },{name:"Karthi",
	 age:22,
	 salary: 10000, 
	 marks:{
			maths:67, 
			physics: 51, 
			chemistry:39
		}
	 }];

   let value = 80;
   let names = ""

   for(i=0;i<array_student_obj.length;i++){
    let check = array_student_obj[i]["marks"]["physics"];
    if(check>value){
      names += array_student_obj[i]["name"]+",";
    }
   }
console.log(names)