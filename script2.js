//2. For the above JSON, iterate over all for loops:

//Using for loop:

Obj_Keys=Object.keys(myJSON)
Object_Entries=Object.entries(myJSON)
for(var i=0;i<Obj_Keys.length;i++){
 console.log(Obj_Keys[i]," : ",Object_Entries[i])
}

//Using for-of loop:

Obj_Keys=Object.keys(myJSON)
Object_Entries=Object.entries(myJSON)
for (const [key, value] of Object.entries(myJSON)){
 console.log(`${key} : ${value}`);
}

//Using foreach loop:

Object.entries(myJSON).forEach(([key, value]) => {
 console.log(`${key} : ${value}`)
})

//Using for in loop:

for (const key in myJSON) {
    console.log(`${key} : ${myJSON[key]}`)
}   