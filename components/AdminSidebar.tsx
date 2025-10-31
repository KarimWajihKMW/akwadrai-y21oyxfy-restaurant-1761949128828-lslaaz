import React, { useState } from 'react';
import { 
  ChartBarIcon, 
  ClipboardDocumentListIcon, 
  UserGroupIcon, 
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: number;
}

interface AdminSidebarProps {
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
  className?: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  activeItem = 'dashboard', 
  onItemClick,
  className = '' 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarItems: SidebarItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon, href: '/admin' },
    { id: 'orders', label: 'Orders', icon: ClipboardDocumentListIcon, href: '/admin/orders', badge: 5 },
    { id: 'analytics', label: 'Analytics', icon: ChartBarIcon, href: '/admin/analytics' },
    { id: 'customers', label: 'Customers', icon: UserGroupIcon, href: '/admin/customers' },
    { id: 'settings', label: 'Settings', icon: Cog6ToothIcon, href: '/admin/settings' },
  ];

  const handleItemClick = (item: SidebarItem) => {
    onItemClick?.(item.id);
    setIsMobileMenuOpen(false);
  };

  const SidebarContent = () => (
    <nav className="mt-8 px-4" role="navigation" aria-label="Admin navigation">
      <ul className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item)}
                className={`
                  w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                `}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span 
                    className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full"
                    aria-label={`${item.badge} new ${item.label.toLowerCase()}`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 rounded-md bg-white shadow-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open sidebar menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:inset-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${className}
        `}
        aria-label="Admin sidebar"
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close sidebar menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <SidebarContent />
      </aside>
    </>
  );
};

export default AdminSidebar;