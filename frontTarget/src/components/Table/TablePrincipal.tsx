import React, { useEffect } from "react";
import TableLine from "./TableLine";
import TableRow from "./TableRow";
import { apiAuth } from "../../services/axiosConfig.auth";
import { useParams } from "react-router-dom";

interface ITablePrincipalProps {
    data: any[];
}

export const TablePrincipal: React.FC<ITablePrincipalProps> = ({ data }) => {
    const { subsector } = useParams<{ subsector: string }>();

    useEffect(() => {
        const fetchDataFromBackend = async () => {
            try {
                const response = await apiAuth.get(`/deal/by-subsector/${subsector}`);
                
                console.log(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados da tabela:", error);
            }
        };

        fetchDataFromBackend();
    }, [subsector]);

    return (
        <div className="w-12/12 flex justify-center items-start">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-10/12">
                <table className="lex justify-center items-center text-sm text-center dark:text-gray-700" >
                    <thead>
                        <TableRow />
                    </thead>
                    <tbody>
                        {data.map((info, index) => (
                            <TableLine key={index} info={info} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
