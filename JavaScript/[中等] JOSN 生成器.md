---
time: 37min
comment: 
  开始没太看懂题目, 蛮简单的一道题其实. 
---

# JOSN 生成器

> - 题目: [JOSN 生成器](https://www.lanqiao.cn/problems/2446/learning/?subject_code=4&group_code=1&match_num=13&match_flow=2&origin=cup)
>
> - 难度: 中等
> - 考点: 
> 	1. 对象/数组的值的转换
> - 备注:

## 题解

> 

```js
const repeat = (min, max) => {
  max ||= min;
  return min + Math.floor(Math.random() * (max - min + 1))
} 

const bool = () => {
  return Boolean(repeat(0,1))
}

const integer = repeat.bind(this)

const parseObj = (obj) => {
  const newObj = {};
    for (const key in obj) {
        const element = obj[key];
       
        const matcher = typeof element === 'string' && element.match(/{{(.*)}}/);

        if (
          Array.isArray(matcher) 
          && matcher[1]
          && typeof matcher[1] === 'string'
          && (matcher[1].startsWith('bool()') 
          || matcher[1].startsWith('integer('))) {
            newObj[key] = eval(matcher[1])
        }
        else {
          newObj[key] = element
        }
    }
    
    return newObj;
}

/*
 * @param {*}  左侧输入框输入的值转化成的 js 数据
 * @return {*} 根据传入的数据生成对应的 js 格式数据
 */
let generateData = (data) => {
  // TODO：待补充代码
  const log = console.log.bind(console);
  let newData = [];

  // console.log(JSON.stringify(data));

  if (typeof data === 'object' && !Array.isArray(data)) {
    return parseObj(data);
  }

  // 如果重复
  if (typeof data[0] === 'string')  {
    const repeatNumber = eval(data[0].match(/{{(.*)}}/)[1]);
    for (let index = 0; index < repeatNumber; index++) {
      newData.push(data[1])
    }
  }
  else {
    newData = [...data]
  }

  newData = newData.map((obj) => {
    return parseObj(obj)
  })

  return newData;
};
```