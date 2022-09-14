import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCardIcon from '@mui/icons-material/AddCard';
import BackupIcon from '@mui/icons-material/Backup';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "いいねボタン",
    icon: <FavoriteIcon />,
    link: "/favorite",
  },
  {
    title: "アナリティクス",
    icon: <AssessmentIcon />,
    link: "/analytics",
  },
  {
    title: "友達追加",
    icon: <PersonAddIcon />,
    link: "/friends",
  },
  {
    title: "お支払い設定",
    icon: <AddCardIcon />,
    link: "/payment",
  },
  {
    title: "アップロード",
    icon: <BackupIcon />,
    link: "/upload",
  },
  {
    title: "詳細設定",
    icon: <SettingsIcon />,
    link: "/rocket",
  },
]