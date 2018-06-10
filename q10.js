email = function (user) {
    var avg, split, parta, partb
    split = user.split("@")
    parta = split[0]
    avg = parta.length/1 //the change in value changes the hidden part
    //parta = parta.substring(0, (parta.length - avg))
    partb = split[1]
    return  "...@" + partb // we can add part a to provide some unhidden part
}
console.log(email('chakshumadaan@example.com'))