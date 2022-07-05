"use-script";


//1. isvedami visi lyginiai skaiciai.

for(let i = 1; i<101; i++){
    if(i % 2 == 0) {console.log(i);}    
}
//isvedami visi nelyginiai skaiciai.

for(let i = 1; i<101; i++){
    if(i % 2 != 0) {console.log(i);}    
}
//isvedami visi kurie dalijasi is 5.

for(let i = 1; i<101; i++){
    if(i % 5 == 0) {console.log(i);}    
}

//skaiciuoja kiek yra lyginiu skaiciu.

let lyginiaiSkaiciai = 0;
for(let i = 1; i<101; i++){
    if(i % 2 == 0) {lyginiaiSkaiciai = lyginiaiSkaiciai + 1;}    
}
console.log (lyginiaiSkaiciai)

// sakiciuoja kiek yra besidalinanciu is 3.

let dalinasiIs3 = 0;
for(let i = 1; i<101; i++){
    if(i % 3 == 0) {dalinasiIs3 = dalinasiIs3 + 1;}    
}
console.log (dalinasiIs3)

//mamos saldainiai. 
//sprendimas:11-1-(1+1)-(2+1)-(3+1)... kol 11<0.

let saldainiai = 11;
let saldainiuDienos = 0;
let dienosKiekis =0;

while(saldainiai > -1){
    dienosKiekis++; saldainiai = saldainiai - dienosKiekis; saldainiuDienos++;
}       
console.log (saldainiuDienos)

