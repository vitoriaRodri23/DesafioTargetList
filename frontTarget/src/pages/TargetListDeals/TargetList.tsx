import React, { useEffect, useState } from "react";
import { PrincipalTitleProps } from "../../components/PrincipalTitle/PrincipalTitle";
import { SelectSubSector } from "../../components/SelectSubsector/SelectSubSector";
import { TablePrincipal } from "../../components/Table/TablePrincipal";
import { apiAuth } from "../../services/axiosConfig.auth";

export const TargetList: React.FC = () => {
    const [tableData, setTableData] = useState<any[]>([]);
    const [selectedSubsector, setSelectedSubsector] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState("");

    const chargeDataTable = async (subsector: string) => {
        try {
            const response = await apiAuth.get(`deal/by-subsector/${subsector}`);
            setTableData(response.data);
        } catch (error) {
            setErrorMessage("Não foi possível acessar sua tabela");
            console.error(error);
        }
    };

    useEffect(() => {
        chargeDataTable(selectedSubsector);
    }, [selectedSubsector]);

    return (
        <>
            <PrincipalTitleProps text="Lista de Captura de Alvos" className="text-h1" />
            <SelectSubSector selectedSubsector={selectedSubsector} setSelectedSubsector={setSelectedSubsector} />
            <TablePrincipal data={tableData} />
        </>
    );
};
