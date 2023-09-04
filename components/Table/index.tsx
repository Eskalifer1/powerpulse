import { TableProps } from "@/types/ui/Table";
import { useTranslations } from "next-intl";
import { FC } from "react";
import TableHeadItem from "./TableHeadItem";
import { TableTh } from "./TableHeadItem/style";
import TableRow from "./TableRow";
import { TableErrorTitle, TableSection, TableWrap } from "./style";

const Table: FC<TableProps> = ({
  items,
  headersTitle,
  navigationRow,
  navigationColumn,
}) => {
  const t = useTranslations("Global");

  if (headersTitle.length <= 0)
    return <TableErrorTitle>{t("Error")}</TableErrorTitle>;

  return (
    <TableSection>
      <TableWrap>
        <thead>
          <tr>
            {headersTitle.map((header, index) => (
              <TableHeadItem headTitle={header} key={index} />
            ))}
            {navigationColumn && <TableTh>{navigationColumn}</TableTh>}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <TableRow
              item={item}
              titleHeaders={headersTitle}
              key={index}
              navigationRow={navigationRow}
            />
          ))}
        </tbody>
      </TableWrap>
    </TableSection>
  );
};

export default Table;
