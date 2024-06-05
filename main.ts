GHBit.onKey(GHBit.enButton.B3, function () {
    radio.sendNumber(8)
})
GHBit.onKey(GHBit.enButton.B1, function () {
    radio.sendNumber(6)
})
GHBit.onKey(GHBit.enButton.B4, function () {
    radio.sendNumber(9)
})
GHBit.onKey(GHBit.enButton.B2, function () {
    radio.sendNumber(7)
})
let list: number[] = []
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
radio.setTransmitPower(7)
for (let index = 0; index <= 4; index++) {
    GHBit.RGB_Program().setPixelColor(index, list[randint(0, 7)])
    GHBit.RGB_Program().show()
    basic.pause(100)
    GHBit.RGB_Program_Close()
    basic.pause(100)
    led.enable(false)
    list = [
    neopixel.colors(NeoPixelColors.Red),
    neopixel.colors(NeoPixelColors.Orange),
    neopixel.colors(NeoPixelColors.Yellow),
    neopixel.colors(NeoPixelColors.Green),
    neopixel.colors(NeoPixelColors.Blue),
    neopixel.colors(NeoPixelColors.Indigo),
    neopixel.colors(NeoPixelColors.Violet),
    neopixel.colors(NeoPixelColors.Purple),
    neopixel.colors(NeoPixelColors.White)
    ]
}
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendNumber(1)
    } else if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendNumber(2)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendNumber(3)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendNumber(4)
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendNumber(9)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(10)
    } else if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendNumber(5)
    } else if (GHBit.Button(GHBit.enButton.B2, GHBit.enButtonState.Press)) {
        radio.sendNumber(6)
    } else if (GHBit.Button(GHBit.enButton.B3, GHBit.enButtonState.Press)) {
        radio.sendNumber(7)
    } else if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
        radio.sendNumber(8)
    } else {
        radio.sendNumber(0)
    }
})
