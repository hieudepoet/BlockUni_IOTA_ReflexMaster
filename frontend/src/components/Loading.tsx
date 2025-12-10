import React from 'react';

interface LoadingProps {
    message?: string;
}

export const Loading: React.FC<LoadingProps> = ({ message = 'Đang xử lý...' }) => {
    return (
        <div className="fixed inset-0 bg-bg-primary/95 backdrop-blur-lg flex items-center justify-center z-[1000]">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-border border-t-primary rounded-full animate-spin mx-auto mb-5"></div>
                <p className="text-base text-text-secondary">{message}</p>
            </div>
        </div>
    );
};
