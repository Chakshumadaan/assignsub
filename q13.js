var stu = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]]

var avg = 0

for (var i=0; i < stu.length; i++) {
        avg += stu[i][1]
        var avg = (avg/stu.length)
}

stu.alert ('Average grade:' +(avg)/stu.length) //error at alert

if (avg < 100) {
                console.log('Grade : A') 
          } 
else if (avg < 90) {
                console.log('Grade : B')      
        } 
else if (avg < 80) {
                console.log('Grade : C') 
            }
 else if (avg < 70) {
                console.log('Grade : D')
        }
 else if (avg < 60){
                 console.log('Grade : F')     
}