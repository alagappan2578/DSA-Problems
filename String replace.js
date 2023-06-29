let sentence = "I am a good boy good" ;

let search = "good";

let replace = "Praveen" ;

let find_index = [] ;

let new_sent = "" ;

let value = -1

for(let i=0; i<sentence.length-search.length+1; i++){
    let check = ""
    for(let j=i; j<search.length+i; j++){
        check += sentence[j];

        if(search == check){
            find_index.push(j-search.length+1)
        }
    }
    
}

for(let i=0; i<sentence.length; i++){

    if(i == find_index.find(e => e == i)){
        new_sent += replace ;
        value = i
    }

    else if(value != -1 && i > value && i < (value+(search.length))){
        new_sent += "" ;
    }

    else{
    new_sent += sentence[i];
    }
}

console.log(find_index)

console.log(new_sent)