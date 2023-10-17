import React from "react";

function TableRow() {
    const tableColumns = [
        { label: "buyer", className: "px-6 py-3" },
        { label: "client", className: "px-6 py-3" },
        { label: "subsector Buyer", className: "px-6 py-3" },
        { label: "subsector Client", className: "px-6 py-3" },
        { label: "signedNDA date", className: "px-6 py-3" },
        { label: "submmitedNBO Date", className: "px-6 py-3" },
        { label: "deal Close Date", className: "px-6 py-3" },
        { label: "lastContact Date", className: "px-6 py-3" },
        { label: "Data último Deal", className: "px-6 py-3" },
        { label: "estimated DealSize", className: "px-6 py-3" },
        { label: "passedReason", className: "px-6 py-3" },
        { label: "Same Subsector", className: "px-6 py-3" },
    ];
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-white">
            <tr>
                {tableColumns.map((column, index) => (
                    <th key={index} scope="col" className={column.className}>
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default TableRow;
