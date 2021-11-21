import {Col, Form, Input, message, Modal, Row, Spin, Tree} from 'antd';
import {useEffect, useState} from "react";
import {createDirectory, listDirectory, updateDirectory} from "@/services/directory";
import {Item, Menu, useContextMenu} from 'react-contexify';
import {BookOutlined, DeleteTwoTone, EditOutlined, ExclamationCircleOutlined, PlusOutlined} from "@ant-design/icons";

const {DirectoryTree} = Tree;

export default ({createArticle, onSelect, name}) => {

  const [form] = Form.useForm();
  const [currentNode, setCurrentNode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState({});
  const [modalTitle, setModalTitle] = useState({});
  const [mode, setMode] = useState(0);

  const {show} = useContextMenu({
    id: "directory",
  });

  const handleItemClick = async key => {
    if (record.id.indexOf("a") > -1) {
      message.error("不能在用例上添加目录")
      return
    }
    if (key === 1) {
      // 新增目录
      form.resetFields()
      setModalTitle(record.name || '根目录');
      setRecord({name: ''})
      setModal(true)
      setMode(1)
    } else if (key === 2) {
      form.setFieldsValue({name: record.name})
      setModalTitle(record.name);
      setModal(true)
      setMode(2)
    } else if (key === 3) {
      Modal.confirm({
        title: '你确定要删除这个目录吗?',
        icon: <ExclamationCircleOutlined/>,
        content: '删除后，目录下的case也将不再可见！！！',
        okText: '确定',
        okType: 'danger',
        cancelText: '点错了',
        async onOk() {
          // await onDeleteDirectory();
        },
      });
    } else if (key === 4) {
      await createArticle(parseInt(record.id, 10))
      getTree()
    }
  };


  const [treeData, setTreeData] = useState([]);
  const [modal, setModal] = useState(false);

  const onExpand = () => {
    console.log('Trigger Expand');
  };

  function handleContextMenu(event) {
    event.preventDefault();
    show(event, {
      props: {
        key: 'value'
      }
    })
  }

  const getTree = async () => {
    setLoading(true)
    const res = await listDirectory();
    if (res.errcode !== 0) {
      message.error(res.errmsg);
      return;
    }
    setTreeData(res.data);
    setLoading(false)
  }

  const onSubmit = async () => {
    const values = await form.validateFields()
    let res;
    if (mode === 2) {
      res =  await updateDirectory({...values, id: parseInt(record.id)});
    } else {
      res = await createDirectory({...values, parent: currentNode !== null ? parseInt(currentNode, 10) : 0});
    }
    if (res.errcode !== 0) {
      message.error(res.errmsg);
      return;
    }
    getTree();
    setModal(false);
  }

  useEffect(() => {
    getTree()
  }, [])

  return (
    <div>
      <Modal title={modalTitle}
             onOk={onSubmit}
             visible={modal} onCancel={() => setModal(false)} width={400}>
        <Form form={form}>
          <Form.Item label="目录名" name="name" rules={
            [{required: true, message: "请输入目录名"}]
          }>
            <Input placeholder="请输入目录名"/>
          </Form.Item>
        </Form>
      </Modal>
      <Row gutter={8} style={{marginBottom: 8}}>
        <Col span={24}>
          <a style={{marginLeft: 30}}
             onClick={() => {
               setModal(true)
               setCurrentNode(null)
               setModalTitle('根目录');
             }}><PlusOutlined style={{fontSize: 16}}/> 添加目录</a>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Spin spinning={loading} tip="努力加载中..." style={{marginTop: 100}}>
            <DirectoryTree
              defaultExpandAll
              loading={loading}
              onSelect={onSelect}
              onExpand={onExpand}
              onContextMenu={handleContextMenu}
              treeData={treeData}
              onRightClick={e => {
                setCurrentNode(e.node.key);
                setRecord({name: e.node.title, id: e.node.key});
              }}/>
            <Menu id="directory" theme="dark">
              <Item onClick={() => {
                handleItemClick(4);
              }}><BookOutlined style={{margin: '0 8px', fontSize: 16}}/> 创建文章</Item>
              <Item onClick={() => {
                handleItemClick(1);
              }}><PlusOutlined style={{margin: '0 8px', fontSize: 16}}/> 添加目录</Item>
              <Item onClick={() => {
                handleItemClick(2);
              }}><EditOutlined style={{margin: '0 8px', fontSize: 16}}/> 编辑目录</Item>
              <Item onClick={() => {
                handleItemClick(3);
              }}><DeleteTwoTone twoToneColor="#F56C6C" style={{margin: '0 8px', fontSize: 16}}/> <span
                style={{color: '#F56C6C'}}>删除目录</span></Item>
            </Menu>
          </Spin>

        </Col>

      </Row>
    </div>


  );
};
