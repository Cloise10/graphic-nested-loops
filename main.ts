input.onButtonPressed(Button.A, function () {
    while (true) {
        while (true) {
            basic.showLeds(`
                . . . # .
                # # # # .
                . # . # .
                . # # # #
                . # . . .
                `)
            basic.showLeds(`
                . . # . .
                . # # # .
                # # . # #
                . # # # .
                . . # . .
                `)
            basic.showLeds(`
                . # . . .
                . # # # #
                . # . # .
                # # # # .
                . . . # .
                `)
            basic.showLeds(`
                # . . . #
                . # # # .
                . # . # .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . # .
                # # # # .
                . # . # .
                . # # # #
                . # . . .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
