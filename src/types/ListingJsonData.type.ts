export type JsonListItemType = {
  title: string;
  target: string;
};

export type JsonListDataType = {
  [category: string]: JsonListItemType[];
};

export type JsonGalleryDataType = {
  [category: string]: string[];
};
