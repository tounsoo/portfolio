async function getData() {
  const res = await fetch("http://localhost:3000/api/hello");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const data = await getData();
  return (
    <div>
      <ul>
        {data.map((project: typeof data, i: number) => {
          const title = project.properties["Name"].title[0].text.content;
          return <li key={title}>{title}</li>;
        })}
      </ul>
    </div>
  );
}
