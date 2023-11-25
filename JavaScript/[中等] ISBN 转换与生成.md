# ISBN 转换与生成

> - 题目: [ISBN 转换与生成](https://www.lanqiao.cn/problems/5141/learning/?page=1&first_category_id=2&sort=difficulty&second_category_id=11&tags=%E7%9C%81%E8%B5%9B)
>
> - 难度: 中等
> - 考点: 
> 	1. 正则替换
> 	2. 字符串的数组转换
> 	3. 数组的应用(过滤, 重赋值, 遍历等)
> 	4. 奇偶数的判断
> - 备注:
> 	- 虽然使用的框架的 Vue2, 但是本质上并没有涉及到 Vue 的内容, 本质上考察的是 JavaScript 的应用. 
> 	- 这道题依我所见属于偏简单的一类题, 因为并没有考察很复杂的内容, 并且所有需要的步骤都一一在题目要求中写出来了, 如果对于数组的高阶函数不熟悉, 甚至需要会最简单的数组遍历 (`fori`) 就能够写出来.

## 题解
```js
// 将用户输入的带分隔符的 isbn 字符串转换只有纯数字和大写 X 字母的字符串
// 入参 str 为转换为包含任意字符的字符串
function getNumbers(str) {
  // TODO: 待补充代码
  // 正则替换方法
  return str.replace(/[^0-9X]/g, '');
  
  // 数组过滤方法
  // return Array.from(str).filter(item => ['0','1','2','3','4','5','6','7','8','9','X'].includes(item)).join('')
}
```

```js
// 验证当前 ISBN10 字符串是否有效
// 入参 str 为待判断的只有纯数字和大写 X 字母的字符串
function validISBN10(str) {
  // TODO: 待补充代码
  // 判断位数是否为10位数, 不为10位数直接返回false
  if (str.length !== 10) {
    return false;
  }  

  return Array.from(str).reduce((checkTotal, currentNumber, index) => {
    // 转化数字字符串为数字
    currentNumber = currentNumber === 'X' ? 10 : Number(currentNumber);
    
    // 将index变成正常计数
    index++;

    // 判断返回
    if (index === 10) {
      return checkTotal % 11 === currentNumber;
    }
    else {
      return checkTotal += index * currentNumber;
    }
  }, 0)
}
```

```js
// 将用户输入的 ISBN-10 字符串转化为 ISBN-13 字符串
// 入参 isbn 为有效的 ISBN-10 字符串
function ISBN10To13(isbn) {
  // TODO: 待补充代码
  isbn = '978' + isbn;
  // 将 isbn 转成数字数组
  const isbnList = Array.from(isbn, (numString, index) => {
    if (index === isbn.length - 1) {
      return;
    }

    return Number(numString);
  }); 

  const checkValue = isbnList.reduce((checkValue, currentNumber, index) => {
    // 将index变成正常计数
    index++;

    // 最后一位计算校验码
    if (index === isbnList.length) {
      return 10 - (checkValue % 10);
    }
    // 奇数位
    else if (index % 2 === 1) {
      return checkValue + currentNumber;
    }
    // 偶数位
    else if (index % 2 === 0) {
      return checkValue + currentNumber * 3;
    }
  }, 0);

  // push check value
  isbnList[isbnList.length - 1] = checkValue;

  return isbnList.join('');
}
```

