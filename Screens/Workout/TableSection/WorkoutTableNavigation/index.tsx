"use client";

import EditWorkoutModal from "@/components/ModalWorkoutEdit";
import { DefaultButtonFlex } from "@/styles/DefaultButtonFlex";
import { WorkoutType } from "@/types/Workout";
import Dialog from "@/uiKit/Popup/Dialog";
import Modal from "@/uiKit/Popup/Modal";
import { handleClose } from "@/utils/functions/handleClose";
import { useApiData } from "@/utils/hooks/useApiData";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import {
  TableWorkoutNavigationBiEditAlt,
  TableWorkoutNavigationBiTrash,
  TableWorkoutNavigationButtonsWrap,
} from "./style";

interface PropsType {
  id: string;
  refetch: () => void;
  item: WorkoutType;
}

const WorkoutTableNavigation: FC<PropsType> = ({ id, refetch, item }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [modalIsOpened, setModalIsOpened] = useState(false);

  const t = useTranslations("Global.Dialogs");
  const fetchData = useApiData();

  const handleDelete = async () => {
    await fetchData(`exercises/users/training/${id}`, "DELETE", { id });
    refetch();
    setIsOpened(false);
  };
  return (
    <>
      <TableWorkoutNavigationButtonsWrap>
        <DefaultButtonFlex
          $size="md"
          $type="primary"
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
