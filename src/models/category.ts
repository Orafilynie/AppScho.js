export interface Category {
  hidden_on: null | string;
  id: number;
  image: {
    url: string;
  };
  kind: "link" | "text";
  subcategories: Array<Category> | null;
  tag: null | string;
  translations: Array<{
    content: string;
    id: number;
    language: string;
    link: null | string;
    title: string;
  }>;
  visibility: "all";
  visible_on: null | string;
}
