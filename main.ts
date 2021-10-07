radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P2, 16, NeoPixelMode.RGB)
strip.setBrightness(255)
strip.clear()
let 작동시간 = 1000 * 10
let 상태변수 = 0
let 빛세기 = 0
basic.forever(function () {
    빛세기 = pins.analogReadPin(AnalogPin.P1)
    serial.writeValue("x", 빛세기)
    상태변수 = pins.digitalReadPin(DigitalPin.P4)
    if (상태변수 == 1) {
        radio.sendNumber(1)
        if (빛세기 < 100) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(작동시간)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            상태변수 = 0
        } else {
            basic.showNumber(상태변수)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(작동시간)
            상태변수 = 0
        }
    }
    basic.clearScreen()
})
