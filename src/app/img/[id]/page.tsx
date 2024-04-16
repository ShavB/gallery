import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {

  const idAsNum = Number(photoId);
  if (Number.isNaN(idAsNum)) throw new Error("Invalid photo id");
  const image = await getImage(idAsNum);
  return (
    <div className="flex justify-center items-center h-[90%]">
      <img src={image.url} alt={image.name} className="w-96 h-auto"/>
    </div>
  );
}
