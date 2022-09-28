  class OperationOrderManager {
  stack = {
    dataStore: [],
    top: 0,
  };

  push(element) {
    this.stack.dataStore[this.stack.top++] = element;
  }

  pop() {
    return this.stack.dataStore[--this.stack.top];
  }

  peek() {
    return this.stack.dataStore[this.stack.top - 1];
  }

  length() {
    return this.stack.top;
  }
  changeToPrefixOrder(infix) {
    infix = infix.replace(/\s+/g, ""); // remove spaces, so infix[i]!=" "

    var ops = "-+/*^";
    var precedence = { "^": 4, "*": 3, "/": 3, "+": 2, "-": 2 };
    var associativity = {
      "^": "Right",
      "*": "Left",
      "/": "Left",
      "+": "Left",
      "-": "Left",
    };
    var token;
    var postfix = "";
    var o1, o2;

    for (var i = 0; i < infix.length; i++) {
      token = infix[i];
      if (token >= "0" && token <= "9") {
        // if token is operand (here limited to 0 <= x <= 9)
        postfix += token;
      } else if (ops.indexOf(token) != -1) {
        // if token is an operator
        o1 = token;
        o2 = this.peek();
        while (
          ops.indexOf(o2) != -1 && // while operator token, o2, on top of the stack
          // and o1 is left-associative and its precedence is less than or equal to that of o2
          ((associativity[o1] == "Left" && precedence[o1] <= precedence[o2]) ||
            // the algorithm on wikipedia says: or o1 precedence < o2 precedence, but I think it should be
            // or o1 is right-associative and its precedence is less than that of o2
            (associativity[o1] == "Right" && precedence[o1] < precedence[o2]))
        ) {
          postfix += o2; // add o2 to output queue
          this.pop(); // pop o2 of the stack
          o2 = this.peek(); // next round
        }
        this.push(o1); // push o1 onto the stack
      } else if (token == "(") {
        // if token is left parenthesis
        this.push(token); // then push it onto the stack
      } else if (token == ")") {
        // if token is right parenthesis
        while (this.peek() != "(") {
          // until token at top is (
          postfix += this.pop();
        }
        this.pop(); // pop (, but not onto the output queue
      }
    }
    postfix += this.stack.dataStore.reverse().join("");
    this.stack.dataStore = [];
    this.stack.top = 0;
    return postfix;
  }
}

module.exports = OperationOrderManager;
