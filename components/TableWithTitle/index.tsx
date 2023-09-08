import { TableProps } from "@/types/ui/Table";
import { FC } from "react";
import Table from "../Table";
import { TableWithTitleTitleWrap, TableWithTitleWrap } from "./style";

interface PropsType extends TableProps {
  title: string;
  globalNavigation: any;
}

const TableWithTitle: FC<PropsType> = ({
  title,
  globalNavigation,
  ...props
}) => {
  return (
    <TableWithTitleWrap>
      <TableWithTitleTitleWrap>
        <h2>{title}</h2>
        {globalNavigation}
      </TableWithTitleTitleWrap>
      <Table {...props} />
    </TableWithTitleWrap>
  );
};

export default TableWithTitle;
