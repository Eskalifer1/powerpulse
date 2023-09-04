"use client";

import { ExerciseType } from "@/types/Exercise";
import { TransferListDataType } from "@/types/TransferList";
import { TransferListRefElementType } from "@/types/TransferListGetElementType";
import { getElementByValueInArray } from "@/utils/functions/getElementByValueInArray";
import useTransferList from "@/utils/hooks/useTransferList";
import dynamic from "next/dynamic";
import React, { forwardRef, useImperativeHandle } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { TransferListWrap } from "./style";

const TransferListColumn = dynamic(() => import("./TransferListColumn"), {
  ssr: false,
});

type PropsType = {
  data: TransferListDataType<ExerciseType>;
};

const TransferList = forwardRef<TransferListRefElementType, PropsType>(
  ({ data }, ref) => {
    const { state, onDragEnd, setState } = useTransferList<ExerciseType>(data);

    useImperativeHandle(ref, () => ({
      getIds(string) {
        return state.columns[string].columnIds;
      },
      clear() {
        setState(data);
      },
    }));

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <TransferListWrap>
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.columnIds.map((taskId) =>
              getElementByValueInArray<ExerciseType>(
                state.listData,
                taskId,
                "_id"
              )
            );

            return (
              <TransferListColumn
                key={column.id}
                column={column}
                dataEntity={
                  tasks.filter((task) => task !== undefined) as ExerciseType[]
                }
              />
            );
          })}
        </TransferListWrap>
      </DragDropContext>
    );
  }
);

TransferList.displayName = "TransferList";

export default React.memo(TransferList);
