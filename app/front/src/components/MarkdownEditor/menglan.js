export default `.markdown-body {
  line-height: 1.6;
  letter-spacing: .034em;
  color: rgb(63, 63, 63);
  font-size: 16px;
  word-break: all;
}

.markdown-body p {
  padding-top: 1em;
  color: rgb(74, 74, 74);
  line-height: 1.75em;
}

/* 一级标题 */
.markdown-body h1 {
  text-align: center;
  background-image: url(https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ca7715cd3fe40f69a77dadef6377dc5~tplv-k3u1fbpfcp-watermark.image);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 75px;
  line-height: 95px;
  margin-top: 38px;
  margin-bottom: 10px;
}

/* 一级标题内容 */
.markdown-body h1 {
  font-size: 20px;
  color: #409EFF;;
}

/* 一级标题修饰 请参考有实例的主题 */
.markdown-body h1:after {
}

/* 二级标题 */
.markdown-body h2 {
  display: block;
  text-align: center;
  background-image: url(https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a848cd7c5cf4fda92ba324fd9a5c3f9~tplv-k3u1fbpfcp-watermark.image);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 50px;
  margin-top: 1em;
  margin-bottom: 10px;
  height: 38px;
  line-height: 42px;
  color: #409EFF;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 63px;
  margin-top: 38px;
  font-size: 18px;
  margin-bottom: 10px;
}

/*二级标题伪元素*/
.markdown-body h2:before {
  content: '🍦 ';
}

/* 二级标题内容 */
.markdown-body h2 {
  text-align: center;
  height: 38px;
  line-height: 42px;
  color: #409EFF;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 63px;
  margin-top: 38px;
  font-size: 18px;
  margin-bottom: 10px;
}

/* 三级标题 */
.markdown-body h3:before {
  content: "📒 ";
}

.markdown-body h4 {
  margin-top: 30px;
}

/* 三级标题内容 */
.markdown-body h3 {
  margin-top: 1.2em;
  font-size: 17px;
  font-weight: bold;
  display: block;
  margin-left: 8px;
  color: #409EFF;
}

/* 三级标题修饰 请参考有实例的主题 */
.markdown-body h3:after {
}

/* 列表内容 */
.markdown-body li {
}

/* 引用
 * 左边缘颜色 border-left-color:black;
 * 背景色 background:gray;
 */
.markdown-body blockquote {
  padding: 15px 20px;
  line-height: 27px;
  background-color: #FBF9FD;
  border-left: 4px solid #409EFF;
  display: block;
}

/* 引用文字 */
.markdown-body blockquote p {
  padding: 0px;
  font-size: 15px;
  color: rgb(89, 89, 89);
}

/* 链接 */
.markdown-body a {
  color: #409EFF;
  text-decoration: none;
  border-bottom: 1px solid #1d7dfa;
}

/* 加粗 */
.markdown-body strong {
  line-height: 1.75em;
  color: rgb(74, 74, 74);
}

/* 斜体 */
.markdown-body em {
}

/* 加粗斜体 */
.markdown-body em strong {
  color: rgb(248, 57, 41);
  letter-spacing: 0.3em;
}

/* 删除线 */
.markdown-body del {
}

/* 分割线 */
.markdown-body hr {
  height: 1px;
  padding: 0;
  border: none;
  text-align: center;
  background-image: linear-gradient(to right, rgba(93, 186, 133, 0), #409EFF, rgba(93, 186, 133, 0));
}

/* 图片 */
.markdown-body img {
  border-radius: 4px;
  margin-bottom: 25px;
}

/* 图片描述文字 */
.markdown-body figcaption {
  display: block;
  font-size: 12px;
  font-family: PingFangSC-Light;
}

/* 行内代码 */
.markdown-body p code, .markdown-body li code {
  color: #409EFF;
}

/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
.markdown-body pre code {
}

/* 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
.markdown-body table tr th,
.markdown-body table tr td {
  font-size: 14px;
}

.markdown-body .footnotes {
  padding-top: 8px;
}

/* 脚注文字 */
.markdown-body .footnote-word {
  color: rgb(90, 185, 131);
}

/* 脚注上标 */
.markdown-body .footnote-ref {
  color: rgb(90, 185, 131);
}

/* 脚注超链接样式 */
.markdown-body .footnote-item em {
  color: rgb(90, 185, 131);
  font-size: 13px;
  font-style: normal;
  border-bottom-color: 1px dashed rgb(90, 185, 131);
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
.markdown-body .footnotes-sep:before {
  background-image: none;
  background-size: none;
  display: block;
  width: auto;
  height: auto;
}

/* 参考资料编号 */
.markdown-body .footnote-num {
  color: rgb(90, 185, 131);
}

/* 参考资料文字 */
.markdown-body .footnote-item p {
  color: rgb(90, 185, 131);
  font-weight: bold;
}

/* 参考资料超链接 */
.markdown-body .footnote-item a {
  color: rgb(93, 186, 133);
}

/* 参考资料解释 */
.markdown-body .footnote-item p em {
  font-size: 14px;
  font-weight: normal;
  border-bottom: 1px dashed rgb(93, 186, 133);
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
.markdown-body .block-equation svg {
}

/* 行内公式*/
.markdown-body .inline-equation svg {
}

/* 滑动图片
 */
.markdown-body .imageflow-img {
  display: inline-block;
  width: 100%;
  margin-bottom: 0;
}
`
