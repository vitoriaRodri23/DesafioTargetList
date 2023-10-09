import React from "react";
import PrincipalTitleProps from "../../components/PrincipalTitle/PrincipalTitle";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import SelectSubSector from "../../components/SelectSubsector/SelectSubSector";
import { TablePrincipal } from "../../components/Table/TablePrincipal";

function TargetList() {
    return (
        <>
            <ProfileAvatar />
            <PrincipalTitleProps text="Lista de Captura de Alvos" className="text-h1" />
            <SelectSubSector />
            <TablePrincipal data={[]} />
        </>
    );
}

export default TargetList;
