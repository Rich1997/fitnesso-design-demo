import React from 'react';
import { Card } from '@/components/ui/card';

interface StatCardProps {
    icon: React.ElementType;
    iconColor: string;
    value: string | number;
    label: string;
    variant: 'primary' | 'destructive';
}

const StatCard: React.FC<StatCardProps> = ({
    icon: Icon,
    iconColor,
    value,
    label,
    variant,
}) => {
    return (
        <Card
            className={`flex items-center gap-4 bg-${variant} p-2 text-${variant}-foreground items-center mb-4`}
        >
            <div className={`p-4 ${iconColor} rounded-lg`}>
                <Icon />
            </div>
            <div>
                <span className="text-4xl font-bold tracking-tighter">
                    {value}{' '}
                </span>
                <div
                    className={`text-sm text-${variant}-foreground/80 font-medium`}
                >
                    {label}
                </div>
            </div>
        </Card>
    );
};

export default StatCard;
