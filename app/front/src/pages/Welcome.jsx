import Bytemd from "@/components/MarkdownEditor/Bytemd";
import {Card, Col, Empty, Input, message, Row, Select, Tooltip} from "antd";
import 'react-contexify/dist/ReactContexify.css';
import DirectoryTree from "@/components/DirectoryTree/DirectoryTree";
import {useEffect, useRef, useState} from "react";
import IconFont from "@/components/Icons/IconFont";
import "./Welcome2.css"
import juice from "_juice@8.0.0@juice";
import atom from "@/components/MarkdownEditor/atom";
import basic from "@/components/MarkdownEditor/basic";
import {createArticle, queryArticle, updateArticle} from "@/services/directory";

const {Option} = Select;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default () => {

  const [theme, setTheme] = useState(0);
  const [html, setHtml] = useState('');
  const [article, setArticle] = useState(null);
  const [value, setValue] = useState('');
  const [lastContent, setLastContent] = useState('');
  const [articleName, setArticleName] = useState('');



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
    let res = "";
    try {
      res = juice.inlineContent(html, basicStyle + markdownStyle + codeStyle + "", {
        inlinePseudoElements: true,
        preserveImportant: true,
      });
    } catch (e) {
      message.error("请检查 CSS 文件是否编写正确！");
    }
    copySafari(res)
    message.success("已复制，请到微信公众平台粘贴");
  };

  const addArticle = async directory_id => {
    const res = await createArticle({name: "未命名文章" + new Date().getMilliseconds(), directory_id})
    if (res.errcode !== 0) {
      message.error(res.errmsg)
    }
  }

  const upArticle = async () => {
    console.log("running", article, value)
    if (article === null) {
      return
    }
    const res = await updateArticle(article, {name: articleName, content: value})
    if (res.errcode !== 0) {
      message.error(res.errmsg)
    }
  }

  useInterval(upArticle, 8000);

  const qrArticle = async () => {
    const res = await queryArticle(article)
    if (res.errcode !== 0) {
      message.error(res.errmsg)
    }
    setValue(res.data.content)
    setArticleName(res.data.name)
    setLastContent(res.data.content)
  }

  useEffect(async () => {
    if (article !== null) {
      await qrArticle()
    }
  }, [article])


  const onSelect = (keys, info) => {
    if (keys[0].indexOf("a") > -1) {
      // 说明是文章
      setArticle(parseInt(keys[0].split("_")[1], 10))
      setArticleName(info.node.title)
    } else {
      setArticle(null);
      setArticleName('')
    }
  };


  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card style={{height: 658, overflow: 'auto'}} title="文章目录">
          <DirectoryTree createArticle={addArticle} onSelect={onSelect}/>
        </Card>
      </Col>
      <Col span={18}>
        <Card style={{height: 658, overflow: 'auto'}}>
          <Row gutter={8} style={{lineHeight: '36px'}}>
            <Col span={8}>
              {
                article !== null ? <Input size="small" value={articleName} onChange={e => {
                  setArticleName(e.target.value)
                }}
                /> : null
              }
            </Col>
            <Col span={4}/>
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
              <Tooltip title="点击可复制到微信公众号">
                <IconFont type="icon-weixingongzhonghao" style={{fontSize: 36, float: 'right'}} onClick={() => {
                  solveHtml()
                }}/>
              </Tooltip>
            </Col>
          </Row>
          {
            article === null ?
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{lineHeight: '300px'}} description="请选择左侧文章"/> :
              <Bytemd theme={theme} value={value} setValue={setValue}/>
          }
        </Card>
      </Col>
    </Row>
  )
}
