const odds = [];

for (let i = 0; i < 6; i++) {
    let n = parseFloat(prompt('Inserisci un numero'));
    if(n % 2 === 1){
        odds.push(n);
    }
}
console.log(odds);