"use client";

import { ReactNode, useState } from "react";
import { ITableColumn } from "..";
import { StyledTableTd, StyledTableTr } from "../style";

interface PropsType {
  columns: ITableColumn[];
  row: any;
  rowActions?: (row: any, setIsDisabled: (value: boolean) => void) => ReactNode;
}

function TableRow({ columns, row, rowActions }: PropsType) {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <StyledTableTr $isDisabled={isDisabled}>
      {columns.map((column, index) => (
        <StyledTableTd key={index}>{column.render(row)}</StyledTableTd>
      ))}
      {rowActions && (
        <StyledTableTd>
          {rowActions(row, (value) => setIsDisabled(value))}
        </StyledTableTd>
      )}
    </StyledTableTr>
  );
}

export default TableRow;
