function Pagination({ page, setPage }) {
  const prev = (
    <button data-testid="prev-page" disabled={page === 1} onClick={() => setPage(page - 1)}>
      PREV
    </button>
  );
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = (
    <button data-testid="next-page" onClick={() => setPage(page + 1)}>
      NEXT
    </button>
  );
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">10</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
