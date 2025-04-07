import type { Category } from "~/models";

export const getKnowledgebase = async (instance: string): Promise<Array<Category>> => {
  const response = await fetch(`https://my.appscho.com/api/v3/${instance}/knowledgebase`);
  return response.json();
};
