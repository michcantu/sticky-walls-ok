input.onPinPressed(TouchPin.P0, function () {
    dice = randint(1, 1)
    basic.showNumber(dice)
    x = 4
    y = 4
    if (dice == 1) {
        basic.showLeds(`
            . # . . #
            . . . . #
            . . # . .
            # . # . #
            # . . . .
            `)
        led.plot(x, y)
    } else if (dice == 2) {
        basic.showLeds(`
            . . . # #
            # . . . .
            # . # # .
            . . . . .
            . # . . .
            `)
        led.plot(x, y)
    } else if (dice == 3) {
        basic.showLeds(`
            . . . # .
            . . . # .
            # # . . .
            . . . . #
            . # # . .
            `)
        led.plot(x, y)
    } else if (dice == 4) {
        basic.showLeds(`
            . . # . #
            . . # . .
            # . . # .
            # . . . .
            . . # # .
            `)
        led.plot(x, y)
    } else if (dice == 5) {
        basic.showLeds(`
            . . . # .
            # # . # .
            . . . . .
            . # . # #
            # . . . .
            `)
        led.plot(x, y)
    } else if (dice == 6) {
        basic.showLeds(`
            . . # . #
            . # . . .
            . . . # #
            # . . . .
            # . # . .
            `)
        led.plot(x, y)
    }
})
function LOSE1 () {
    if (x == 1 && y == 0) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 4 && y == 0) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 4 && y == 1) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . . . . .
                . . # # .
                . # # . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 2 && y == 2) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 2 && y == 3) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 0 && y == 3) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 0 && y == 4) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 4 && y == 3) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 0 && y == 0) {
        music.playMelody("D G E A C5 F C B ", 387)
        basic.clearScreen()
        basic.showString("CONGRATULATIONS!")
        for (let index = 0; index < 2; index++) {
            music.playMelody("D G E A C5 F C B ", 387)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                # . # . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                . . . . .
                `)
        }
        music.playMelody("D G E A C5 F C B ", 387)
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . . #
                . . # # .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . # .
                . # # . .
                `)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    basic.pause(100)
    x += -1
    led.toggle(x, y)
    LOSE1()
})
input.onPinPressed(TouchPin.P2, function () {
    led.unplot(x, y)
    basic.pause(100)
    y += 1
    led.plot(x, y)
    LOSE1()
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    basic.pause(100)
    x += 1
    led.plot(x, y)
    LOSE1()
})
input.onPinPressed(TouchPin.P1, function () {
    led.unplot(x, y)
    basic.pause(100)
    y += -1
    led.plot(x, y)
    LOSE1()
})
let dice = 0
let y = 0
let x = 0
x = 4
y = 4
if (input.lightLevel() >= 128) {
    basic.showString("Good Morning")
} else {
    basic.showString("Good Afternoon")
}
for (let count = 0; count <= 3; count++) {
    basic.showNumber(count)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.clearScreen()
}
basic.showString("START!")
music.playTone(523, music.beat(BeatFraction.Double))
