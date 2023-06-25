import DraggableObject from './DraggableObject';

const Board = ({ objects, moveObject, removeObject }) => {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'auto',
        width: '100%',
        height: '500px',
        background: '#f0f0f0',
        border: '1px solid #ccc',
        backgroundSize: '300px 300px',
        backgroundImage:
          'url(https://static.vecteezy.com/system/resources/previews/006/649/753/original/grid-on-a-white-background-paper-for-taking-notes-seamless-square-pattern-lines-and-squares-illustration-free-vector.jpg)',
      }}
    >
      {objects.map((object) => (
        <DraggableObject
          key={object.instanceId}
          object={object}
          onMove={moveObject}
          onRemove={removeObject}
        />
      ))}
    </div>
  );
};

export default Board;
