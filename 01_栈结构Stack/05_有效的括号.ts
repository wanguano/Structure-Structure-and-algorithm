import ArrayStack from "./02_stack-array";
/** 
 * 题目：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
    有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    每个右括号都有一个对应的相同类型的左括号。
*/
// 核心点：一一对应，遇到右括号字符就检查上一个字符是否匹配
function isValid(s: string): boolean {
  let stack = new ArrayStack<string>
  for (let index = 0; index < s.length; index++) {
    if(s[index] === '(')
      stack.push(')')
    else if(s[index] === '{')
      stack.push('}')
    else if(s[index] === '[')
      stack.push(']')
    else{
      if(s[index] !== stack.pop())
        return false
    }
  }
  return stack.isEmpty()
};

// console.log(isValid('()[]{}'))
// console.log(isValid('({[]})'))