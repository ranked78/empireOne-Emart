import React from "react";

export default function Table({ data, columns }) {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md ">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key} scope="col" className="px-6 py-4 font-medium text-gray-900">
                                {column.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {data.map((row, rowIndex) => (
                        <tr className="hover:bg-gray-50" key={rowIndex}>
                            {columns.map((column) => (
                                <td key={column.key} className="px-6 py-4 text-gray-900">
                                    {row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
