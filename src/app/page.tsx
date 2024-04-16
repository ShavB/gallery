import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";
import "@uploadthing/react/styles.css";
import { getImages } from "~/server/queries";
import Image from "next/image";

export default async function HomePage() {
  async function Images() {
    const images = await getImages();
    return (
      <div className="m-4 h-60 flex justify-center flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex h-40 w-32 flex-col">
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              alt={image.name}
              height={160}
              width={160}
            />
            <div>{image.name}</div>
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
