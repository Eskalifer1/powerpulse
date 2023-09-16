"use client";

import EditExercisesModal from "@/components/ModalEdit";
import { DefaultButtonFlex } from "@/styles/DefaultButtonFlex";
import { ExerciseType } from "@/types/Exercise";
import { handleClose } from "@/utils/functions/handleClose";
import { useApiData } from "@/utils/hooks/useApiData";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
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

const Dialog = dynamic(() => import("@/uiKit/Popup/Dialog"));
const Modal = dynamic(() => import("@/uiKit/Popup/Modal"));

const TableExerciseNavigation: FC<PropsType> = ({
  item,
  refetch = () => {},
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [modalIsOpened, modalSetIsOpened] = useState(false);
  const t = useTranslations("Global.Dialogs");
  const fetchData = useApiData();

  const handleDelete = async () => {
    await fetchData(`exercises/deleteExercise/${item._id}`, "DELETE", {
      id: item._id,
    });
    refetch();
  };

  return (
    <>
      <TableExerciseNavigationButtonWrap>
        <DefaultButtonFlex
          $type="danger"
          $size="sm"
          onClick={() => setIsOpened((prev) => !prev)}
        >
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
      <Modal onCLose={handleClose(modalSetIsOpened)} isOpened={modalIsOpened}>
        <h3>{t("Edit")}</h3>
        <EditExercisesModal
          initialData={item}
          refetch={refetch}
          onClose={handleClose(modalSetIsOpened)}
        />
      </Modal>
    </>
  );
};

export default TableExerciseNavigation;
