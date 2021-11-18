import Bytemd from "@/components/MarkdownEditor/Bytemd";
import {Card, Col, message, Row, Select, Tooltip} from "antd";
import DirectoryTree from "@/components/DirectoryTree/DirectoryTree";
import {useState} from "react";
import IconFont from "@/components/Icons/IconFont";
import "./Welcome2.css"
import juice from "_juice@8.0.0@juice";
import atom from "@/components/MarkdownEditor/atom";
import basic from "@/components/MarkdownEditor/basic";


const {Option} = Select;

export default () => {

  const [theme, setTheme] = useState(0);
  const [html, setHtml] = useState('');

  const copySafari = (text) => {
    // 获取 input
    let input = document.getElementById("copy-input");
    if (!input) {
      // input 不能用 CSS 隐藏，必须在页面内存在。
      input = document.createElement("input");
      input.id = "copy-input";
      input.style.position = "absolute";
      input.style.left = "-1000px";
      input.style.zIndex = "-1000";
      document.body.appendChild(input);
    }
    // 让 input 选中一个字符，无所谓那个字符
    input.value = "NOTHING";
    input.setSelectionRange(0, 1);
    input.focus();

    // 复制触发
    document.addEventListener("copy", function copyCall(e) {
      e.preventDefault();
      e.clipboardData.setData("text/html", text);
      e.clipboardData.setData("text/plain", text);
      document.removeEventListener("copy", copyCall);
    });
    document.execCommand("copy");
  };

  const solveHtml = () => {
    const element = document.getElementsByClassName("bytemd-preview")[0];
    if (element === undefined) {
      return
    }
    const inner = element.children[0].children;
    for (const item of inner) {
      item.setAttribute("data-tool", "mdnice-plus编辑器");
    }
    let html = element.innerHTML;
    html = html.replace(/<mjx-container (class="inline.+?)<\/mjx-container>/g, "<span $1</span>");
    html = html.replace(/\s<span class="inline/g, '&nbsp;<span class="inline');
    html = html.replace(/svg><\/span>\s/g, "svg></span>&nbsp;");
    html = html.replace(/mjx-container/g, "section");
    html = html.replace(/class="mjx-solid"/g, 'fill="none" stroke-width="70"');
    html = html.replace(/<mjx-assistive-mml.+?<\/mjx-assistive-mml>/g, "");
    const basicStyle = basic;
    const markdownStyle = document.getElementById("markdown-theme").innerText;
    const codeStyle = atom;
    // const fontStyle = document.getElementsByClassName("markdown-body")[0].innerText;
    console.log(basicStyle, markdownStyle, codeStyle)
    let res = "";
    try {
      res = juice.inlineContent(html, basicStyle + markdownStyle + codeStyle + "", {
        inlinePseudoElements: true,
        preserveImportant: true,
      });
    } catch (e) {
      message.error("请检查 CSS 文件是否编写正确！");
    }
    console.log(basicStyle, codeStyle)
    copySafari(res)
    message.success("已复制，请到微信公众平台粘贴");
  };


  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card>
          <DirectoryTree/>
        </Card>
      </Col>
      <Col span={18}>
        <Card>
          <Row gutter={8} style={{lineHeight: '36px'}}>
            <Col span={12}>
              <Tooltip title="点击可复制到微信公众号">
                <IconFont type="icon-weixingongzhonghao" style={{fontSize: 36}} onClick={() => {
                  solveHtml()
                }}/>
              </Tooltip>
            </Col>
            <Col span={12}>
              样式&nbsp;&nbsp;
              <Select size="small" value={theme} onChange={e => {
                setTheme(e)
              }} style={{width: 160}}>
                <Option value={0}>默认</Option>
                <Option value={1}>萌蓝</Option>
                <Option value={2}>绿意</Option>
                <Option value={3}>橙心</Option>
                <Option value={4}>姹紫</Option>
                <Option value={5}>凝夜紫</Option>
                <Option value={6}>蓝莹</Option>
                <Option value={7}>全栈蓝</Option>
                <Option value={8}>萌绿</Option>
              </Select>
            </Col>
          </Row>

          <Bytemd theme={theme}/>
        </Card>
      </Col>
    </Row>
  )
}
