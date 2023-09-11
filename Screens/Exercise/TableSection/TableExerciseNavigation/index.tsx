"use client";

import { ExerciseType } from "@/types/Exercise";
import { useApiData } from "@/utils/hooks/useApiData";
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
  refetch?: () => void;
}

const Dialog = dynamic(() => import("@/uiKit/Popup/Dialog"));

const TableExerciseNavigation: FC<PropsType> = ({
  item,
  refetch = () => {},
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const t = useTranslations("Global.Dialogs");
  const fetchData = useApiData();

  const handleClose = () => {
    setIsOpened(false);
  };

  const handleDelete = async () => {
    await fetchData(`exercises/deleteExercise/${item._id}`, "DELETE", {
      id: item._id,
    });
    refetch();
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
