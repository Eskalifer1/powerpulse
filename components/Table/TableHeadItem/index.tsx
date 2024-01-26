import { tableHeaderType } from "@/types/TableHeaderType";
import { useTranslations } from "next-intl";
import { FC, memo } from "react";
import { TableTh } from "./style";

interface PropsType {
  headTitle: tableHeaderType<any>;
}

const TableHeadItem: FC<PropsType> = memo(({ headTitle }) => {
  const t = useTranslations("Global.TableHeaders");

  return <TableTh>{t(headTitle.name)}</TableTh>;
});

TableHeadItem.displayName = "TableHeadItem";

export default TableHeadItem;
