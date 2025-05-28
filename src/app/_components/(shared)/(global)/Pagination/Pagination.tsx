"use client";

import React, { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import "./Pagination.scss";

type IPagingType = {
  total: number;
  page: number;
  per_page: number;
  pages: number;
};

const Pagination = ({ pagingData }: { pagingData: IPagingType }) => {
  const [page, setPage] = useState<number>(pagingData?.page ?? 1);

  // Sync state with prop changes
  useEffect(() => {
    if (pagingData) {
      setPage(pagingData.page);
    }
  }, [pagingData, pagingData?.page]);

  const updatePage = (newPage: number) => {
    if (newPage < 1 || newPage > pagingData.pages) return;

    setPage(newPage);
    const queryParam = new URLSearchParams(window.location.search);
    queryParam.set("page", newPage.toString());
    const newUrl = `${window.location.pathname}?${queryParam.toString()}`;

    window.history.pushState(null, "", newUrl);
    window.dispatchEvent(new Event("popstate")); // Ensure page reloads data
  };

  return (
    <div className="pagination">
      <div className="pagination--left">
        Showing {pagingData?.page} to {pagingData?.per_page} of{" "}
        {pagingData?.total} entries
      </div>

      <div className="pagination--right">
        <div
          className={`nav ${page === 1 ? "nav-disabled" : ""}`}
          onClick={() => updatePage(page - 1)}
        >
          <ChevronLeftIcon />
          <div className="text">Prev</div>
        </div>

        <div className="page-input">
          <input
            type="number"
            value={page}
            onChange={(e) => setPage(Number(e.target.value))}
            className="form-control page-form-input"
            min={1}
            max={pagingData?.pages}
          />

          <div className="page-line">/</div>
          <div className="page-total">{pagingData?.pages}</div>

          <button className="btn btn-primary" onClick={() => updatePage(page)}>
            Go
          </button>
        </div>

        <div
          className={`nav ${page === pagingData?.pages ? "nav-disabled" : ""}`}
          onClick={() => updatePage(page + 1)}
        >
          <div className="text">Next</div>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
