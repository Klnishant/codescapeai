import { NextResponse } from "next/server";
import { sanityClient } from "@/sanity/lib/sanityClient";

export const revalidate = 60;

const query = `*[_type == "blog"] | order(date desc)[0...100]{
  _id,
  title,
  date,
  "imageUrl": image.asset->url,
  tags,
  excerpt,
  "slug": slug.current
}`;

export async function GET() {
  try {
    const data = await sanityClient.fetch(query);
    return NextResponse.json(data ?? []);
  } catch (err: any) {
    console.error("Error fetching articles from Sanity", err?.message);
    return NextResponse.json(
      { message: "Failed to load articles" },
      { status: 500 }
    );
  }
}
