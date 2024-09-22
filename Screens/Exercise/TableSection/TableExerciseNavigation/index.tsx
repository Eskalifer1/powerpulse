"use client";

import useConfirmation from "@/components/Confirmation/useConfirmation";
import EditExercisesModal from "@/components/ModalEdit";
import { DefaultButtonFlex } from "@/styles/DefaultButtonFlex";
import { ExerciseType } from "@/types/Exercise";
import { handleClose } from "@/utils/functions/handleClose";
import { useApiData } from "@/utils/hooks/useApiData";
import { useInvalidateQueries } from "@/utils/hooks/useGetData";
import { FC, useState } from "react";
import {
  TableExerciseNavigationBiEditAlt,
  TableExerciseNavigationBiTrash,
  TableExerciseNavigationButtonWrap,
} from "./style";

interface PropsType {
  item: ExerciseType;
  refetch?: () => void;
}

const TableExerciseNavigation: FC<PropsType> = ({ item }) => {
  const [modalIsOpened, modalSetIsOpened] = useState(false);
  const fetchData = useApiData();
  const invalidateData = useInvalidateQueries();
  const confirm = useConfirmation();

  const handleDelete = async () => {
    await confirm({
      resolve: async () => {
        await fetchData(`exercises/deleteExercise/${item._id}`, "DELETE", {
          id: item._id,
        });
        invalidateData("exercises/users");
      },
    });
  };

  return (
    <>
      <TableExerciseNavigationButtonWrap>
        <DefaultButtonFlex $type="danger" $size="sm" onClick={handleDelete}>
          <TableExerciseNavigationBiTrash />
        </DefaultButtonFlex>
        <DefaultButtonFlex
          $type="primary"
          $size="sm"
          onClick={() => modalSetIsOpened((prev) => !prev)}
        >
          <TableExerciseNavigationBiEditAlt />
        </DefaultButtonFlex>
      </TableExerciseNavigationButtonWrap>
      <EditExercisesModal
        isOpened={modalIsOpened}
        initialData={item}
        onClose={handleClose(modalSetIsOpened)}
        onSubmit={() => invalidateData("exercises/users")}
      />
    </>
  );
};

export default TableExerciseNavigation;
