import { TableProps } from "@/types/ui/Table";
import { FC, memo } from "react";
import Table from "../Table";
import { TableWithTitleTitleWrap, TableWithTitleWrap } from "./style";

interface PropsType extends TableProps {
  title: string;
  globalNavigation: any;
  isDisabled?: boolean;
}

const TableWithTitle: FC<PropsType> = ({
  title,
  globalNavigation,
  isDisabled,
  ...props
}) => {
  return (
    <TableWithTitleWrap $isDisabled={isDisabled}>
      <TableWithTitleTitleWrap>
        <h2>{title}</h2>
        {globalNavigation}
      </TableWithTitleTitleWrap>
      <Table {...props} />
    </TableWithTitleWrap>
  );
};

export default memo(TableWithTitle);
