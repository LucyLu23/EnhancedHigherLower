let maxNum = 0
while (true) {
    let enterNum = prompt('the enterNum:')
    maxNum = Math.round(parseFloat(enterNum))
    if (!isNaN(maxNum) && maxNum > 0) {
        break
    }
    alert('please enter a positive number')
}

let num = maxNum

let message2 = document.getElementById('message2')
message2.innerHTML = `Guess a number between 1 and ${num}`

let randomNum = Math.floor(Math.random() * num) + 1

let countGuess = 0
let count = []
//let count=0;
let rightNum = false
while (!rightNum) {
    const guessBtn = document.getElementById('guessBtn')
    guessBtn.addEventListener('click', youGuess)

    function youGuess() {
        // while (num != guess1){
        let inputguess = document.getElementById('enter').value
        let guess1 = Math.round(Number(inputguess))
        let message = document.getElementById('message')

        if (isNaN(guess1)) {
            message.innerHTML = 'That input is not a numbver!'
        } else if (guess1 > num || guess1 < 1) {
            message.innerHTML = 'That number is not in range, try again.'
        } else if (guess1 >= 1 && guess1 <= num) {
            count.push(guess1)
            countGuess++
            if (guess1 != randomNum) {
                const hint =
                    guess1 > randomNum ? ' a lower number' : ' a higher number'
                message.innerHTML = ` try guessing ${hint}`
            } else {

                message.innerHTML = `Congratulations! you got it right ${guess1}, and it took you ${count.length} tries and your guesses were ${count}. `
                
            }
        } else {
            return
        }
    }
    rightNum = true

    /*    (count.includes(guess1)) {
            //let num1 = Math.floor(Math.random() * num) + 1
            //let guess1 = Number(document.getElementById('enter').value)
            message.innerHTML = 'That number is here already, try again.'
                count.push(guess1)
             countGuess++
        } */
}
