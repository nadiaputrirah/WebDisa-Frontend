import React from "react";
import { useTable } from "react-table";

const DataTable = ({
  columns,
  data,
  isLoaded = false,
  customColumn,
  ...props
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        {...getTableProps()}
      >
        <thead class="text-xs text-white uppercase bg-[#439A97]">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  scope="col"
                  className="px-6 py-3"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {data.length == 0 && (
            <tr className="text-center py-5">
              <td colSpan={columns.length + 1} className="py-5 my-5">
                tidak ada data..
              </td>
            </tr>
          )}
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                className="bg-white border-b dark:border-gray-700 text-[#014539]"
                {...row.getRowProps()}
                {...customColumn}
                onClick={() => customColumn?.onClick(row) || null}
              >
                {row.cells.map((cell) => {
                  return (
                    <td className="px-4 py-4" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
