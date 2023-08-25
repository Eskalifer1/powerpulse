"use client";

import Table from "@/components/Table";
import { ExerciseType } from "@/types/Exercise";
import { Loader } from "@/uiKit/Loader/style";
import { exerciseTableHeaders } from "@/utils/consts/exerciseTableHeaders";
import { useGetData } from "@/utils/hooks/useGetData";
import { ExerciseTableSectionWrap } from "./style";

const ExerciseTableSection = () => {
  const { data, isLoading, isFetching } =
    useGetData<ExerciseType[]>("exercises/users");
  console.log(data);
  if (isLoading || isFetching) return <Loader $marginTop="10rem" />;
  return (
    <ExerciseTableSectionWrap>
      <Table exercises={data || []} headersTitle={exerciseTableHeaders} />
    </ExerciseTableSectionWrap>
  );
};

export default ExerciseTableSection;
