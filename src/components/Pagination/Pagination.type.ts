export type CreatePageUrl = (pageNumber: string | number) => string;

export type PaginationProps = {
  classNames?: string;
  totals: number;
  limit: number;
};
