import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const secret = process.env.NOTION_KEY;
const databaseId = process.env.NOTION_DATABASE_ID;

export async function GET(res: Response) {
  const notion = new Client({ auth: secret });
  if (!secret || !databaseId)
    throw new Error("Missing notion secret or DB-ID.");

  const query = await notion.databases.query({ database_id: databaseId });

  return NextResponse.json(query.results);
}
