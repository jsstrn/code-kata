import readline from 'readline'
import Canvas from './canvas'

let canvas

const menu = `
  1. Create a new canvas
  2. Draw a line
  3. Draw a rectangle
  4. Fill segment of canvas
  5. Quit
  
  Please select an option: `

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: menu,
})

rl.prompt()

rl.on('line', response => {
  response = response.trim().toLowerCase()
  switch (response) {
    case '1':
    case 'c':
      rl.question('Enter number of columns and rows for the canvas: ', response => exec(createNewCanvas, response))
      break
    case '2':
    case 'l':
      rl.question('Enter start (x, y) and end (x, y) positions followed by a filler (optional)', response => exec(drawLineOnCanvas, response))
      break
    case '3':
    case 'r':
      rl.question('Enter start (x, y) and end (x, y) positions followed by a filler (optional)', response => exec(drawRectOnCanvas, response))
      break
    case '4':
    case 'b':
      rl.question('Enter position (x, y) followed by a filler', response => exec(paintSegmentOfCanvas, response))
      break
    case '5':
    case 'q':
      message('Goodbye')
      rl.close()
      break
    default:
      message('Invalid option. Program will now quit')
      rl.close()
      break
  }
})
  .on('close', () => {
  message('Have a great day!')
  process.exit(0)
})

const message = (text) => {
  console.log(`\n${text}\n\n`)
}

const exec = (action, response) => {
  action(response)
  canvas.print()
  rl.prompt()
}

const createNewCanvas = response => {
  const args = response.split(' ').map(n => Number(n))
  const cols = args[0]
  const rows = args[1]

  message(`Created a new canvas with ${cols} columns and ${rows} rows`)
  canvas = new Canvas(cols, rows)
}

const drawLineOnCanvas = response => {
  const args = response.split(' ')
  const startPositionAtX = Number(args[0])
  const startPositionAtY = Number(args[1])
  const endPositionAtX = Number(args[2])
  const endPositionAtY = Number(args[3])
  const filler = args[4]

  message(`Drew a line from ${startPositionAtX}, ${startPositionAtY} to ${endPositionAtX}, ${endPositionAtY}`)
  canvas.drawLine(startPositionAtX, startPositionAtY, endPositionAtX, endPositionAtY, filler)
}

const drawRectOnCanvas = response => {
  const args = response.split(' ')
  const startPositionAtX = Number(args[0])
  const startPositionAtY = Number(args[1])
  const endPositionAtX = Number(args[2])
  const endPositionAtY = Number(args[3])
  const filler = args[4]

  message(`Drew a rectangle from ${startPositionAtX}, ${startPositionAtY} to ${endPositionAtX}, ${endPositionAtY}`)
  canvas.drawRect(startPositionAtX, startPositionAtY, endPositionAtX, endPositionAtY, filler)
}

const paintSegmentOfCanvas = response => {
  const args = response.split(' ')
  const positionAtX = Number(args[0])
  const positionAtY = Number(args[1])
  const filler = args[2]
  const originalFiller = args[3]

  message(`Painted a segment of the canvas`)
  canvas.paintSegment(positionAtX, positionAtY, filler, originalFiller)
}
