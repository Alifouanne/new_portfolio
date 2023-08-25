"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="m-10 flex min-h-[500px]  flex-col  items-center justify-center  text-gray-950 dark:text-stone-200">
      <h2 className=" bg-gradient-to-r from-[#6257b4] to-[#ca4d52] bg-clip-text text-base font-bold text-transparent dark:from-[#45C6F9] dark:to-[#8CFBA1] sm:text-2xl">
        OOPS!! Something went wrong !
      </h2>
      <p className="m-5 text-base sm:text-xl">{error.message}</p>
      <button
        className="m-5 rounded-full border border-red-500 bg-transparent p-2 font-semibold transition-all hover:scale-110  hover:border-4 active:scale-75"
        onClick={() => reset()}
      >
        Try again
      </button>
    </section>
  );
}
