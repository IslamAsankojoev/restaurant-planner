import React, { useState, useRef, useCallback } from 'react';
import { saveAs } from 'file-saver';
import { Button, Typography } from 'antd';
import { objectsList } from './ObjectList';
import ObjectList from './ObjectList';
import Board from './Board';

const Planner = () => {
  const [objects, setObjects] = useState([]);
  const [instanceCounter, setInstanceCounter] = useState(0);
  const fileInputRef = useRef(null);

  const addObject = (id, x, y) => {
    const object = objectsList.find((obj) => obj.id === id);
    setObjects([...objects, { ...object, x, y, instanceId: instanceCounter }]);
    setInstanceCounter(instanceCounter + 1);
  };

  const removeObject = useCallback(
    (instanceId) => {
      setObjects(objects.filter((object) => object.instanceId !== instanceId));
    },
    [objects],
  );

  const removeAllObjects = () => {
    setObjects([]);
  };

  const moveObject = (instanceId, x, y) => {
    setObjects(
      objects.map((object) => {
        if (object.instanceId === instanceId) {
          return { ...object, x, y };
        }
        return object;
      }),
    );
  };

  const saveToFile = () => {
    const blob = new Blob([JSON.stringify(objects)], { type: 'application/json' });
    saveAs(blob, 'restaurant-scheme.json');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          setObjects(data);
        } catch (err) {
          console.error('Error parsing JSON', err);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleFileImport = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <ObjectList onAddObject={addObject} />
      <br />
      <div
        style={{
          marginBottom: '10px',
          marginTop: '10px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <Button type="primary" size="small" onClick={saveToFile}>
          Save scheme
        </Button>
        <Button type="dashed" size="small" onClick={handleFileImport}>
          Import scheme
          <input type="file" hidden ref={fileInputRef} onChange={handleFileUpload} />
        </Button>
        <Button danger size="small" onClick={removeAllObjects}>
          Remove all objects
        </Button>
        <Typography
          style={{
            marginTop: '10px',
            color: '#ff9393',
          }}
        >
          or double click on object to remove it
        </Typography>
      </div>
      <Board
        objects={objects}
        moveObject={moveObject}
        addObject={addObject}
        removeObject={removeObject}
      />
    </div>
  );
};
export default Planner;
