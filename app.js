const calculator = {
  start() {
    let calculate = document.querySelector("#calculate")
    let self = this;
    calculate.addEventListener("click", function(event) {
      self.evaluate()
    })

    let clear = document.querySelector("#clear")
    clear.addEventListener("click", function(event) {
      self.clearInput()
    })

    let multiply = document.querySelector("#multiply")
    multiply.addEventListener("click", function(event) {
      self.addMultiply()
    })

  },
  evaluate() {
    let userInput = document.querySelector("#user-input")
    let expression = document.querySelector("#expression")
    console.log(userInput.value, "user input", expression)
    expression.textContent = userInput.value
    userInput.value = eval(userInput.value)
  },
  clearInput() {
    let userInput = this.getUserInput()
    userInput.value = '0'
  },
  getUserInput() {
    return document.querySelector("#user-input")
  },
  addMultiply() {
    let userInput = this.getUserInput()
    if(userInput.value .slice(-1) !== "*") {
      userInput.value = userInput.value + "*"
    }
  }
}

calculator.start()

