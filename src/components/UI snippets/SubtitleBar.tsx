import React from 'react';

interface SubtitleBarProps {
    subtitle: string;
    showDetailsButton?: boolean;
}

const SubtitleBar: React.FC<SubtitleBarProps> = ({
    subtitle,
    showDetailsButton,
}) => {
    return (
        <div className="px-4 flex justify-between items-center pb-4">
            <div className="text-base font-medium">{subtitle}</div>
            <div className="text-sm">
                {showDetailsButton ? 'See details →' : ''}
            </div>
        </div>
    );
};

export default SubtitleBar;
