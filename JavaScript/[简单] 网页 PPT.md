# 网页 PPT

> 题目: [网页 PPT](https://www.lanqiao.cn/problems/2418/learning/?page=1&first_category_id=2&sort=students_count&second_category_id=11&tags=2022)
>
> 难度: 简单
>
> 考点: 
>
> - HTML 元素的隐藏和显示
> - 动态修改 HTML 元素的类
> - 动态修改 HTML 元素的文本
> - (可选) JQuery 的使用 / **原生 JavaScript 的使用**
>
> 备注: 
>
> - 使用 **JQuery** 和使用 **原生** 差别不大, 使用 JQuery 会稍微方便一些, 但没特殊要求我更喜欢用原生 .



## 题解 (原生 JavaScript 的使用)

```js
function switchPage() {
  // TODO: 请补充该函数，实现根据activeIndex切换页面的功能，
  // 并且在到达最后一页或第一页时给相应的按钮添加disable类

  // 改变最开始和结束按钮的显示
  if (activeIndex === 0) {
    document.querySelector('.btn.left').classList.add('disable'); 
  }
  else if (activeIndex === sectionsCount-1) {
    document.querySelector('.btn.right').classList.add('disable'); 
  }
  else {
    document.querySelector('.btn.left').classList.remove('disable'); 
    document.querySelector('.btn.right').classList.remove('disable'); 
  }

  // 改变页面显示
  document.querySelectorAll('.container > section').forEach((section, index) => {
    if (index === activeIndex) {
      section.style.display = '';
    } 
    else {
      section.style.display = 'none';
    }
  });

  // 改变页码
  document.querySelector('.controls > .page').textContent = `${activeIndex+1} / 5`
}
```

