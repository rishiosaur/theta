import NormalExpression from '../EETypes/NormalExpression'
import Term from '../symbols/term'
import Operator from '../symbols/operator'

/**
 * The base class for an Expression.
 */
class Expression implements NormalExpression {
  terms: Term[]
  operator: Operator
  constructor(terms: Term[], operator: Operator) {
    this.terms = terms
    this.operator = operator
  }

  /**
   * A command to add two expressions together. Supports function chaining.
   * @param expression The expression you wish to use the `add` command with.
   */
  add(expression: Expression): Expression {
    console.log(expression)
    return this
  }

  /**
   * A command to multiply two expressions together. Supports function chaining.
   * @param expression The expression you wish to use the `multiply` command with.
   */
  multiply(expression: Expression): Expression {
    return this
  }

  /**
   * A command to add two expressions together. Supports function chaining.
   * @param expression The expression you wish to use the `divide` command with.
   */
  divide(expression: Expression): Expression {
    return this
  }

  /**
   * A command to subtract one expression from another. Supports function chaining.
   * @param expression The expression you wish to use the `subtract` command with.
   */
  subtract(expression: Expression): Expression {
    return this
  }
}

export default Expression
