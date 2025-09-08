import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="flex w-full relative justify-center items-center h-full">
      <Spinner size="text-3xl" />
    </div>
  );
}
