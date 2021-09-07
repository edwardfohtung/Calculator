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

    let two = document.querySelector("#two")
    two.addEventListener("click", function(event) {
      self.addTwo()
    })

    let three = document.querySelector("#three")
    three.addEventListener("click", function(event) {
      self.addThree()
    })
    
    let four = document.querySelector("#four")
    four.addEventListener("click", function(event) {
      self.addFour()
    })

    let five = document.querySelector("#five")
    five.addEventListener("click", function(event) {
      self.addFive()
    })

    let six = document.querySelector("#six")
    six.addEventListener("click", function(event) {
      self.addSix()
    })

    let seven = document.querySelector("#seven")
    seven.addEventListener("click", function(event) {
      self.addSeven()
    })

    let eight = document.querySelector("#eight")
    eight.addEventListener("click", function(event) {
      self.addEight()
    })

    let nine = document.querySelector("#nine")
    nine.addEventListener("click", function(event) {
      self.addNine()
    })

    let zero = document.querySelector("#zero")
    zero.addEventListener("click", function(event) {
      self.addZero()
    })

    let dot = document.querySelector("#dot")
    dot.addEventListener("click", function(event) {
      self.addDot()
    })

    let percentage = document.querySelector("#percentage")
    percentage.addEventListener("click", function(event) {
      self.addPercentage()
    })

    let bracket = document.querySelector("#bracket")
    bracket.addEventListener("click", function(event) {
      self.addBracket()
    })

    let brackets = document.querySelector("#brackets")
    brackets.addEventListener("click", function(event) {
      self.addBrackets()
    })
    let sin = document.querySelector("#sin")
      sin.addEventListener("click", function(event) {
      self.addSin()
    })
    let cos = document.querySelector("#cos")
      cos.addEventListener("click", function(event) {
      self.addCos()
    })
    let tan = document.querySelector("#tan")
      tan.addEventListener("click", function(event) {
      self.addTan()
    })
    let log = document.querySelector("#log")
      log.addEventListener("click", function(event) {
      self.addLog()
    })
  },
  evaluate() {
    let userInput = document.querySelector("#user-input")
    let expression = document.querySelector("#expression")
    console.log(userInput.value, "user input", expression)
    expression.textContent = userInput.value  
    userInput.value = eval(userInput.value.replaceAll("sin", "Math.sin").replaceAll("cos", "Math.cos").replaceAll("tan", "Math.tan").replaceAll("log", "Math.log"))
  },
  clearInput() {
    let userInput = this.getUserInput()
    userInput.value = ''
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
    {
      userInput.value =userInput.value + "1"
    }
  },

  addTwo() {
    let userInput = this.getUserInput()
    {
      userInput.value = userInput.value + "2"
    }
  },
  addThree() {
    let userInput = this.getUserInput()
    {
      userInput.value = userInput.value + "3"
    }
  },
  addFour() {
    let userInput = this.getUserInput()
    {
      userInput.value = userInput.value + "4"
    }
  },
  addFive() {
    let userInput = this.getUserInput()
    {
      userInput.value = userInput.value + "5"
    }
  },
  addSix() {
    let userInput = this.getUserInput()
    {
      userInput.value = userInput.value + "6"
    }
  },
  addSeven() {
    let userInput = this.getUserInput()
    {
      userInput.value = userInput.value + "7"
    }
  },
  addEight() {
    let userInput = this.getUserInput()
    {
      userInput.value = userInput.value + "8"
    }
  },
  addNine() {
    let userInput = this.getUserInput()
    {
      userInput.value = userInput.value + "9"
    }
  },
  addZero() {
    let userInput = this.getUserInput()
    {
      userInput.value = userInput.value + "0"
    }
  },
  addDot() {
    let userInput = this.getUserInput()
    {
      userInput.value = userInput.value + "."
    }
  },
  addPercentage() {
    let userInput = this.getUserInput()
    if(userInput.value.slice(-1) !== "%") {
      function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
     } 
      userInput.value = userInput.value + "%"
    }
  },
  addBracket() {
    let userInput = this.getUserInput()
    if(userInput.value.slice(-1) !== "(") {
      userInput.value = userInput.value + "("
    }
  },
  addBrackets() {
    this.inputAdder(")")
  },
  addSin() {
    console.log("sin")
    this.inputAdder("sin")
  },
  addCos() {
    console.log("cos")
    this.inputAdder("cos")
  },
  addTan(){
    console.log("tan")
    this.inputAdder("tan")
  },
  addLog() {
    console.log("log")
    this.inputAdder("log")
  },
  inputAdder(input) {
    let userInput = this.getUserInput()
    if(userInput.value.slice(-1) !== input) {
      userInput.value = userInput.value + input
      console.log(userInput.value, this.getUserInput())
    }
  }

}

calculator.start()

