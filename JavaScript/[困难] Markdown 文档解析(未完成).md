# Markdown 文档解析

> - 题目: [Markdown 文档解析](https://www.lanqiao.cn/problems/5142/learning/?page=1&first_category_id=2&sort=difficulty&second_category_id=11&tags=%E7%9C%81%E8%B5%9B)
>
> - 难度: 中等
> - 考点: 
> 	1. 
> - 备注:

## 题解

**Parser类**

- **hr**

```js
isHr() {
  return this.hr.test(this.lineText);
}
parseHr() {
  return `<hr>`
}
```

- **BlockQuote**

```js
// blockquote
BlockquoteStatus = {
  close: 0,
  open: 1,
  continue: 2,
  done: 3,
};
isBlockquote() {
  if (
    this.blockQuote.test(this.lineText) &&
    this.blockquoteLineList &&
    this.blockquoteLineList.length
  ) {
    this.blockquoteBlockStatus = this.BlockquoteStatus.continue;
  } else if (
    this.blockQuote.test(this.lineText) &&
    (this.blockquoteLineList &&
    !this.blockquoteLineList.length)
    || !this.blockquoteLineList
  ) {
    this.blockquoteBlockStatus = this.BlockquoteStatus.open;
  } else if (
    !this.blockQuote.test(this.lineText) &&
    this.blockquoteLineList &&
    this.blockquoteLineList.length
  ) {
    this.blockquoteBlockStatus = this.BlockquoteStatus.done;
  } else if (!this.blockQuote.test(this.lineText)) {
    this.blockquoteBlockStatus = this.BlockquoteStatus.close;
  }

  return this.blockquoteBlockStatus;
}
parseBlockquote() {
  if (this.isBlockquote() === this.BlockquoteStatus.open) {
    this.blockquoteLineList = [this.lineText.replace(this.blockQuote, '')];
  }
  else if (this.isBlockquote() === this.BlockquoteStatus.continue) {
    this.blockquoteLineList.push(this.lineText.replace(this.blockQuote, ''));
  }
  else if (this.isBlockquote() === this.BlockquoteStatus.done) {
    const result = `<blockquote>${this.blockquoteLineList.map((item) => `<p>${item}</p>`).join('')}</blockquote>`;
    this.blockquoteLineList = [];
    return result;
  }
}
```



**Reader类**

```js
// TODO: 请完成剩余各种语法的解析

// hr
if (this.parser.isHr()) {
  hasParsed.push(this.parser.parseHr())
  currentLine++;
  continue;
}
```

```js
// blockquote
if (this.parser.isBlockquote()) {
  const result = this.parser.parseBlockquote();
  if (result) {
    hasParsed.push(result);
  }
  else {
    currentLine++;
    continue;
  }
}
```

