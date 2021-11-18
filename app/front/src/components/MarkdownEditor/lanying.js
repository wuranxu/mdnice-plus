export default `/* 全局属性 */

.markdown-body {
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  word-break: break-all;
}

/* 标题 */
.markdown-body h1 {
  font-size: 1.7em;
  font-weight: normal;
  border-bottom: 2px solid hsl(216, 100%, 68%);
}

.markdown-body h1 .content {
  background: hsl(216, 100%, 68%);
  color: white;
  padding: 3px 10px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  margin-right: 3px;
}

.markdown-body h2 {
  font-weight: normal;
  color: #333;
  font-size: 1.4em;
  border-bottom: 1px solid hsl(216, 100%, 68%);
}

.markdown-body h2 .content {
  border-bottom: 1px solid hsl(216, 100%, 68%);
}

.markdown-body h3 {
  font-weight: normal;
  color: #333;
  font-size: 1.2em;
}

/* 特殊规定：
 * h4 → 摘要
 * h5 → 强调
 * h6 → 序号
 * em → 高亮
 */

.markdown-body h4 {
  font-weight: normal;
  font-size: 1em;
  width: 80%;
  border: 1px solid hsl(216, 100%, 68%);
  border-top: 4px solid hsl(216, 100%, 68%);
  padding: 10px;
  margin: 30px auto;
  color: #333;
}

.markdown-body h5 {
  font-weight: normal;
  font-size: 1.3em;
  text-align: center;
  background: hsl(216, 100%, 68%);
  border: 3px double #fff;
  width: 80%;
  padding: 10px;
  margin: 30px auto;
  color: #fff;
}

.markdown-body h6 {
  font-size: 1.5em;
  font-weight: normal;
  color: hsl(216, 100%, 68%);
  border-bottom: 1px solid hsl(216, 100%, 68%);
}

.markdown-body em {
  font-style: normal;
  font-weight: normal;
  color: white;
  background: hsl(244, 100%, 75%);
  padding: 2px 4px;
\tmargin: 0px 2px;
}

/* 其他块元素 */

.markdown-body ol,
.markdown-body ul {
  padding-left: 2em;
}

.markdown-body hr {
  width: 90%;
  margin: 1.5em auto;
  border-top: 2px dashed hsl(216, 100%, 68%);
}

.markdown-body table {
  margin: 1.5em auto;
  width: auto;
}

.markdown-body img {
  width: 90%;
  margin: 0 auto;
  box-shadow: #CCC 0 10px 15px;
}

.markdown-body .multiquote-1 {
  background: #f9f9f9;
  border-left-color: hsl(216, 100%, 68%);
}

.markdown-body .multiquote-1 p {
  color: #999;
  padding: 3px 0;
}

.markdown-body a {
  color: hsl(187, 100%, 45%);
  font-weight: normal;
  border-bottom-color: hsl(187, 100%, 45%);
}

.markdown-body strong {
  color: hsl(216, 80%, 44%);
}

.markdown-body s,
.markdown-body del {
  color: #999;
}

.markdown-body p,
.markdown-body li,
.markdown-body li span,
.markdown-body h4,
.markdown-body table tr td {
  color: #666;
}

.markdown-body table tr th {
  color: #333;
  font-weight: normal;
}

.markdown-body p code,
.markdown-body li code {
  color: hsl(216, 100%, 68%);
}

.markdown-body sup {
  line-height: 0;
}

.markdown-body .footnote-word,
.footnote-ref {
  font-weight: normal;
  color: hsl(187, 100%, 45%);
}

.markdown-body .footnotes-sep {
  font-family: inherit;
}

.markdown-body .footnote-num {
  font-family: inherit;
}

.markdown-body .footnote-item p {
  color: #666;
}

.markdown-body .footnote-item p em {
  color: #999;
  background: transparent;
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
.markdown-body .block-equation svg {
}

/* 行内公式
 */
.markdown-body .inline-equation svg {
}

/* 滑动图片
 */
.markdown-body .imageflow-img {
  display: inline-block;
  width:100%;
  margin-bottom: 0;
}`
