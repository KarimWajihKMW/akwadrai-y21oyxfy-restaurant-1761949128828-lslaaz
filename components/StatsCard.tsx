import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

export interface StatsData {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
    period: string;
  };
  icon?: React.ComponentType<{ className?: string }>;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'indigo';
}

interface StatsCardProps {
  stats: StatsData;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  stats, 
  onClick,
  className = '',
  size = 'md'
}) => {
  const getColorClasses = (color: StatsData['color'] = 'blue') => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'text-blue-600',
        border: 'border-blue-200',
      },
      green: {
        bg: 'bg-green-50',
        icon: 'text-green-600',
        border: 'border-green-200',
      },
      yellow: {
        bg: 'bg-yellow-50',
        icon: 'text-yellow-600',
        border: 'border-yellow-200',
      },
      red: {
        bg: 'bg-red-50',
        icon: 'text-red-600',
        border: 'border-red-200',
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'text-purple-600',
        border: 'border-purple-200',
      },
      indigo: {
        bg: 'bg-indigo-50',
        icon: 'text-indigo-600',
        border: 'border-indigo-200',
      },
    };
    return colors[color];
  };

  const getSizeClasses = () => {
    const sizes = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };
    return sizes[size];
  };

  const getIconSize = () => {
    const sizes = {
      sm: 'h-6 w-6',
      md: 'h-8 w-8',
      lg: 'h-10 w-10',
    };
    return sizes[size];
  };

  const getValueSize = () => {
    const sizes = {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-3xl',
    };
    return sizes[size];
  };

  const colorClasses = getColorClasses(stats.color);
  const Icon = stats.icon;

  const formatValue = (value: string | number) => {
    if (typeof value === 'number') {
      // Format large numbers with commas
      return value.toLocaleString();
    }
    return value;
  };

  const cardContent = (
    <>
      {/* Header with icon */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600 truncate pr-2">
          {stats.title}
        </h3>
        {Icon && (
          <div className={`flex-shrink-0 p-2 rounded-lg ${colorClasses.bg}`}>
            <Icon 
              className={`${getIconSize()} ${colorClasses.icon}`} 
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {/* Main value */}
      <div className="mb-2">
        <p 
          className={`${getValueSize()} font-bold text-gray-900 leading-tight`}
          aria-label={`${stats.title}: ${formatValue(stats.value)}`}
        >
          {formatValue(stats.value)}
        </p>
      </div>

      {/* Change indicator */}
      {stats.change && (
        <div className="flex items-center">
          <div className={`flex items-center text-sm font-medium ${
            stats.change.type === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}>
            {stats.change.type === 'increase' ? (
              <ArrowUpIcon className="h-4 w-4 mr-1" aria-hidden="true" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 mr-1" aria-hidden="true" />
            )}
            <span aria-label={`${stats.change.type} of ${Math.abs(stats.change.value)}%`}>
              {Math.abs(stats.change.value)}%
            </span>
          </div>
          <span className="text-sm text-gray-500 ml-2">
            vs {stats.change.period}
          </span>
        </div>
      )}
    </>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`
          w-full text-left bg-white rounded-lg shadow-sm border border-gray-200 
          hover:shadow-md hover:border-gray-300 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          transition-all duration-200
          ${getSizeClasses()}
          ${className}
        `}
        aria-label={`View details for ${stats.title}`}
      >
        {cardContent}
      </button>
    );
  }

  return (
    <div 
      className={`
        bg-white rounded-lg shadow-sm border border-gray-200
        ${getSizeClasses()}
        ${className}
      `}
      role="region"
      aria-labelledby={`stats-${stats.title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {cardContent}
    </div>
  );
};

export default StatsCard;