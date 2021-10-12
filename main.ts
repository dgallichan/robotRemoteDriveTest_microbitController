input.onButtonPressed(Button.A, function () {
    radio.sendValue("Go", 1000)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Rotate", 1000)
})
radio.setGroup(99)
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
	
})
