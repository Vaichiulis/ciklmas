"use-script";

//masyvo pildymas mygtuku.

let ivedamas = 0;
let masyvas = [];

document.querySelector("#ivesti").addEventListener("click", function() {
    

    ivedamas = parseInt(document.querySelector("#ivedamas").value);

    masyvas.push(ivedamas);

    console.log(masyvas);

});

//priskyrimas skirtingiems masyvams.

let lyginiuMasyvas = [];
let nelyginiuMasyvas = [];
let dalinasiIs5Masyvas = [];

for(let i = 1; i<101; i++){
    if(i % 2 == 0) {lyginiuMasyvas.push (i);}
    if(i % 2 != 0) {nelyginiuMasyvas.push (i);}
    if(i % 5 == 0) {dalinasiIs5Masyvas.push (i);}   
}
console.log(lyginiuMasyvas)
console.log(nelyginiuMasyvas)
console.log(dalinasiIs5Masyvas)