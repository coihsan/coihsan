import React from 'react';
import {useDroppable} from '@dnd-kit/core';

function MultipleDroppables() {
  const {setNodeRef: setDroppableRef} = useDroppable({
    id: 'droppable-1',
  });
  
  return (
    <section>
      <div ref={setDroppableRef}>
        <Slot />
      </div>
    </section>
  );
}