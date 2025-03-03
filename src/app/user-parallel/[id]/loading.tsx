export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 w-full h-full border-4 border-transparent border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 w-3/4 h-3/4 border-4 border-transparent border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
      </div>
      <p className="text-blue-500 font-medium mt-4"></p>
    </div>
  );
}
