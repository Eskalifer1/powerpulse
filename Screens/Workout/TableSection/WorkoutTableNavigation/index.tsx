"use client";

import useConfirmation from "@/components/Confirmation/useConfirmation";
import EditWorkoutModal from "@/components/ModalWorkoutEdit";
import { DefaultButtonFlex } from "@/styles/DefaultButtonFlex";
import { WorkoutType } from "@/types/Workout";
import { handleClose } from "@/utils/functions/handleClose";
import { useApiData } from "@/utils/hooks/useApiData";
import { useInvalidateQueries } from "@/utils/hooks/useGetData";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { TableWorkoutNavigationBiPlusCircle } from "../TableWorkoutRowNavigation/style";
import {
  TableWorkoutNavigationBiEditAlt,
  TableWorkoutNavigationBiTrash,
  TableWorkoutNavigationButtonsWrap,
} from "./style";

interface PropsType {
  id: string;
  item: WorkoutType;
  setIsDisabled: Dispatch<SetStateAction<string | null>>;
}

const WorkoutTableNavigation: FC<PropsType> = ({ id, item, setIsDisabled }) => {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const invalidateData = useInvalidateQueries();
  const confirm = useConfirmation();

  const fetchData = useApiData();

  const handleDelete = async () => {
    confirm({
      resolve: async () => {
        await fetchData(`exercises/users/training/${id}`, "DELETE", { id });
        invalidateData("exercises/users/training");
      },
    });
  };

  const handleUpdateWorkout = async () => {
    setIsDisabled(id);
    await fetchData("exercises/updateExercises", "PATCH", {
      trainingId: id,
    });
    setIsDisabled(null);
    invalidateData("exercises/users/training");
  };

  return (
    <>
      <TableWorkoutNavigationButtonsWrap>
        <DefaultButtonFlex
          $size="md"
          $type="primary"
          onClick={handleUpdateWorkout}
        >
          <TableWorkoutNavigationBiPlusCircle />
        </DefaultButtonFlex>
        <DefaultButtonFlex
          $size="md"
          $type="secondary"
          onClick={() => setModalIsOpened((prev) => !prev)}
        >
          <TableWorkoutNavigationBiEditAlt />
        </DefaultButtonFlex>
        <DefaultButtonFlex $size="md" $type="danger" onClick={handleDelete}>
          <TableWorkoutNavigationBiTrash />
        </DefaultButtonFlex>
      </TableWorkoutNavigationButtonsWrap>
      <EditWorkoutModal
        isOpened={modalIsOpened}
        initialData={item}
        onSubmit={() => invalidateData("exercises/users/training")}
        onClose={handleClose(setModalIsOpened)}
      />
    </>
  );
};

export default WorkoutTableNavigation;
