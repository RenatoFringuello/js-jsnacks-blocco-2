const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];
const list = [];

let nPeople;
do {
    nPeople = parseInt(prompt('quanti sono gli invitati?'));
} while (Number.isNaN(nPeople));

//con il while potevi mettere (list.length < n) ? crea nuovo invitato : esci
for (let i = 0; i < nPeople; i++) {
    let rand = Math.floor(Math.random() * names.length);
    let name = names[rand];
    rand = Math.floor(Math.random() * lastnames.length);
    let lastname = lastnames[rand];
    list[i] = `${name} ${lastname}`;
}
console.log(list);