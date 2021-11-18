import React, {useEffect, useState} from 'react';
import zhHans from 'bytemd/lib/locales/zh_Hans.json'; //默认是英文版，我们替换成中文的
import gfm from '@bytemd/plugin-gfm';
import gemoji from '@bytemd/plugin-gemoji';
import highlight from '@bytemd/plugin-highlight-ssr';
import mediumZoom from '@bytemd/plugin-medium-zoom';
import {Editor} from '@bytemd/react';
import 'bytemd/dist/index.min.css';
import 'highlight.js/styles/default.css'
import 'highlight.js/styles/atom-one-dark.css';
import menglan from "@/components/MarkdownEditor/menglan";
import lvyi from "@/components/MarkdownEditor/lvyi";
import defaultCss from "@/components/MarkdownEditor/defaultcss";
import chengxin from "@/components/MarkdownEditor/chengxin";
import chazi from "@/components/MarkdownEditor/chazi";
import ningyezi from "@/components/MarkdownEditor/ningyezi";
import lanying from "@/components/MarkdownEditor/lanying";
import quanzhanlan from "@/components/MarkdownEditor/quanzhanlan";
import menglv from "@/components/MarkdownEditor/menglv";


export default ({theme}) => {

  const [value, setValue] = useState('');
  const plugins = [gfm(), gemoji(), highlight(), mediumZoom()];

  useEffect(() => {
    const styleElement = document.getElementById("markdown-theme");
    styleElement.innerText = getThemePath();

  }, [theme]);

  const getThemePath = () => {
    if (theme === 0) {
      return defaultCss
    }
    if (theme === 1) {
      return menglan;
    }
    if (theme === 2) {
      return lvyi;
    }
    if (theme === 3) {
      return chengxin;
    }
    if (theme === 4) {
      return chazi;
    }
    if (theme === 5) {
      return ningyezi;
    }
    if (theme === 6) {
      return lanying;
    }
    if (theme === 7) {
      return quanzhanlan;
    }
    if (theme === 8) {
      return menglv;
    }
    return defaultCss
  }

  return (
    <>
      <Editor
        style={{height: '80vh'}}
        locale={zhHans}
        className='nice-plus'
        value={value}
        plugins={plugins}  //markdown中用到的插件，如表格、数学公式、流程图
        onChange={(v) => {
          setValue(v);
        }}
        uploadImages={async (files) => {
          console.log('files', files);
          return [
            {
              title: files.map((i) => i.name),
              url: 'http',
            },
          ];
        }}
      />
    </>
  );
};
