import Link from "next/link";

async function getData() {
  const res = await fetch("https://events-4qv2.onrender.com/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const { data } = await getData();

  return (
    <div>
      {data.map((artist: any) => (
        <Link
          key={artist._id}
          href={`/artists/${artist._id}`}>
          <p> привет{artist.title}</p>
        </Link>
      ))}
    </div>
  );
}
