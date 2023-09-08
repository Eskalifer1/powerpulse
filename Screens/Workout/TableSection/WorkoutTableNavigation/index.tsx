"use client";

import { DefaultButtonFlex } from "@/styles/DefaultButtonFlex";
import Dialog from "@/uiKit/Popup/Dialog";
import { useApiData } from "@/utils/hooks/useApiData";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { TableWorkoutNavigationBiTrash } from "./style";

interface PropsType {
  id: string;
  refetch: () => void;
}

const WorkoutTableNavigation: FC<PropsType> = ({ id, refetch }) => {
  const [isOpened, setIsOpened] = useState(false);
  const t = useTranslations("Global.Dialogs");
  const fetchData = useApiData();

  const handleClose = () => {
    setIsOpened(false);
  };
  const handleDelete = async () => {
    await fetchData(`exercises/users/training/${id}`, "DELETE", { id });
    refetch();
    setIsOpened(false);
  };
  return (
    <>
      <DefaultButtonFlex
        $size="md"
        $type="danger"
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <TableWorkoutNavigationBiTrash />
      </DefaultButtonFlex>
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

export default WorkoutTableNavigation;
