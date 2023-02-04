let distance = 0
led.enable(false)
let 사람있음 = 0
let distance2 = 200
basic.forever(function () {
    if (사람있음 == 0 && distance2 < 30) {
        music.playMelody("C5 B A G F E D C ", 120)
        사람있음 = 1
    }
    if (사람있음 == 1 && distance2 > 70) {
        사람있음 = 0
        music.playMelody("C D E F G A B C5 ", 120)
    }
})
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.pause(100)
    serial.writeValue("x", distance)
    if (distance != 0) {
        distance2 = distance
    }
})
