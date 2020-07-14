let 骰子 = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.A, function () {
    骰子 = randint(1, 6)
    radio.sendNumber(骰子)
    basic.showNumber(骰子)
})
