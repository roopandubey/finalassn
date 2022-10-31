let array1 = [
    { language: 'JavaScript' }, { language: 'JavaScript' }, { language: 'C++' }, { language: 'TypeScript' }
];
let obj={};
array1.forEach(entry=>(obj[entry.language]=(obj[entry.language]||0)+1));
let array2=[];
for(language in obj){
    array2.push({language:language,count:obj[language]});
}
console.log(array2);