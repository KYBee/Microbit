basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    basic.pause(100)
    maqueen.servoRun(maqueen.Servos.S1, 0)
    basic.pause(100)
    maqueen.servoRun(maqueen.Servos.S1, 90)
    basic.pause(100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    basic.pause(100)
})
