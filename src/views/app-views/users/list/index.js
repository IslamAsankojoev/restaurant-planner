import { Card, Table, Tooltip, Button } from 'antd';
import { EyeOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import Loading from 'components/shared-components/Loading';

export const UserList = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    users: [],
    userProfileVisible: false,
    selectedUser: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  const showUserProfile = (user) => {
    setState((prev) => ({
      ...prev,
      userProfileVisible: true,
      selectedUser: user,
    }));
  };

  const closeUserProfile = () => {
    setState((prev) => ({
      ...prev,
      userProfileVisible: false,
      selectedUser: null,
    }));
  };

  const editUserProfile = (user) => {
    navigate(`${APP_PREFIX_PATH}/users/edit/${user.id}`);
  };

  const deleteUser = (id) => {
    setState((prev) => ({
      ...prev,
      users: state.users.filter((user) => user.id !== id),
    }));
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
        res.json(),
      );
      setState((prev) => ({
        ...prev,
        users: data,
      }));
    })();
    setIsLoading(false);
  }, []);

  const tableColumns = [
    {
      title: 'User',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Nickname',
      dataIndex: 'nickname',
      render: (_, record) => (
        <div className="d-flex">
          <span>{record.username}</span>
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.username.toLowerCase();
          b = b.username.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className="text-right d-flex justify-content-end">
          <Tooltip title="Edit">
            <Button
              type="default"
              className="mr-2"
              icon={<EditOutlined />}
              onClick={() => {
                editUserProfile(elm);
              }}
              size="small"
            />
          </Tooltip>
          <Tooltip title="View">
            <Button
              type="primary"
              className="mr-2"
              icon={<EyeOutlined />}
              onClick={() => {
                showUserProfile(elm);
              }}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                deleteUser(elm.id);
              }}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  if (isLoading) return <Loading cover="content" />;

  return (
    <Card bodyStyle={{ padding: '0px' }}>
      <div className="table-responsive">
        <Table columns={tableColumns} dataSource={state.users} rowKey="id" />
      </div>
      <UserView
        data={state.selectedUser}
        visible={state.userProfileVisible}
        close={() => {
          closeUserProfile();
        }}
      />
    </Card>
  );
};

export default UserList;
