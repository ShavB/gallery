import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";
import "@uploadthing/react/styles.css";
import { getImages } from "~/server/queries";

export default async function HomePage() {
  async function Images() {
    const images = await getImages();
    return (
      <div className="m-4 flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <img src={image.url} />
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
