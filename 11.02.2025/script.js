//string - virkne
//beleo - true or false
//
let vards = "universitate" // datu tips string - burtu virkne
let lielieBurti = vards.toUpperCase(); // burtus parvers par lielajiem
console.log(lielieBurti);

let mazieBurti = vards.toLowerCase(); // burtus parvers par mazajiem
console.log(mazieBurti);
//darbosies tikai ar string

console.log(vards[3]); //programesana sak skaitit no nulles 0 
//cik dalas for? - 3 dalas
let citsVards = "retorisks"
for(let i=0; i<citsVards.length; i++)//atlasits 0 burts, parbaudit katrs burts līdz
      i=3;
      console.log("Burts" + i + "ir" + citsVards[i]);