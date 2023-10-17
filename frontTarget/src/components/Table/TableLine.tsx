import React from "react";
import CustomSwitch from "../SwitchToggle/SwitchToggle";
interface ITableLineProps {
    info: any;
}
const TableLine: React.FC<ITableLineProps> = ({ info }) => (
    <tbody>
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">{info?.buyer}</td>
            <td className="px-6 py-4">{info?.client}</td>
            <td className="px-6 py-4">{info?.subsectorBuyer}</td>
            <td className="px-6 py-4">{info?.subsectorClient}</td>
            <td className="px-6 py-4">{info?.signedNDAdate}</td>
            <td className="px-6 py-4">{info?.submmitedNBODate}</td>
            <td className="px-6 py-4">{info?.dealCloseDate}</td>
            <td className="px-6 py-4">{info?.lastContactDate}</td>
            <td className="px-6 py-4">{info?.estimatedDealSize}</td>
            <td className="px-6 py-4">{info?.passedReason}</td>
            <td className="px-6 py-4">{}</td>
            <td className="px-6 py-4">
                <CustomSwitch />
            </td>
        </tr>
    </tbody>
);

export default TableLine;
