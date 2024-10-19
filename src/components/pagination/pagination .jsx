import "./pagination.css"; // Optional: Import your styles for pagination

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="pagination-controls">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`pagination-button ${
            currentPage === index + 1 ? "active" : ""
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
