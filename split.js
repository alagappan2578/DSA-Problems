// let a = "hello world maruthan"

// let split1 = a.split(" ")

// console.log(split1)

// let join1 = split1.join("")

// console.log(join1)

// let split2 = join1.split("")

// console.log(split2)

// let fin_num = Array.from()

// console.log(fin_num)

// REPLACE , REMOVE , INCLUDES

function processData(input) {
    //Enter your code here
    let data = [" ", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "uvw", "xyz"]
    
    let ans = []
    
    let one = data[JSON.parse(input.charAt(1))]
    
    let two = data[JSON.parse(input.charAt(2))]
    
    for(let i=0; i<one.length; i++){
        let char_one = one.charAt(i)
        for(let j=0; j<two.length; j++){
            let char_two = two.charAt(j)
            let add = char_one+char_two
            ans.push(add)
        }
    }
    
    // console.log(ans) 
    return ans
}

console.log(processData(input))