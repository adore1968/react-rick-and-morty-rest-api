import { useApp } from "../context/AppContext";

function NavPage() {
  const { page, handleNextPage, info } = useApp();

  return (
    <header className="d-flex justify-content-between align-items-center">
      <p className="mb-0">Page: {page}</p>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={handleNextPage}
      >
        Page {info.next !== null ? page + 1 : "1"}
      </button>
    </header>
  );
}
export default NavPage;
