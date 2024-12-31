import { ContainerOutlined, DesktopOutlined } from '@ant-design/icons';
import { Button, Menu, Space } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import DiscoverIcon from '../components/icons/DiscoverIcon';
import AlbumsIcon from '../components/icons/AlbumsIcon';
import ArtistsIcon from '../components/icons/ArtistsIcon';
import GenresIcon from '../components/icons/GenresIcon';
import TopTracksIcons from '../components/icons/TopTracksIcons';
import Logo from './Logo';
import DownloadsIcon from '../components/icons/DownloadsIcon';
import FavoritesIcon from '../components/icons/FavoritesIcon';
import HistoryIcon from '../components/icons/HistoryIcon';

const topItems = [
  {
    key: 'discover',
    icon: (
      <div className="w-6 h-6 flex items-center justify-center">
        <DiscoverIcon />
      </div>
    ),
    label: 'Discover',
  },
  {
    key: 'albums',
    icon: (
      <div className="w-6 h-6 flex items-center justify-center">
        <AlbumsIcon />
      </div>
    ),
    label: 'Albums',
  },
  {
    key: 'artists',
    icon: (
      <div className="w-6 h-6 flex items-center justify-center">
        <ArtistsIcon />
      </div>
    ),
    label: 'Artists',
  },
  {
    key: 'genres',
    icon: (
      <div className="w-6 h-6 flex items-center justify-center">
        <GenresIcon />
      </div>
    ),
    label: 'Genres',
  },
  {
    key: 'topTracks',
    icon: (
      <div className="w-6 h-6 flex items-center justify-center">
        <TopTracksIcons />
      </div>
    ),
    label: 'Top Tracks',
  },
];

const bottomItems = [
  {
    key: 'downloads',
    icon: (
      <div className="w-6 h-6 flex items-center justify-center">
        <DownloadsIcon />
      </div>
    ),
    label: 'Downloads',
  },
  {
    key: 'favourites',
    icon: (
      <div className="w-6 h-6 flex items-center justify-center">
        <FavoritesIcon />
      </div>
    ),
    label: 'Favourites',
  },
  {
    key: 'history',
    icon: (
      <div className="w-6 h-6 flex items-center justify-center">
        <HistoryIcon />
      </div>
    ),
    label: 'History',
  },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      className={`h-screen fixed left-0 top-0 z-[998] bg-secondary ${
        collapsed ? 'w-20 sidebar-collapsed' : 'w-64'
      } transition-all duration-300 drop-shadow-sidebar sidebar-wrapper`}
    >
      <Button
        className="bg-secondary text-white aspect-square rounded-full w-10 h-10 flex items-center justify-center hover:!bg-secondary hover:brightness-90 hover:!text-white transition !p-0 absolute top-1/2 -right-4 z-40 border-none drop-shadow-sidebar"
        onClick={toggleCollapsed}
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </Button>
      <Logo full={!collapsed} />
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={topItems}
        className="py-10 bg-secondary"
      />
      <Space />
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={bottomItems}
        className="py-10 bg-secondary"
      />
    </div>
  );
};
export default App;
