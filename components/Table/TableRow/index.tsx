import { ExerciseType } from "@/types/Exercise";
import { tableHeaderType } from "@/types/TableHeaderType";
import { Dispatch, FC, SetStateAction, memo, useState } from "react";
import { TableTd, TableTr } from "./style";

interface PropsType {
  item: ExerciseType;
  titleHeaders: tableHeaderType<ExerciseType>[];
  navigationRow?: FC<{
    item: ExerciseType;
    refetch?: () => void;
    setDisabledRow: Dispatch<SetStateAction<boolean>>;
  }>;
  refetch?: () => void;
}

const TableRow: FC<PropsType> = ({
  item,
  titleHeaders,
  navigationRow: NavigationRow,
  refetch,
}) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <TableTr $isDisabled={disabled}>
      {titleHeaders.map((columnItem, index) => {
        const columnValue = item[columnItem.value];
        return <TableTd key={index}>{columnValue}</TableTd>;
      })}
      {NavigationRow && (
        <TableTd>
          {
            <NavigationRow
              item={item}
              refetch={refetch}
              setDisabledRow={setDisabled}
            />
          }
        </TableTd>
      )}
    </TableTr>
  );
};

export default memo(TableRow);
