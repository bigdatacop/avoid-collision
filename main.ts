let sonar = 0
basic.showString(control.deviceName())
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline) && sonar > 8) {
        cuteBot.forward()
        cuteBot.motors(40, 40)
        basic.showArrow(ArrowNames.South)
    }
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (!(cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) || sonar <= 8) {
        cuteBot.motors(randint(-20, -40), randint(-20, -40))
        basic.showArrow(ArrowNames.North)
    }
})
