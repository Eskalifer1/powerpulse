import { ExerciseType } from "@/types/Exercise";
import { tableHeaderType } from "@/types/TableHeaderType";
import { FC } from "react";
import { TableTd, TableTr } from "./style";

interface PropsType {
  item: ExerciseType;
  titleHeaders: tableHeaderType<ExerciseType>[];
  navigationRow?: FC<{ item: ExerciseType }>;
}

const TableRow: FC<PropsType> = ({
  item,
  titleHeaders,
  navigationRow: NavigationRow,
}) => {
  return (
    <TableTr>
      {titleHeaders.map((columnItem, index) => {
        const columnValue = item[columnItem.value];
        return <TableTd key={index}>{columnValue}</TableTd>;
      })}
      {NavigationRow && <TableTd>{<NavigationRow item={item} />}</TableTd>}
    </TableTr>
  );
};

export default TableRow;
