"use client";

import useConfirmation from "@/components/Confirmation/useConfirmation";
import EditExercisesModal from "@/components/ModalEdit";
import { DefaultButtonFlex } from "@/styles/DefaultButtonFlex";
import { ExerciseType } from "@/types/Exercise";
import { handleClose } from "@/utils/functions/handleClose";
import { useApiData } from "@/utils/hooks/useApiData";
import { useInvalidateQueries } from "@/utils/hooks/useGetData";
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

const Dialog = dynamic(() => import("@/components/Confirmation/Dialog"));
const Modal = dynamic(() => import("@/uiKit/Popup/Modal"));

const TableExerciseNavigation: FC<PropsType> = ({ item }) => {
  const [modalIsOpened, modalSetIsOpened] = useState(false);
  const t = useTranslations("Global.Dialogs");
  const fetchData = useApiData();
  const invalidateData = useInvalidateQueries();
  const confirm = useConfirmation();

  const handleDelete = async () => {
    confirm()
      .then(async () => {
        await fetchData(`exercises/deleteExercise/${item._id}`, "DELETE", {
          id: item._id,
        });
        invalidateData("exercises/users");
      })
      .catch((e) => {
        console.error(e);
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
      <Modal onCLose={handleClose(modalSetIsOpened)} isOpened={modalIsOpened}>
        <h3>{t("Edit")}</h3>
        <EditExercisesModal
          initialData={item}
          onClose={handleClose(modalSetIsOpened)}
          onSubmit={() => invalidateData("exercises/users")}
        />
      </Modal>
    </>
  );
};

export default TableExerciseNavigation;
