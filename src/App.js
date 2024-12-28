import { useState } from "react";
import { getUsers, getLength } from "./api/Users";
import "./App.css";
import Table from "./Components/Table";
import Pagination from "./Components/Pagination";
import SelectLimit from "./Components/SelectLimit";

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  let totalPage = Math.ceil(getLength() / limit);
  let pageNo;

  if (page <= totalPage) {
    pageNo = page;
  } else {
    setPage(totalPage);
    pageNo = page;
  }

  const handlePageChange = (value) => {
    if (value === "&laquo;" || value === "... ") {
      setPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "&raquo;" || value === " ...") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  };

  return (
    <div className="App">
      <Table users={getUsers(page, limit)} />
      <div className="pagination-container">
        <SelectLimit onLimitChange={setLimit} />
        <Pagination
          totalPage={totalPage}
          page={pageNo}
          limit={limit}
          siblings={1}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;
