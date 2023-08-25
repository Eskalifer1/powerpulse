import { ExerciseType } from "@/types/Exercise";
import { tableHeaderType } from "@/types/TableHeaderType";
import { TableProps } from "@/types/ui/Table";
import { FC } from "react";
import Table from "../Table";
import { TableWithTitleTitle, TableWithTitleWrap } from "./style";

interface PropsType extends TableProps {
  title: string;
  exercises: ExerciseType[];
  headersTitle: tableHeaderType<any>[];
}

const TableWithTitle: FC<PropsType> = ({ title, ...props }) => {
  return (
    <TableWithTitleWrap>
      <TableWithTitleTitle>{title}</TableWithTitleTitle>
      <Table {...props} />
    </TableWithTitleWrap>
  );
};

export default TableWithTitle;
