import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";
import "@uploadthing/react/styles.css";
import { getImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  async function Images() {
    const images = await getImages();
    return (
      <div className="m-4 flex h-60 flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex h-40 w-32 flex-col">
            <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              alt={image.name}
              height={160}
              width={160}
            />
            </Link>
            {/* <div>{image.name}</div> */}
            <div>{image.id}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above!
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
