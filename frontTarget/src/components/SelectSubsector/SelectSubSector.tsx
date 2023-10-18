import React, { useEffect, useState } from "react";
import { apiAuth } from "../../services/axiosConfig.auth";

interface ISelectSubSectorProps {
    setSelectedSubsector: React.Dispatch<React.SetStateAction<string>>;
    selectedSubsector: string;
}

export const SelectSubSector: React.FC<ISelectSubSectorProps> = ({ setSelectedSubsector, selectedSubsector }) => {
    const [subsectors, setSubsectors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiAuth.get("deal/teste");
                setSubsectors(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados do subsector:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSubsectorChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedSubsector(selectedValue);
    };

    return (
        <div>
            {loading ? (
                <p className="text-center font-poppins p-2">Carregando subsectors...</p>
            ) : (
                <div>
                    <select className="select_style" onChange={handleSubsectorChange} value={selectedSubsector}>
                        <option value="">Selecione o Subsector</option>
                        {subsectors.map((subsector, index) => (
                            <option key={index} value={subsector}>
                                {subsector}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};
