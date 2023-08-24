"use client";

import { ExerciseType } from "@/types/Exercise";
import { TransferListColumnType } from "@/types/TransferList";
import React, { FC } from "react";
import { StrictModeDroppable } from "../StrictModeDropable";
import TransferListItem from "../TransferListItem";
import {
  TransferListColumnDropableWrap,
  TransferListColumnTitle,
  TransferListColumnTitleWrap,
  TransferListColumnWrap,
} from "./style";

interface PropsType {
  column: TransferListColumnType;
  dataEntity: ExerciseType[];
}

const TransferListColumn: FC<PropsType> = ({ column, dataEntity = [] }) => {
  return (
    <TransferListColumnWrap>
      <TransferListColumnTitleWrap>
        <TransferListColumnTitle>{column.title}</TransferListColumnTitle>
      </TransferListColumnTitleWrap>

      <StrictModeDroppable droppableId={column.id}>
        {(droppableProvided) => (
          <TransferListColumnDropableWrap
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {dataEntity.map((exercise, index: number) => (
              <TransferListItem
                exercise={exercise}
                index={index}
                key={exercise._id}
              />
            ))}
          </TransferListColumnDropableWrap>
        )}
      </StrictModeDroppable>
    </TransferListColumnWrap>
  );
};

export default React.memo(TransferListColumn);
