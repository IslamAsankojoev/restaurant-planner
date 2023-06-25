import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';

export const objectsList = [
  {
    id: 1,
    src: '/objects/stol1.png',
    name: 'На двоих 1',
  },
  {
    id: 2,
    src: '/objects/stol2.png',
    name: 'На двоих 2',
  },
  {
    id: 3,
    src: '/objects/stol3.png',
    name: 'На четверых 1',
  },
  {
    id: 4,
    src: '/objects/stol4.png',
    name: 'На четверых 2',
  },
  {
    id: 5,
    src: '/objects/stol5.png',
    name: 'На четверых 3',
  },
  {
    id: 6,
    src: '/objects/stol6.png',
    name: 'На четверых 4',
  },
  {
    id: 7,
    src: '/objects/stol7.png',
    name: 'Круглый стол',
  },
];

const ObjectList = ({ onAddObject }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
    }}
  >
    {objectsList.map((object) => (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img key={object.id} src={object.src} alt="" width={100} draggable={true} />
        <Typography>{object.name}</Typography>
        <Button
          onClick={() => {
            onAddObject(object.id, 0, 0);
          }}
          type="link"
          size="small"
        >
          <PlusCircleOutlined onClick={() => onAddObject(object.id, 0, 0)} />
          Add to board
        </Button>
      </div>
    ))}
  </div>
);

export default ObjectList;
