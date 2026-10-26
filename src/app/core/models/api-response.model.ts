export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PageResult<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
}
