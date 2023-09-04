"use client";

import { ExerciseType } from "@/types/Exercise";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { FC, useState } from "react";
import {
  TableExerciseNavigationBiTrash,
  TableExerciseNavigationButton,
  TableExerciseNavigationButtonWrap,
} from "./style";

interface PropsType {
  item: ExerciseType;
}

const Dialog = dynamic(() => import("@/uiKit/Popup/Dialog"));

const TableExerciseNavigation: FC<PropsType> = ({ item }) => {
  const [isOpened, setIsOpened] = useState(false);
  const t = useTranslations("Global.Dialogs");

  const handleClose = () => {
    setIsOpened(false);
  };

  const handleDelete = () => {
    console.log(item._id);
  };

  return (
    <>
      <TableExerciseNavigationButtonWrap>
        <TableExerciseNavigationButton
          $type="danger"
          $size="sm"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <TableExerciseNavigationBiTrash />
        </TableExerciseNavigationButton>
      </TableExerciseNavigationButtonWrap>
      <Dialog
        isOpened={isOpened}
        primaryButtonText={t("Delete")}
        primaryButtonOnClick={handleDelete}
        onCLose={handleClose}
        title={t("Title")}
        description={t("Description")}
        secondaryButtonText={t("Close")}
        secondaryButtonOnClick={handleClose}
      />
    </>
  );
};

export default TableExerciseNavigation;
