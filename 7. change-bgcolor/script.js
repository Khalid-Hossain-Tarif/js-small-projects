window.onload = () => {
  main()
}

function main() {
  const root = document.getElementById('root')
  const btn = document.getElementById('color-change-button')

  btn.addEventListener('click', function() {
    const bgColor = generateRGBColor()
    root.style.backgroundColor = bgColor
  })
}

//Generate rgb color: rgb(0, 0, 0) - rgb(255, 255, 255)
function generateRGBColor() {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)

  return `rgb(${red}, ${green}, ${blue})`
}