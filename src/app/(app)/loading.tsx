import Loader from "@/components/molecules/Loader";

export default function Loading() {
  return (
    <div
      className="absolute z-50 top-0 flex flex-col items-center justify-center h-screen w-screen bg-surface_neutral"
      aria-live="polite"
    >
      <Loader />
    </div>
  );
}
