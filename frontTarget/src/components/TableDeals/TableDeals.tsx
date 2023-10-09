import React from "react";
import CustomSwitch from "../SwitchToggle/SwitchToggle";
import SelectSubSector from "../SelectSubsector/SelectSubSector";





function TableDeals() {
    return (
        <>
            <div className="flex flex-col relative items-center mb-5 mt-5">
                <div></div>

                <h2 className="text-h1 principal-blue">Lista de Captura de Alvos</h2>
                {/* Criar component do select */}
               <SelectSubSector/>
            </div>
            {/* Criar component da tabela */}
            <div className="w-11/12 h-[80vh] flex justify-center items-start mx-auto">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className=" lex justify-center items-center text-sm text-left dark:text-gray-700">
                        {/* Criar component do header da tabela - Local */}
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    nº de citação do buyer
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    DNAs assinados
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    nº de no goes
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Razão tamanho gos
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    nº de NBOS enviados
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Média deals
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Mediana deals
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Data último NBOS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Data último Deal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Contato Buyer
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    setor semelhante
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Criar component das linhas - Local */}
                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4">
                                    <CustomSwitch />
                                </td>
                            </tr>
                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4">
                                    <CustomSwitch />
                                </td>
                            </tr>
                            <tr className=" border-b dark:bg-gray-900 dark:border-gray-700">
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4">
                                    <CustomSwitch />
                                </td>
                            </tr>
                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4">
                                    <CustomSwitch />
                                </td>
                            </tr>
                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4">
                                    <CustomSwitch />
                                </td>
                            </tr>
                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4">
                                    <CustomSwitch />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default TableDeals;
