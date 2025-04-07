import type { Category } from "~/models";

export const getKnowledgebase = async (service: string): Promise<Array<Category>> => {
  const response = await fetch(`https://my.appscho.com/api/v3/${service}/knowledgebase`);
  return response.json();
};
