import React from "react";

function TableRow() {
    return (
       <>
       <thead className="text-xs text-gray-700 uppercase bg-gray-white">
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
       </> 
    );
}

export default TableRow;
