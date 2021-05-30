let tekst1 = "Uwielbiam JavaScript";
let tekst2 = "Jestem świetnym programistą";

function longer(par1, par2) {
if (par1.length > par2.length) { 
    console.log(par1);
} 

else {
    console.log(par2);
}
}
console.log( longer(tekst1,tekst2) );