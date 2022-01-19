import React, { useState } from "react";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import useTable from "../../hooks/useTable";
import useSort from "../../hooks/useSort";

const Table = ({ headers, rows, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { items, requestSort } = useSort(rows);
  const { slice, range } = useTable(items, page, rowsPerPage);
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            {headers.map((header, index) => {
              return (
                <th className={styles.tableHeader} key={index}>
                  <button
                    type="button"
                    className={styles["button-8"]}
                    onClick={() => requestSort("name")}
                  >
                    {header}
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {slice.map((el, index) => (
            <tr className={styles.tableRowItems} key={index}>
              <td className={styles.tableCell}>{el.name}</td>
              <td className={styles.tableCell}>{el.age}</td>
              <td className={styles.tableCell}>{el.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
