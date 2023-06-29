
let s = "abcdefghijklmnopqrstuvwxyzzzz"

    let check = "abcdefghijklmnopqrstuvwxyz"
    
    let my_array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
    
    let input = s.toLowerCase()

    let result = ""
    
    for(let i=0; i<input.length;i++){
        let value = input.charAt(i)
        
        for(let j=0; j<check.length;j++){
            
            let alp = check.charAt(j)
            
            if(alp == value){
                let index = my_array.indexOf(j)
                
                if(index >= 0){
                  my_array.splice(index, 1)
                }
            }
        }
    
    }
    
    if(my_array.length == 0){
            result = "pangram";
    }
    
    if(my_array.length != 0){
            result = "not pangram";
    }
    
console.log(result) 
   




