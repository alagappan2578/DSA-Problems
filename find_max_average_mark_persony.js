
// JSON JavaScript Object Notation

// Count the number of students whose total average is more than 70.

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
	 age:21,
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


   let value = 70;
   let names = ""

   for(i=0;i<array_student_obj.length;i++){
	let mark = array_student_obj[i]["marks"];
	let average_mark = (mark["chemistry"]+ mark["maths"]+mark["physics"])/3
    let check = average_mark;
    if(check>value){
      names += array_student_obj[i]["name"]+",";
    }
   }
console.log(names)

