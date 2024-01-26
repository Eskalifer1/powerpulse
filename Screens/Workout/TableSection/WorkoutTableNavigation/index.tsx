"use client";

import EditWorkoutModal from "@/components/ModalWorkoutEdit";
import { DefaultButtonFlex } from "@/styles/DefaultButtonFlex";
import { WorkoutType } from "@/types/Workout";
import Dialog from "@/uiKit/Popup/Dialog";
import Modal from "@/uiKit/Popup/Modal";
import { handleClose } from "@/utils/functions/handleClose";
import { useApiData } from "@/utils/hooks/useApiData";
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
  refetch: () => void;
  item: WorkoutType;
  setIsDisabled: Dispatch<SetStateAction<string | null>>;
}

const WorkoutTableNavigation: FC<PropsType> = ({
  id,
  refetch,
  item,
  setIsDisabled,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [modalIsOpened, setModalIsOpened] = useState(false);

  const t = useTranslations("Global.Dialogs");
  const fetchData = useApiData();

  const handleDelete = async () => {
    await fetchData(`exercises/users/training/${id}`, "DELETE", { id });
    refetch();
    setIsOpened(false);
  };

  const handleUpdateWorkout = async () => {
    setIsDisabled(id);
    const value = await fetchData("exercises/updateExercises", "PATCH", {
      trainingId: id,
    });
    setIsDisabled(null);
    console.log(value);
    refetch();
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
          refetch={refetch}
          initialData={item}
          onClose={handleClose(setModalIsOpened)}
        />
      </Modal>
    </>
  );
};

export default WorkoutTableNavigation;
