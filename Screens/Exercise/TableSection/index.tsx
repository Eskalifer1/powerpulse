"use client";

import Table, { ITableColumn } from "@/components/TableT";
import TableExerciseNavigation from "@/Screens/Exercise/TableSection/TableExerciseNavigation";
import { ExerciseType } from "@/types/Exercise";
import { Loader } from "@/uiKit/Loader/style";
import { useGetData } from "@/utils/hooks/useGetData";
import { ExerciseTableSectionWrap } from "./style";

const COLUMNS: ITableColumn<ExerciseType>[] = [
  {
    label: "Name",
    render: (row) => row.name,
  },
  {
    label: "Count",
    render: (row) => row.count,
  },
  {
    label: "Weight",
    render: (row) => row.weight,
  },
  {
    label: "Minimum Count",
    render: (row) => row.minCount,
  },
  {
    label: "Maximum Count",
    render: (row) => row.maxCount,
  },
  {
    label: "Count Up",
    render: (row) => row.countUp,
  },
  {
    label: "Weight",
    render: (row) => row.weightUp,
  },
];

const ExerciseTableSection = () => {
  const { data, isLoading } = useGetData<ExerciseType[]>("exercises/users");

  if (isLoading) return <Loader />;

  const sortedData = [...(data || [])].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <ExerciseTableSectionWrap>
      <Table
        columns={COLUMNS}
        data={sortedData}
        rowActions={(row) => <TableExerciseNavigation item={row} />}
      />
    </ExerciseTableSectionWrap>
  );
};

export default ExerciseTableSection;
