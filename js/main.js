let tekst1 = "Uwielbiam JavaScript";
let tekst2 = "Jestem świetnym programistą";

function longer(par1, par2) {
if (par1.length > par2.length) { 
    let result = par1;
    return result;
} 

else {
    let result = par2;
    return result;
}
}
console.log( longer(tekst1,tekst2) );