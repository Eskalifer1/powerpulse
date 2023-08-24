export interface TransferListColumnType {
  id: string;
  title: string;
  columnIds: string[]; // Assuming these are IDs of tasks
}

export interface TransferListDataType<T> {
  listData: T[];
  columns: Record<string, TransferListColumnType>;
  columnOrder: string[];
}
