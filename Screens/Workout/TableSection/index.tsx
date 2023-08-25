"use client";

import TableWithTitle from "@/components/TableWithTitle";
import { WorkoutType } from "@/types/Workout";
import { Loader } from "@/uiKit/Loader/style";
import { exerciseTableHeaders } from "@/utils/consts/exerciseTableHeaders";
import { useGetData } from "@/utils/hooks/useGetData";
import { TableSectionWrap } from "./style";

const TableSection = () => {
  const { data, isLoading, isFetching } = useGetData<WorkoutType[]>(
    "exercises/users/training"
  );
  console.log(data);
  if (isLoading || isFetching) return <Loader $marginTop="2rem" />;
  return (
    <TableSectionWrap>
      {data?.map((training) => (
        <TableWithTitle
          title={training.name}
          exercises={training.exercisesId}
          headersTitle={exerciseTableHeaders}
        />
      ))}
      {/* <Table exercises={data || []} headersTitle={exerciseTableHeaders} /> */}
    </TableSectionWrap>
  );
};

export default TableSection;
