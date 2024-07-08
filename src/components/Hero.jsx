import React, { FC, useState, useCallback } from 'react';
import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    DragOverlay,
    useSensor,
    useSensors,
    DragStartEvent,
    DragEndEvent,
} from '@dnd-kit/core';
import { Draggable } from './ui/draggable/Draggable';

/* The implementation details of <Item> and <ScrollableList> are not
 * relevant for this example and are therefore omitted. */

export default function Hero() {
  const [items] = useState(['1', '2', '3', '4', '5']);
  const [activeId, setActiveId] = useState(null);
  
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      
    </DndContext>
  );
  
  function handleDragStart(event) {
    setActiveId(event.active.id);
  }
  
  function handleDragEnd() {
    setActiveId(null);
  }
}