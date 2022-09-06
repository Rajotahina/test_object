//  var arrayOne =[2,8,9,10,13,14];
//    for (let i = 0; i < arrayOne.length; i++) {
//         arrayOne[i]= arrayOne[i]*2;
//     }
//     console.log(arrayOne);
   
 var array2 = ["a","b","8",9,10,7,"b"];
 var array3 = [];
 for (let i = 0; i < array2.length; i++) {
    if (typeof(array2[i]) === 'number') { 
        array3.push(array2[i]);
    }
 }
 console.log(array3);
/*person = [{
      nom :"rakoto",
      prenom :"rasoa"  
},
    {
        nom : "rabe",
        prenom :"loha",
    },
    {
        nom : "bema",
        prenom :"beloha",   
    },
];
for (let i = 0; i < person.length; i++) {
   person[i].nomComplet = person[i].nom +''+ person[i].prenom ;
    
}
console.log(person);*/