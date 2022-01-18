import React, { useState } from "react";
import useTable from "../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data.data, page, rowsPerPage);
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Country</th>
            <th className={styles.tableHeader}>Age</th>
            <th className={styles.tableHeader}>Gender</th>
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