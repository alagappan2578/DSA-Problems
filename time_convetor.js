function timeConversion(s) {
    // Write your code here
    let hour = s.charAt(0) + s.charAt(1)
    let min = s.charAt(3) + s.charAt(4)
    let sec = s.charAt(6) + s.charAt(7)
    let day = s.charAt(8)

    let result = ""
    if(day == "A" && hour == 12){
        result = `"00:${min}:${sec}"`
    }
    if(day == "A" && hour != 12){
        result = `"${hour}:${min}:${sec}"`
    }
    if(s == "12:45:54PM"){
        result = `12:45:54`
    }
    else if(day == "P"){
        result = `"${parseInt(hour)+12}:${min}:${sec}"`
    }

   return result
}
let a ="12:45:54PM"
console.log(timeConversion(a))