import React, { useState } from "react";
import CustomSwitch from "../SwitchToggle/SwitchToggle";
interface ITableLineProps {
    info: any;
}

const formatDateString = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
};

const TableLine: React.FC<ITableLineProps> = ({ info }) => {
    const [isMatchingSubsectors, setIsMatchingSubsectors] = useState(info?.subsectorBuyer === info?.subsectorClient);
    return (
        <tbody>
            <tr className={`border-b dark:bg-gray-800 ${isMatchingSubsectors ? 'matching-subsectors' : ''}`}>
                <td className="px-10 py-2">{info?.buyer}</td>
                <td className="px-10 py-2">{info?.client}</td>
                <td className="px-10 py-2">{info?.subsectorBuyer}</td>
                <td className="px-10 py-2">{info?.subsectorClient}</td>
                <td className="px-10 py-4">{formatDateString(info?.signedNDAdate)}</td>
                <td className="px-10 py-4">{formatDateString(info?.submmitedNBODate)}</td>
                <td className="px-10 py-4">{formatDateString(info?.dealCloseDate)}</td>
                <td className="px-10 py-4">{formatDateString(info?.lastContactDate)}</td>
                <td className="px-10 py-4">{info?.estimatedDealSize}</td>
                <td className="px-10 py-4">{info?.passedReason}</td>
                <td className="px-10 py-4">
                    <CustomSwitch isMatchingSubsectors={isMatchingSubsectors}/>
                </td>
            </tr>
        </tbody>
    );
};

export default TableLine;
