import { Metadata, ResolvingMetadata } from "next";

interface Params {
  slug: string;
}
async function getData(slug: any) {
  const res = await fetch(
    `https://events-4qv2.onrender.com/users/find/${slug}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function generateMetadata(
  { params }: { params: Params },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const { id } = params;

  const repon = await getData(params.slug);

  const previousImages = (await parent).openGraph?.images ?? [];

  return {
    title: repon.title,
    openGraph: {
      images: [repon.master_photo, ...previousImages],
      title: repon.title,
      type: "website",
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const repon = await getData(params.slug);

  return (
    <div>
      {repon.title}
      {/* {data.title} */}
      {/* {params.slug} */}
    </div>
  );
}
