$(document).ready(function () {
    $('#pElem').hide();
    let cells = $('.table td')
    function start(cells) {
        let i = 0;
        for (const e of cells) {
            $(e).click(function step() {
                if (i % 2 == 0){
                    $(this).append('X').addClass('XOcell');
                    $(this).unbind('click', step)
                }
                else {
                    $(this).append('O').addClass('XOcell');
                    $(this).unbind('click', step)
                }
                $(this).unbind('click', start)
                i++;
                if (isVictory(cells)){
                    $('#pElem').show();
                    $('#pElem').html(`'Win! player: ${this.textContent}'`);
                        $('.table td').hide();
                        setTimeout(function () {
                            location.reload();
                        },2000)
                }
                else if (i === 8){
                    $('#pElem').show();
                    $('#pElem').html('Game over');
                        $('.table td').hide();
                        setTimeout(function () {
                            location.reload();
                        },2000)
                }
            })
        }
    }
    start(cells)

    function isVictory(cells) {
        let combs = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for (let e of combs){
            if (
                cells[e[0]].textContent == cells[e[1]].textContent &&
                cells[e[1]].textContent == cells[e[2]].textContent &&
                cells[e[0]].textContent != ''
            ){
                return true;
            }
        }
        return false;
    }
})
