import React from "react";
import TableLine from "./TableLine";
import TableRow from "./TableRow";

interface ITablePrincipalProps {
    data: any[];
}

export const TablePrincipal: React.FC<ITablePrincipalProps> = ({ data }) => {
    return (
        <div className="w-11/12 h-[80vh] flex justify-center items-start mx-auto">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className=" lex justify-center items-center text-sm text-center dark:text-gray-700">
                    <TableRow />
                    {data.map((info) => (
                        <TableLine info={info} />
                    ))}
                </table>
            </div>
        </div>
    );
};
