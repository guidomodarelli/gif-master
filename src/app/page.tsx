import UploadFiles from "@/components/UploadFiles/UploadFiles";

export default function Home() {
  return (
    <UploadFiles
      buttonLabel="Upload!"
      mimeTypesAllowed={["APNG", "AVIF"]}
      mediaType="image"
      andMoreMimeTypes
    />
  );
}
