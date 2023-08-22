import { ExerciseType } from "@/types/Exercise";
import { tableHeaderType } from "@/types/TableHeaderType";
import { useTranslations } from "next-intl";
import { FC } from "react";
import TableHeadItem from "./TableHeadItem";
import TableRow from "./TableRow";
import { TableErrorTitle, TableSection, TableWrap } from "./style";

interface PropsType {
  exercises: ExerciseType[];
  headersTitle: tableHeaderType<any>[];
}

const Table: FC<PropsType> = ({ exercises, headersTitle }) => {
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
