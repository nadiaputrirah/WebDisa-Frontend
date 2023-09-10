const Pagination = ({
  totalItems,
  currentPage,
  pageCount,
  gotoPage,
  previousPage,
  nextPage,
  maxVisible = 5,
  limit,
}) => {
  const visiblePages = Math.min(maxVisible, pageCount);
  const visiblePagesStart = Math.max(
    1,
    currentPage - Math.floor(visiblePages / 2)
  );
  const visiblePagesEnd = Math.min(
    pageCount,
    visiblePagesStart + visiblePages - 1
  );
  const visiblePagesArray = Array.from(
    { length: visiblePagesEnd - visiblePagesStart + 1 },
    (v, k) => k + visiblePagesStart
  );

  return (
    <div className="flex justify-end items-center px-4 mt-4">
      <div className="w-max flex justify-between items-center">
        {currentPage != 1 && (
          <span
            className="text-rose mr-3 hover:text-pink-700 hover:cursor-pointer"
            onClick={() => previousPage()}
          >
            {"<<"}
          </span>
        )}
        {visiblePagesArray.map((val) => {
          return (
            <span
              style={{ borderRadius: "6px" }}
              className={`  px-3 shadow-sm   mr-3 cursor-pointer  ${
                val === currentPage
                  ? "bg-[#439A97] text-white "
                  : "hover:text-pink-700"
              }`}
              onClick={() => gotoPage(val)}
            >
              {val}
            </span>
          );
        })}
        {currentPage < pageCount && (
          <span
            className="text-rose ml-3 hover:text-pink-700 hover:cursor-pointer"
            onClick={() => nextPage()}
          >
            {">>"}
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
