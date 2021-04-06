// when button A is pressed, graphics are shown using a nested while loop
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
// when button A+B is pressed, an "x" will appear horizontally then blink twice before it clears using a nested for loops
input.onButtonPressed(Button.AB, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(y, x)
            basic.pause(200)
            led.unplot(0, 1)
            led.unplot(0, 2)
            led.unplot(0, 3)
            led.unplot(1, 0)
            led.unplot(1, 2)
            led.unplot(1, 4)
            led.unplot(2, 0)
            led.unplot(2, 1)
            led.unplot(2, 3)
            led.unplot(2, 4)
            led.unplot(3, 0)
            led.unplot(3, 2)
            led.unplot(3, 4)
            led.unplot(4, 1)
            led.unplot(4, 2)
            led.unplot(4, 3)
        }
    }
    basic.pause(1000)
    led.unplot(0, 0)
    led.unplot(0, 4)
    led.unplot(1, 3)
    led.unplot(1, 1)
    led.unplot(2, 2)
    led.unplot(3, 1)
    led.unplot(3, 3)
    led.unplot(4, 0)
    led.unplot(4, 4)
    basic.pause(500)
    led.plot(0, 0)
    led.plot(0, 4)
    led.plot(1, 3)
    led.plot(1, 1)
    led.plot(2, 2)
    led.plot(3, 1)
    led.plot(3, 3)
    led.plot(4, 0)
    led.plot(4, 4)
    basic.pause(500)
    led.unplot(0, 0)
    led.unplot(0, 4)
    led.unplot(1, 3)
    led.unplot(1, 1)
    led.unplot(2, 2)
    led.unplot(3, 1)
    led.unplot(3, 3)
    led.unplot(4, 0)
    led.unplot(4, 4)
    basic.pause(500)
    led.plot(0, 0)
    led.plot(0, 4)
    led.plot(1, 3)
    led.plot(1, 1)
    led.plot(2, 2)
    led.plot(3, 1)
    led.plot(3, 3)
    led.plot(4, 0)
    led.plot(4, 4)
    basic.pause(500)
    basic.clearScreen()
})
// when button b is pressed, small to big to small diamonds are shown using a nested repeat loop
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.SmallDiamond)
            basic.showIcon(IconNames.Target)
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.Target)
            basic.showIcon(IconNames.SmallDiamond)
        }
    }
    basic.clearScreen()
})
// shake to stop or restart a program
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
// on start, shows graphics to show it's starting
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.showIcon(IconNames.Diamond)
basic.pause(100)
basic.showIcon(IconNames.Square)
basic.pause(100)
basic.showIcon(IconNames.Diamond)
basic.pause(100)
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.clearScreen()
