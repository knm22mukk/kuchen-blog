type Body = {
  fieldId: 'richEditor' | 'html';
  richText: string;
  htmlText: string;
};

export type Blog = {
  id: string;
  title: string;
  image: {
    url: string;
  };
  description: string;
  body: Body[];
  category: Category;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
