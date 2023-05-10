const array = [
    {
        name:'salil',
        age:25,
        place:"Goa"
    },
    {
        name:'rex',
        age:12,
        place:"Uyo"
    },
    {
        name:'favour',
        age:3,
        place:"Trax"
    },
    {
        name:'colombanus',
        age:19,
        place:"Goa"
    },
    {
        name:'daniel',
        age:5,
        place:"Deriva"
    },
];

array.map((item)=>{
    if (item.age < 18){
       return item.name 
    }
})