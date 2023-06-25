import { useState } from 'react';
const DraggableObject = ({ object, onMove, onRemove }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  return (
    <img
      src={object.src}
      alt=""
      draggable={false}
      onDoubleClick={() => onRemove(object.instanceId)}
      style={{ position: 'absolute', left: object.x, top: object.y, cursor: 'grab' }}
      onMouseDown={(e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setStartY(e.clientY);
      }}
      onMouseMove={(e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        onMove(object.instanceId, object.x + dx, object.y + dy);
        setStartX(e.clientX);
        setStartY(e.clientY);
      }}
      onMouseUp={() => {
        setIsDragging(false);
      }}
      onMouseLeave={() => {
        setIsDragging(false);
      }}
    />
  );
};

export default DraggableObject;
