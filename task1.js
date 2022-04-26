let a={"2020-01-01":4,"2020-01-02":4,"2020-01-03":6,"2020-01-04":8,"2020-01-05":2,"2020-01-06":-6,"2020-01-07":2,"2020-01-08":-2}
// day:0=> to print in order
function calcDays(a){
let a2={"Mon":0,"Tue":0,"Wed":0,"Thu":0,"Fri":0,"Sat":0,"Sun":0}
let days={1:"Sun",2:"Mon",3:"Tue",4:"Wed",5:"Thu",6:"Fri",7:"Sat"}
for(let i in a){
	let day=days[new Date(i).getDay()+1]
	if(a2[day]==undefined)
	a2[day]=0
	a2[day]	+=a[i]
}
console.log(a2)
}
calcDays(a)