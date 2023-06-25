import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Avatar, Button, Input, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import Loading from 'components/shared-components/Loading';

const Edit = () => {
  const params = useParams();
  const [user, setUser] = useState({
    id: null,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });
  const [avatar, setAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const onFinish = (values) => {
    const key = 'updatable';
    message.loading({ content: 'Updating...', key });
    setTimeout(() => {
      setUser({
        name: values.name,
        email: values.email,
        username: values.userName,
        phone: values.phoneNumber,
        website: values.website,
        address: {
          ...user.address,
          street: values.address,
          city: values.city,
        },
        zipcode: values.zipcode,
      });
      message.success({ content: 'Done!', key, duration: 2 });
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onUploadAavater = (info) => {
    setAvatar(URL.createObjectURL(info.file.originFileObj));
  };

  const onRemoveAvater = () => {
    setAvatar(null);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(
        (res) => res.json(),
      );
      setUser(data);
      setIsLoading(false);
    })();
  }, [params.id]);

  if (isLoading) return <Loading cover="content" />;

  return (
    <>
      <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
        <Avatar size={90} src={avatar} icon={<UserOutlined />} />
        <div className="ml-3 mt-md-0 mt-3">
          <Upload onChange={onUploadAavater} showUploadList={false}>
            <Button type="primary">Change Avatar</Button>
          </Upload>
          <Button className="ml-2" onClick={onRemoveAvater}>
            Remove
          </Button>
        </div>
      </Flex>
      <div className="mt-4">
        <Form
          name="basicInformation"
          layout="vertical"
          initialValues={{
            name: user?.name,
            email: user?.email,
            username: user?.username,
            phone: user?.phone,
            website: user?.website,
            address: user?.address?.street,
            city: user?.address?.city,
            zipcode: user?.address?.zipcode,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: 'email',
                        message: 'Please enter a valid email!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Phone Number" name="phone">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Website" name="website">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item label="Address" name="address">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Zip code" name="zipcode">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Save Change
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default Edit;
