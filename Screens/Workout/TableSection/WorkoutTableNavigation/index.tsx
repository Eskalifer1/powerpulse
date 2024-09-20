"use client";

import EditWorkoutModal from "@/components/ModalWorkoutEdit";
import { DefaultButtonFlex } from "@/styles/DefaultButtonFlex";
import { WorkoutType } from "@/types/Workout";
import Dialog from "@/uiKit/Popup/Dialog";
import Modal from "@/uiKit/Popup/Modal";
import { handleClose } from "@/utils/functions/handleClose";
import { useApiData } from "@/utils/hooks/useApiData";
import { useInvalidateQueries } from "@/utils/hooks/useGetData";
import { useTranslations } from "next-intl";
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
  const [isOpened, setIsOpened] = useState(false);
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const invalidateData = useInvalidateQueries();

  const t = useTranslations("Global.Dialogs");
  const fetchData = useApiData();

  const handleDelete = async () => {
    await fetchData(`exercises/users/training/${id}`, "DELETE", { id });
    invalidateData("exercises/users/training");
    setIsOpened(false);
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
        <DefaultButtonFlex
          $size="md"
          $type="danger"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <TableWorkoutNavigationBiTrash />
        </DefaultButtonFlex>
      </TableWorkoutNavigationButtonsWrap>
      <Dialog
        isOpened={isOpened}
        primaryButtonText={t("Delete")}
        primaryButtonOnClick={handleDelete}
        onCLose={handleClose(setIsOpened)}
        title={t("Title")}
        description={t("Description")}
        secondaryButtonText={t("Close")}
        secondaryButtonOnClick={handleClose(setIsOpened)}
      />
      <Modal isOpened={modalIsOpened} onCLose={handleClose(setModalIsOpened)}>
        <h2>{t("Edit")}</h2>
        <EditWorkoutModal
          initialData={item}
          onSubmit={() => invalidateData("exercises/users/training")}
          onClose={handleClose(setModalIsOpened)}
        />
      </Modal>
    </>
  );
};

export default WorkoutTableNavigation;
