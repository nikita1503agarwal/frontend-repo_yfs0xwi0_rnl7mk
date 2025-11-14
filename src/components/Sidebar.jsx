import { Home, Star, Tags, Settings } from 'lucide-react'

const links = [
  { icon: Home, label: 'Home' },
  { icon: Star, label: 'Featured' },
  { icon: Tags, label: 'Deals' },
  { icon: Settings, label: 'Settings' },
]

function Sidebar({ open }) {
  return (
    <aside
      className={`$${''} ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:sticky top-16 left-0 z-10 h-[calc(100vh-4rem)] w-64 bg-white border-r transition-transform`}
    >
      <nav className="p-4 space-y-1">
        {links.map(({ icon: Icon, label }) => (
          <a key={label} href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700">
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
