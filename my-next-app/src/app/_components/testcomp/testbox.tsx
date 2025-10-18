export  function FlexBoxes() {
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:flex-nowrap px-4 md:px-8 py-8 bg-amber-100 min-h-screen">
      {/* Box 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-blue-400 text-white text-center p-10 rounded-lg shadow-lg">
        Box 1
      </div>

      {/* Box 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-green-400 text-white text-center p-10 rounded-lg shadow-lg">
        Box 2
      </div>

      {/* Box 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-pink-400 text-white text-center p-10 rounded-lg shadow-lg">
        Box 3
      </div>
    </div>
  );
}
