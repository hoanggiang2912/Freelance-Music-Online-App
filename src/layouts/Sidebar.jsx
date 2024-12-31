import { ContainerOutlined, DesktopOutlined } from '@ant-design/icons';
import { Button, Menu, Space } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    key: '/',
    icon: (
      <Link to="/" className="w-6 h-6 flex items-center justify-center">
        <DiscoverIcon />
      </Link>
    ),
    label: <Link to="/">Discover</Link>,
  },
  {
    key: '/albums',
    icon: (
      <Link to={'/albums'} className="w-6 h-6 flex items-center justify-center">
        <AlbumsIcon />
      </Link>
    ),
    label: <Link to="/albums">Albums</Link>,
  },
  {
    key: '/artists',
    icon: (
      <Link
        to={'/artists'}
        className="w-6 h-6 flex items-center justify-center"
      >
        <ArtistsIcon />
      </Link>
    ),
    label: <Link to="/artists">Artists</Link>,
  },
  {
    key: '/genres',
    icon: (
      <Link to={'/genres'} className="w-6 h-6 flex items-center justify-center">
        <GenresIcon />
      </Link>
    ),
    label: <Link to="/genres">Genres</Link>,
  },
  {
    key: '/top-tracks',
    icon: (
      <Link
        to={'/top-tracks'}
        className="w-6 h-6 flex items-center justify-center"
      >
        <TopTracksIcons />
      </Link>
    ),
    label: <Link to="/top-tracks">Top Tracks</Link>,
  },
];

const bottomItems = [
  {
    key: '/downloads',
    icon: (
      <Link
        to={'/downloads'}
        className="w-6 h-6 flex items-center justify-center"
      >
        <DownloadsIcon />
      </Link>
    ),
    label: <Link to="/downloads">Downloads</Link>,
  },
  {
    key: '/favorites',
    icon: (
      <Link
        to={'/favorites'}
        className="w-6 h-6 flex items-center justify-center"
      >
        <FavoritesIcon />
      </Link>
    ),
    label: <Link to="/favorites">Favourites</Link>,
  },
  {
    key: '/history',
    icon: (
      <Link
        to={'/history'}
        className="w-6 h-6 flex items-center justify-center"
      >
        <HistoryIcon />
      </Link>
    ),
    label: <Link to="/history">History</Link>,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const location = useLocation();

  return (
    <div
      className={`h-screen fixed left-0 top-0 z-50 bg-secondary ${
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
        selectedKeys={[location.pathname]}
        items={topItems}
        className="py-10 bg-secondary"
      />
      <Space />
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        selectedKeys={[location.pathname]}
        items={bottomItems}
        className="py-10 bg-secondary"
      />
    </div>
  );
};

export default Sidebar;
