export interface photoListTpe {
  fileUrl: string;
  fileName: string;
  createdAt: string;
  updatedAt: string;
  id: number;
}

export interface portfolioContentType {
  title: string;
  photoList: photoListTpe;
  uploader: {
    name: string;
    email: string;
    introduction: string;
  };
  createdAt: string;
  updatedAt: string;
  commentCount: number;
}

export interface detailPortfolioType {
  title: string;
  photoList: photoListTpe;
  uploader: {
    name: string;
    email: string;
    introduction: string;
    profile: string;
  };
  createdAt: string;
  updatedAt: string;
  commentList: string[];
  likeCount: number;
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
