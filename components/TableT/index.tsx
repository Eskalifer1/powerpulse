import { ReactNode } from "react";
import Async from "../Async";
import {
  StyledTable,
  StyledTableHeader,
  StyledTableTd,
  StyledTableTr,
  StyledTableWrap,
  TableTh,
} from "./style";
import TableRow from "./TableRow";

type DataItem = {
  id: string | number;
  [key: string]: string | number;
};

export interface ITableColumn<T = any> {
  label: string;
  render: (row: T) => ReactNode;
}

export interface ITableProps {
  data?: any[];
  columns: ITableColumn[];
  actions?: ReactNode;
  rowActions?: (row: any, setIsDisabled: (value: boolean) => void) => ReactNode;
  isLoading?: boolean;
  onSearch?: (term: string) => void;
  title?: string;
  disabledTable?: boolean;
}

function Table({
  data,
  columns,
  actions,
  rowActions,
  isLoading,
  title,
  disabledTable,
}: ITableProps) {
  return (
    <StyledTableWrap $isDisabled={disabledTable}>
      {title && (
        <StyledTableHeader>
          <h2>{title}</h2>
          {actions}
        </StyledTableHeader>
      )}
      <Async isLoading={isLoading}>
        <StyledTable>
          <thead>
            <StyledTableTr>
              {columns.map((column: ITableColumn, index) => (
                <TableTh key={index}>{column.label}</TableTh>
              ))}
              {rowActions && <TableTh>Action</TableTh>}
            </StyledTableTr>
          </thead>
          <tbody>
            {data?.length ? (
              data.map((row) => (
                <TableRow
                  key={row._id}
                  columns={columns}
                  row={row}
                  rowActions={rowActions}
                />
              ))
            ) : (
              <StyledTableTr>
                <StyledTableTd colSpan={columns.length + (rowActions ? 1 : 0)}>
                  NO DATA
                </StyledTableTd>
              </StyledTableTr>
            )}
          </tbody>
        </StyledTable>
      </Async>
    </StyledTableWrap>
  );
}

export default Table;
