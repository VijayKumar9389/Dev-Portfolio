import React from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaReact, FaAws, FaSass, FaServer, FaAngular } from 'react-icons/fa';
import { SiExpress, SiTypescript } from 'react-icons/si';
import { TbBrandNodejs, TbBrandMysql, TbBrandRedux } from 'react-icons/tb';

export interface TechItem {
    icon: React.ElementType;
    title: string;
}

export const techData: TechItem[] = [
    { icon: FaReact, title: 'React' },
    { icon: TbBrandNodejs, title: 'Node.js' },
    { icon: SiExpress, title: 'Express' },
    { icon: TbBrandMysql, title: 'MySQL' },
    { icon: TbBrandRedux, title: 'Redux' },
    { icon: FaAws, title: 'AWS' },
    { icon: FaSass, title: 'SASS' },
    { icon: FaServer, title: 'REST' },
    { icon: SiTypescript, title: 'Typescript' },
    { icon: BiLogoPostgresql, title: 'PostgreSQL' },
    { icon: FaAngular, title: 'Angular' },
];
