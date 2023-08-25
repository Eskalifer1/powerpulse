import { TableProps } from "@/types/ui/Table";
import { useTranslations } from "next-intl";
import { FC } from "react";
import TableHeadItem from "./TableHeadItem";
import TableRow from "./TableRow";
import { TableErrorTitle, TableSection, TableWrap } from "./style";

const Table: FC<TableProps> = ({ exercises, headersTitle }) => {
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
          </tr>
        </thead>
        <tbody>
          {exercises.map((item, index) => (
            <TableRow exercise={item} titleHeaders={headersTitle} key={index} />
          ))}
        </tbody>
      </TableWrap>
    </TableSection>
  );
};

export default Table;
