import { tableHeaderType } from "@/types/TableHeaderType";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { TableTh } from "./style";

interface PropsType {
  headTitle: tableHeaderType<any>;
}

const TableHeadItem: FC<PropsType> = ({ headTitle }) => {
  const t = useTranslations("Global.TableHeaders");

  return <TableTh>{t(headTitle.name)}</TableTh>;
};

export default TableHeadItem;
