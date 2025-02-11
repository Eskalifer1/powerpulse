import { Loader } from "@/uiKit/Loader/style";
import {
  DragDropContext as DragDropContext1,
  DragDropContextProps,
} from "react-beautiful-dnd";
import { useFormContext, useWatch } from "react-hook-form";
import TransferListColumn from "./Column";
import { TransferListWrap } from "./styled";

export const DragDropContext =
  DragDropContext1 as React.ComponentClass<DragDropContextProps>;

type ItemType = {
  _id: string;
  [key: string]: any;
};

type PropsType<T extends ItemType> = {
  name: string;
  allItems: T[] | undefined;
  isLoading?: boolean;
  renderItem: (item: T) => React.ReactNode;
  getItemId: (item: T) => string;
  titles: {
    available: string;
    selected: string;
  };
};

function TransferList<T extends ItemType>({
  name,
  allItems,
  isLoading = false,
  renderItem,
  getItemId,
  titles,
}: PropsType<T>) {
  const { control, setValue } = useFormContext();
  const selectedIds = useWatch({ name, control }) || [];

  if (isLoading) return <Loader />;
  if (!allItems) return null;

  const selectedItems = selectedIds
    .map((id: string) => allItems.find((item) => getItemId(item) === id))
    .filter(Boolean) as T[];
  const availableItems = allItems.filter(
    (item) => !selectedIds.includes(getItemId(item))
  );

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      // Reordering within the same list
      const items = Array.from(
        source.droppableId === "available" ? availableItems : selectedItems
      );
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      if (source.droppableId === "selected") {
        setValue(
          name,
          items.map((item) => getItemId(item))
        );
      }
    } else {
      const sourceItems = Array.from(
        source.droppableId === "available" ? availableItems : selectedItems
      );
      const destItems = Array.from(
        destination.droppableId === "available" ? availableItems : selectedItems
      );
      const [movedItem] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, movedItem);

      if (destination.droppableId === "selected") {
        setValue(
          name,
          destItems.map((item) => getItemId(item))
        );
      } else {
        setValue(
          name,
          sourceItems.map((item) => getItemId(item))
        );
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {/* @ts-ignore */}
      <TransferListWrap>
        <TransferListColumn
          title={titles.available}
          droppableId="available"
          items={availableItems}
          renderItem={renderItem}
          getItemId={getItemId}
        />
        <TransferListColumn
          title={titles.selected}
          droppableId="selected"
          items={selectedItems}
          renderItem={renderItem}
          getItemId={getItemId}
        />
      </TransferListWrap>
    </DragDropContext>
  );
}

export default TransferList;
