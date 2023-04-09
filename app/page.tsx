import { Client } from "@notionhq/client";

export const revalidate = 600;

async function getData() {
  const secret = process.env.NOTION_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;
  const notion = new Client({ auth: secret });
  if (!secret || !databaseId)
    throw new Error("Missing notion secret or DB-ID.");

  const query = await notion.databases.query({ database_id: databaseId });

  return query;
}
export default async function Home() {
  const data = await getData();
  return (
    <div>
      <ul>
        {data.results.map((project) => {
          if ("properties" in project) {
            if ("title" in project.properties.Name) {
              const title = project.properties.Name.title[0].plain_text;
              const id = project.id;
              return <li key={id}>{title}</li>;
            }
          }
        })}
      </ul>
    </div>
  );
}
