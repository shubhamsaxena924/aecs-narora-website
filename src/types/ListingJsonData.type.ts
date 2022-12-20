// Used in Tenders, Downloads, Gallery Drive Links
export type JsonListItemType = {
  title: string;
  target: string;
};

export type JsonListDataType = {
  [category: string]: JsonListItemType[];
};

// Used in Gallery View
export type JsonGalleryDataType = {
  [category: string]: string[];
};

// Used in About AEES, Our Mission
export type JsonParagraphDataType = {
  [category: string]: string[]; // For paragraphs
};

// Used in AEES Council, Staff Table View (Explicitly Converted), SAC, LMC, Strength
export type JsonTableDataType = {
  [category: string]: {
    fields: string[];
    data: string[][];
  };
};

// Used in Principal Desk
export type JsonMessageDataType = {
  name: string;
  avatar: string;
  message: string[]; // For paragraphs
};

// Used in Staff
export type JsonTeacherDataType = {
  name: string;
  avatar: string;
  subject: string;
  designation: string;
};

export type JsonStaffDataType = {
  [category: string]: JsonTeacherDataType[];
};
