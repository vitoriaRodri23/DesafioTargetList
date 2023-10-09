import React from "react";
import CustomSwitch from "../SwitchToggle/SwitchToggle";

interface ITableLineProps {
    info: any;
}

const TableLine: React.FC<ITableLineProps> = ({ info }) => {
    return (
        <tbody>
            {/* Criar component das linhas - Local */}
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{info.a}</td>
                <td className="px-6 py-4">{info.a}</td>
                <td className="px-6 py-4">{info.a}</td>
                <td className="px-6 py-4">{info.a}</td>
                <td className="px-6 py-4">{info.a}</td>
                <td className="px-6 py-4">{info.a}</td>
                <td className="px-6 py-4">{info.a}</td>
                <td className="px-6 py-4">{info.a}</td>
                <td className="px-6 py-4">{info.a}</td>
                <td className="px-6 py-4">{info.a}</td>
                <td className="px-6 py-4">
                    <CustomSwitch />
                </td>
            </tr>
        </tbody>
    );
};

export default TableLine;
