let kp = 0.09
let kd = 2.3
KrathokRobot.ตั้งค่าความเร็วเข้าเส้น(500)
KrathokRobot.ตั้งค่า(7)
KrathokRobot.รอการกดปุ่ม(LineRobotButton.A)
basic.showIcon(IconNames.SmallHeart)
KrathokRobot.เปรียบเทียบค่าเซ็นเซอร์()
KrathokRobot.รอการกดปุ่ม(LineRobotButton.B)
basic.showLeds(`
    # # . # #
    # # # # #
    . . # . .
    # # # # #
    # # . # #
    `)
basic.forever(function () {
	
})
