"use client";

import { ExerciseType } from "@/types/Exercise";
import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TransferListItemText, TransferListItemWrap } from "./style";

interface PropsType {
  exercise: ExerciseType;
  index: number;
}

const TransferListItem: FC<PropsType> = ({ exercise, index }) => {
  return (
    <Draggable draggableId={`${exercise._id}`} index={index}>
      {(draggableProvided, draggableSnapshot) => (
        <TransferListItemWrap
          $isDraging={draggableSnapshot.isDragging}
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <TransferListItemText>{exercise.name}</TransferListItemText>
        </TransferListItemWrap>
      )}
    </Draggable>
  );
};

export default TransferListItem;
