export default `/*默认样式，最佳实践*/

/*全局属性*/
.markdown-body {
  font-size: 16px;
  color: black;
  padding: 0 10px;
  line-height: 1.6;
  word-spacing: 0px;
  letter-spacing: 0px;
  word-break: break-word;
  word-wrap: break-word;
  text-align: left;
  font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  /* margin-top: -10px; 解决开头空隙过大问题*/
}

/*段落*/
.markdown-body p {
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  line-height: 26px;
  color: black;
}

/*标题*/
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 0px;
  font-weight: bold;
  color: black;
}
.markdown-body h1 {
  font-size: 24px;
}
.markdown-body h2 {
  font-size: 22px;
}
.markdown-body h3 {
  font-size: 20px;
}
.markdown-body h4 {
  font-size: 18px;
}
.markdown-body h5 {
  font-size: 16px;
}
.markdown-body h6 {
  font-size: 16px;
}

.markdown-body h1 .prefix,
.markdown-body h2 .prefix,
.markdown-body h3 .prefix,
.markdown-body h4 .prefix,
.markdown-body h5 .prefix,
.markdown-body h6 .prefix {
  display: none;
}

.markdown-body h1 .suffix
.markdown-body h2 .suffix,
.markdown-body h3 .suffix,
.markdown-body h4 .suffix,
.markdown-body h5 .suffix,
.markdown-body h6 .suffix {
  display: none;
}

/*列表*/
.markdown-body ul,
.markdown-body ol {
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 25px;
  color: black;
}
.markdown-body ul {
  list-style-type: disc;
}
.markdown-body ul ul {
  list-style-type: square;
}

.markdown-body ol {
  list-style-type: decimal;
}

.markdown-body li section {
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 26px;
  text-align: left;
  color: rgb(1,1,1); /* 只要是纯黑色微信编辑器就会把color这个属性吞掉。。。*/
  font-weight: 500;
}

/*引用*/
.markdown-body blockquote {
  border: none;
}

.markdown-body .multiquote-1 {
  display: block;
  font-size: 0.9em;
  overflow: auto;
  overflow-scrolling: touch;
  border-left: 3px solid rgba(0, 0, 0, 0.4);
  background: rgba(0, 0, 0, 0.05);
  color: #6a737d;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.markdown-body .multiquote-1 p {
  margin: 0px;
  color: black;
  line-height: 26px;
}

.markdown-body .multiquote-2 {
  box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.markdown-body .multiquote-3 {
  box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.markdown-body .multiquote-3 p {
  text-align: center;
}

.markdown-body .multiquote-3 h3 {
  text-align: center;
}

.markdown-body .table-of-contents a {
  border: none;
  color: black;
  font-weight: normal;
}

/*链接*/
.markdown-body a {
  text-decoration: none;
  color: #1e6bb8;
  word-wrap: break-word;
  font-weight: bold;
  border-bottom: 1px solid #1e6bb8;
}

/*加粗*/
.markdown-body strong {
  font-weight: bold;
  color: black;
}

/*斜体*/
.markdown-body em {
  font-style: italic;
  color: black;
}

/*加粗斜体*/
.markdown-body em strong {
  font-weight: bold;
  color: black;
}

/*删除线*/
.markdown-body del {
  font-style: italic;
  color: black;
}

/*分隔线*/
.markdown-body hr {
  height: 1px;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-top: 1px solid black;
}

/*代码块*/
.markdown-body pre {
  margin-top: 10px;
  margin-bottom: 10px;
}
.markdown-body pre code {
  display: -webkit-box;
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  border-radius: 0px;
  font-size: 12px;
  -webkit-overflow-scrolling: touch;
}
.markdown-body pre code span {
  line-height: 26px;
}

/*行内代码*/
.markdown-body p code,
.markdown-body li code {
  font-size: 14px;
  word-wrap: break-word;
  padding: 2px 4px;
  border-radius: 4px;
  margin: 0 2px;
  color: #1e6bb8;
  background-color: rgba(27,31,35,.05);
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  word-break: break-all;
}

/*图片*/
.markdown-body img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}

/*图片*/
.markdown-body figure {
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}

/*图片描述文字*/
.markdown-body figcaption {
  margin-top: 5px;
  text-align: center;
  color: #888;
  font-size: 14px;
}


/*表格容器 */
.markdown-body .table-container{
  overflow-x: auto;
}

/*表格*/
.markdown-body table {
  display: table;
  text-align: left;
}
.markdown-body tbody {
  border: 0;
}

.markdown-body table tr {
  border: 0;
  border-top: 1px solid #ccc;
  background-color: white;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #F8F8F8;
}

.markdown-body table tr th,
.markdown-body table tr td {
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 5px 10px;
  text-align: left;
}

.markdown-body table tr th {
  font-weight: bold;
  background-color: #f0f0f0;
}

/* 表格最小列宽4个汉字 */
.markdown-body table tr th:nth-of-type(n),
.markdown-body table tr td:nth-of-type(n){
  min-width:85px;
}

.markdown-body .footnote-word {
  color: #1e6bb8;
  font-weight: bold;
}

.markdown-body .footnote-ref {
  color: #1e6bb8;
  font-weight: bold;
}

.markdown-body .footnote-item {
  display: flex;
}

.markdown-body .footnote-num {
  display: inline;
  width: 10%; /*神奇，50px就不可以*/
  background: none;
  font-size: 80%;
  opacity: 0.6;
  line-height: 26px;
  font-family: ptima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.markdown-body .footnote-item p {
  display: inline;
  font-size: 14px;
  width: 90%;
  padding: 0px;
  margin: 0;
  line-height: 26px;
  color: black;
  word-break:break-all;
  width: calc(100%-50)
}

.markdown-body sub, sup {
  line-height: 0;
}

.markdown-body .footnotes-sep:before {
  content: "参考资料";
  display: block;
}

/* 解决公式问题 */
.markdown-body .block-equation {
  display:block;
  text-align: center;
  overflow: auto;
  display: block;
  -webkit-overflow-scrolling: touch;
}

.markdown-body .block-equation svg {
  max-width: 300% !important;
  -webkit-overflow-scrolling: touch;
}

.markdown-body .inline-equation {
}

.markdown-body .inline-equation svg {
}

.markdown-body .imageflow-layer1 {
  margin-top: 1em;
  margin-bottom: 0.5em;
  white-space: normal;
  border: 0px none;
  padding: 0px;
  overflow: hidden;
}

.markdown-body .imageflow-layer2 {
  white-space: nowrap;
  width: 100%;
  overflow-x: scroll;
}

.markdown-body .imageflow-layer3 {
  display: inline-block;
  word-wrap: break-word;
  white-space: normal;
  vertical-align: middle;
  width: 100%;
}

.markdown-body .imageflow-img {
  display: inline-block;
}

.markdown-body .imageflow-caption {
  text-align: center;
  margin-top: 0px;
  padding-top: 0px;
  color: #888;
}

.markdown-body .nice-suffix-juejin-container {
  margin-top: 20px !important;
}

.markdown-body figure a {
  border: none;
}

.markdown-body figure a img {
  margin: 0px;
}

.markdown-body ul.contains-task-list {
  list-style-type: none;
}

.markdown-body figure {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 图片链接嵌套 */
.markdown-body figure a {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 图片链接嵌套，图片解释 */
.markdown-body figure a + figcaption {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -35px;
  background: rgba(0,0,0,0.7);
  color: white;
  line-height: 35px;
  z-index: 20;
}
`
