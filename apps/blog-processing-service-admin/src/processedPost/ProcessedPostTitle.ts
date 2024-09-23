import { ProcessedPost as TProcessedPost } from "../api/processedPost/ProcessedPost";

export const PROCESSEDPOST_TITLE_FIELD = "id";

export const ProcessedPostTitle = (record: TProcessedPost): string => {
  return record.id?.toString() || String(record.id);
};
