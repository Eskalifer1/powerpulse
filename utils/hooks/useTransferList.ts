import { ExerciseType } from "@/types/Exercise";
import {
  TransferListColumnType,
  TransferListDataType,
} from "@/types/TransferList";
import { useState } from "react";

const useTransferList = <T>(
  initialData: TransferListDataType<ExerciseType>
) => {
  const [state, setState] = useState(initialData);

  const reorderColumnList = (
    sourceCol: TransferListColumnType,
    startIndex: number,
    endIndex: number
  ) => {
    const newTaskIds = Array.from(sourceCol.columnIds);
    const [removed] = newTaskIds.splice(startIndex, 1);
    newTaskIds.splice(endIndex, 0, removed);

    const newColumn: TransferListColumnType = {
      ...sourceCol,
      columnIds: newTaskIds,
    };

    return newColumn;
  };

  const onDragEnd = (result: any) => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    const startTaskIds = Array.from(sourceCol.columnIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol: TransferListColumnType = {
      ...sourceCol,
      columnIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.columnIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol: TransferListColumnType = {
      ...destinationCol,
      columnIds: endTaskIds,
    };

    const newState: TransferListDataType<ExerciseType> = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setState(newState);
  };

  return { state, onDragEnd, setState };
};

export default useTransferList;
