import {
  Draggable as Draggable1,
  DraggableProps,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { TransferListItemText, TransferListItemWrap } from "./styled";

export const Draggable = Draggable1 as React.ComponentClass<DraggableProps>;

type ItemType = {
  _id: string;
  [key: string]: any;
};

type PropsType<T extends ItemType> = {
  item: T;
  index: number;
  renderItem: (item: T) => React.ReactNode;
  getItemId: (item: T) => string;
};

function TransferListItem<T extends ItemType>({
  item,
  index,
  renderItem,
  getItemId,
}: PropsType<T>) {
  return (
    <Draggable draggableId={getItemId(item)} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) =>
        (
          <TransferListItemWrap
            $isDraging={snapshot.isDragging}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <TransferListItemText>{renderItem(item)}</TransferListItemText>
          </TransferListItemWrap>
        ) as any
      }
    </Draggable>
  );
}

export default TransferListItem;
