import React from "react";
import { DroppableProvided } from "react-beautiful-dnd";
import { StrictModeDroppable } from "../StrictModeDroppable";
import TransferListItem from "./Item";
import { TransferListColumnDropableWrap, TransferListColumnTitle, TransferListColumnTitleWrap, TransferListColumnWrap } from "./styled";

type ItemType = {
  _id: string;
  [key: string]: any;
};

type PropsType<T extends ItemType> = {
  title: string;
  droppableId: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  getItemId: (item: T) => string;
};

function TransferListColumn<T extends ItemType>({
  title,
  droppableId,
  items,
  renderItem,
  getItemId,
}: PropsType<T>) {
  return (
    <TransferListColumnWrap>
      <TransferListColumnTitleWrap>
        <TransferListColumnTitle>{title}</TransferListColumnTitle>
      </TransferListColumnTitleWrap>

      <StrictModeDroppable droppableId={droppableId}>
        {(provided: DroppableProvided) =>
          (
            <TransferListColumnDropableWrap
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <TransferListItem
                  key={getItemId(item)}
                  item={item}
                  index={index}
                  renderItem={renderItem}
                  getItemId={getItemId}
                />
              ))}
            </TransferListColumnDropableWrap>
          ) as any
        }
      </StrictModeDroppable>
    </TransferListColumnWrap>
  );
}

export default TransferListColumn;
