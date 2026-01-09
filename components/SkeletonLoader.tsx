import React from 'react';

interface SkeletonLoaderProps {
    variant?: 'image' | 'card' | 'text' | 'project-card' | 'feature-card' | 'stats';
    className?: string;
    count?: number;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
    variant = 'image',
    className = '',
    count = 1
}) => {
    const baseClasses = 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700';

    // Shimmer keyframes
    const shimmerStyle = (
        <style>{`
            @keyframes shimmer {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
            }
        `}</style>
    );

    if (variant === 'image') {
        return (
            <>
                {shimmerStyle}
                <div className={`${baseClasses} ${className}`} style={{ backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }}></div>
            </>
        );
    }

    if (variant === 'project-card') {
        return (
            <>
                {shimmerStyle}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: count }).map((_, i) => (
                        <div key={i} className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700/50">
                            <div className={`${baseClasses} h-48`} style={{ backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }}></div>
                            <div className="p-6 space-y-3">
                                <div className={`${baseClasses} h-6 rounded-full w-24`}></div>
                                <div className={`${baseClasses} h-7 rounded w-4/5`}></div>
                                <div className={`${baseClasses} h-4 rounded w-full`}></div>
                                <div className={`${baseClasses} h-4 rounded w-5/6`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }

    if (variant === 'feature-card') {
        return (
            <>
                {shimmerStyle}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50">
                            <div className={`${baseClasses} w-14 h-14 rounded-xl mb-6`}></div>
                            <div className={`${baseClasses} h-6 rounded w-3/4 mb-3`}></div>
                            <div className="space-y-2">
                                <div className={`${baseClasses} h-4 rounded w-full`}></div>
                                <div className={`${baseClasses} h-4 rounded w-5/6`}></div>
                                <div className={`${baseClasses} h-4 rounded w-4/6`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }

    if (variant === 'stats') {
        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="p-4">
                        <div className={`${baseClasses} h-12 rounded w-20 mx-auto mb-2`}></div>
                        <div className={`${baseClasses} h-4 rounded w-16 mx-auto`}></div>
                    </div>
                ))}
            </div>
        );
    }

    if (variant === 'card') {
        return (
            <div className={`${className} border border-gray-200 dark:border-gray-700 rounded-xl p-6 space-y-4`}>
                <div className={`${baseClasses} h-48 rounded-lg`}></div>
                <div className={`${baseClasses} h-6 rounded w-3/4`}></div>
                <div className={`${baseClasses} h-4 rounded w-full`}></div>
                <div className={`${baseClasses} h-4 rounded w-5/6`}></div>
            </div>
        );
    }

    return <div className={`${baseClasses} h-4 rounded ${className}`}></div>;
};
