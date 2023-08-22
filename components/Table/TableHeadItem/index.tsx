import { tableHeaderType } from "@/types/TableHeaderType";
import { FC } from "react";
import { TableTh } from "./style";

interface PropsType {
  headTitle: tableHeaderType<any>;
}

const TableHeadItem: FC<PropsType> = ({ headTitle }) => {
  return <TableTh>{headTitle.name}</TableTh>;
};

export default TableHeadItem;
