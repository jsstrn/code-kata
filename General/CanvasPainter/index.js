import Canvas from './canvas'

const canvas = new Canvas(3, 5)

canvas.print()

canvas.drawLine(0, 1, 2, 1, '⬛️')
canvas.drawLine(2, 2, 2, 2, '⬛️')
canvas.print()

canvas.fillCanvas('⬜️')
canvas.drawLine(2, 1, 2, 2, '⬛️')
canvas.print()
