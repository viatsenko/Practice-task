let cells = document.querySelectorAll('#field td');
let pElem = document.getElementById('pElem');
let loader = document.getElementById('loader')
function start(cells) {
    let i = 0;
    for (let e of cells) {
        e.addEventListener('click', function step() {
           if (i % 2 == 0){
               this.textContent = 'X'
           }
           else {
               this.textContent = 'O';
           }
            this.removeEventListener('click', step);
            i++;
                if (isVictory(cells)) {
                    pElem.style.visibility = 'visible';
                    pElem.innerText = 'Win! player: ' + this.textContent;
                    loader.style.visibility = 'visible';
                    for (let e of cells) {
                        e.textContent = '';
                        e.style.visibility = 'hidden';
                        setTimeout(function(){
                            location.reload();
                        }, 2000);
                    }
                } else if (i === 8) {
                    pElem.style.visibility = 'visible';
                    pElem.innerText = 'Game over';
                    loader.style.visibility = 'visible';
                    for (let e of cells) {
                        e.textContent = '';
                        e.style.visibility = 'hidden';
                        setTimeout(function(){
                            location.reload();
                        }, 2000);
                    }
            }
        });
    }
}
start(cells);

function isVictory(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let comb of combs) {
        if (
            cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != ''
        ) {
            return true;
        }
    }
    return false;
}