export interface portfolioContentType {
  title: string;
  photoList: {
    fileUrl: string;
    fileName: string;
    createdAt: string;
    updatedAt: string;
    id: number;
  };
  uploader: {
    name: string;
    email: string;
    introduction: string;
  };
  createdAt: string;
  updatedAt: string;
  commentCount: number;
}

interface sortDataType {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface portfolioListModel {
  content: portfolioContentType[];
  pageable: {
    sort: sortDataType;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: sortDataType;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
