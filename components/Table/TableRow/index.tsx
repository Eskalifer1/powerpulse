import { ExerciseType } from "@/types/Exercise";
import { tableHeaderType } from "@/types/TableHeaderType";
import { FC } from "react";
import { TableTd, TableTr } from "./style";

interface PropsType {
  exercise: ExerciseType;
  titleHeaders: tableHeaderType<any>[];
}

const TableRow: FC<PropsType> = ({ exercise, titleHeaders }) => {
  return (
    <TableTr>
      {titleHeaders.map((columnItem, index) => {
        const columnValue = exercise[columnItem.value as keyof ExerciseType];
        return <TableTd key={index}>{columnValue}</TableTd>;
      })}
    </TableTr>
  );
};

export default TableRow;