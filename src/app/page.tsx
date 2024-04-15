import { db } from "~/server/db";
export const dynamic = 'force-dynamic'

const mockUrls = [
  "https://utfs.io/f/3e37ea68-6628-4dd3-8ad7-c74983959286-xvehsj.jpg",
  "https://utfs.io/f/73ec7006-bcea-4dfb-8027-ebd05e146201-8uywwd.jpg",
  "https://utfs.io/f/657e21af-32a9-45f7-94bd-b155c06088c5-kgdp6w.jpg",
  "https://utfs.io/f/d393c670-e47b-4244-9d19-c358e0584644-dx2n3r.jpg",
  "https://utfs.io/f/d28ac2d2-5059-42ed-8fe3-4d16d70ffb43-7bnucb.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
    {mockImages.map((image) => (
      <div key={image.id} className="w-48 h-60">
        <img src={image.url}/>
      </div>
    ))}
      </div>
    </main>
  );
}
