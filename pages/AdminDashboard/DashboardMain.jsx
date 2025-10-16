import Link from "next/link";
const UserIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
const BellIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const HamburgerIcon = ({ className }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default function DashboardMain({
  activeTab = "Dashboard",
  renderContent = () => null,
  isLgSidebarExpanded = false,
  isSidebarOpen = false,
  setIsSidebarOpen = () => {},
  notifications = [],
  showNotifications = false,
  setShowNotifications = () => {},
  showProfileMenu = false,
  setShowProfileMenu = () => {},
  singleUser = {},
  handleNotificationClick = () => {},
  handleTabClick = () => {},
}) {
  return (
    <div
      className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
        isLgSidebarExpanded ? "lg:ml-4" : "lg:ml-4"
      }`}
    >
      <header className="max-w-7xl hidden lg:flex items-center justify-between py-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800">{activeTab}</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative notification-dropdown">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="notification-button relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <BellIcon className="w-6 h-6" />
              {notifications.length > 0 && (
                <span className="absolute top-1 right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 justify-center items-center text-white text-[10px]">
                    {notifications.length}
                  </span>
                </span>
              )}
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notif) => (
                      <button
                        key={notif.id}
                        onClick={handleNotificationClick}
                        className="w-full text-left p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                      >
                        <p className="text-sm text-gray-800 font-medium">
                          {notif.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 truncate">
                          {notif.content}
                        </p>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-sm text-gray-500">
                      No new notifications
                    </div>
                  )}
                </div>
                {notifications.length > 0 && (
                  <div className="p-3 border-t border-gray-200 text-center">
                    <button
                      onClick={handleNotificationClick}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Go to Messages
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Profile Menu */}
          <div className="relative profile-dropdown">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="profile-button flex items-center gap-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <UserIcon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-800 hidden xl:block">
                {singleUser?.name || "Admin"}
              </span>
            </button>
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-800">
                    {singleUser?.name || "Admin"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {singleUser?.email || "admin@ayria.com"}
                  </p>
                </div>
                <div className="py-2">
                  <button
                    onClick={() => handleTabClick("My Account")}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Account
                  </button>
                </div>
                <div className="border-t border-gray-200 py-2">
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Visit Store
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <header className="flex lg:hidden items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-gray-600 hover:text-gray-900"
        >
          <HamburgerIcon className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-gray-800">{activeTab}</h1>
        <div className="w-10"></div>
      </header>
      <main className="flex-1 px-4 lg:px-0 lg:pr-4 overflow-y-auto no-scrollbar">
        {renderContent()}
      </main>
    </div>
  );
}
