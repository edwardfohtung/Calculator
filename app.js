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

    let divide = document.querySelector("#divide")
    divide.addEventListener("click", function(event) {
      self.addDivide()
    })

    let subtract = document.querySelector("#subtract")
    subtract.addEventListener("click", function(event) {
      self.addSubtract()
    })

    let addition = document.querySelector("#addition")
    addition.addEventListener("click", function(event) {
      self.addAddition()
    })

    let one = document.querySelector("#one")
    one.addEventListener("click", function(event) {
      self.addOne()
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
  },
  addDivide() {
    let userInput = this.getUserInput()
    if(userInput.value .slice(-1) !== "/") {
      userInput.value = userInput.value + "/"
    }
  },
  addSubtract() {
    let userInput = this.getUserInput()
    if(userInput.value .slice(-1) !== "-") {
      userInput.value = userInput.value + "-"
    }
  },
  addAddition() {
    let userInput = this.getUserInput()
    if(userInput.value .slice(-1) !== "+") {
      userInput.value = userInput.value + "+"
    }
  },
  addOne() {
    let userInput = this.getUserInput()
    if(userInput.value .slice(-1) !== "1") {
      userInput.value = userInput.value + "1"
    }
  },

}

calculator.start()

