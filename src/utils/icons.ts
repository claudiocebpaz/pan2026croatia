export const heroicons: {
  [key: string]: () => Promise<{ default: React.ComponentType<any> }>;
} = {
  AcademicCapIcon: () => import("@heroicons/react/24/solid/AcademicCapIcon"),
  AdjustmentsHorizontalIcon: () =>
    import("@heroicons/react/24/solid/AdjustmentsHorizontalIcon"),
  ArchiveBoxIcon: () => import("@heroicons/react/24/solid/ArchiveBoxIcon"),
  ArrowDownIcon: () => import("@heroicons/react/24/solid/ArrowDownIcon"),
  ArrowLeftIcon: () => import("@heroicons/react/24/solid/ArrowLeftIcon"),
  ArrowRightIcon: () => import("@heroicons/react/24/solid/ArrowRightIcon"),
  ArrowUpIcon: () => import("@heroicons/react/24/solid/ArrowUpIcon"),
  AtSymbolIcon: () => import("@heroicons/react/24/solid/AtSymbolIcon"),
  BackspaceIcon: () => import("@heroicons/react/24/solid/BackspaceIcon"),
  // BadgeCheckIcon module not found, entry removed or replaced with a valid icon
  BadgeCheckIcon: () => import("@heroicons/react/24/solid/CheckBadgeIcon"),
  BanIcon: () => import("@heroicons/react/24/solid/NoSymbolIcon"), // Replaced with NoSymbolIcon as a valid alternative
  BeakerIcon: () => import("@heroicons/react/24/solid/BeakerIcon"),
  BellIcon: () => import("@heroicons/react/24/solid/BellIcon"),
  BookOpenIcon: () => import("@heroicons/react/24/solid/BookOpenIcon"),
  BookmarkIcon: () => import("@heroicons/react/24/solid/BookmarkIcon"),
  BoltIcon: () => import("@heroicons/react/24/solid/BoltIcon"),

  BriefcaseIcon: () => import("@heroicons/react/24/solid/BriefcaseIcon"),
  CakeIcon: () => import("@heroicons/react/24/solid/CakeIcon"),
  CalculatorIcon: () => import("@heroicons/react/24/solid/CalculatorIcon"),
  CalendarIcon: () => import("@heroicons/react/24/solid/CalendarIcon"),
  CameraIcon: () => import("@heroicons/react/24/solid/CameraIcon"),
  ChartBarIcon: () => import("@heroicons/react/24/solid/ChartBarIcon"),
  ChartPieIcon: () => import("@heroicons/react/24/solid/ChartPieIcon"),
  ChatBubbleLeftIcon: () =>
    import("@heroicons/react/24/solid/ChatBubbleLeftIcon"),
  ChatBubbleLeftEllipsisIcon: () =>
    import("@heroicons/react/24/solid/ChatBubbleLeftEllipsisIcon"),
  CheckIcon: () => import("@heroicons/react/24/solid/CheckIcon"),
  ChevronDoubleDownIcon: () =>
    import("@heroicons/react/24/solid/ChevronDoubleDownIcon"),
  ChevronDoubleLeftIcon: () =>
    import("@heroicons/react/24/solid/ChevronDoubleLeftIcon"),
  ChevronDoubleRightIcon: () =>
    import("@heroicons/react/24/solid/ChevronDoubleRightIcon"),
  ChevronDoubleUpIcon: () =>
    import("@heroicons/react/24/solid/ChevronDoubleUpIcon"),
  ChevronDownIcon: () => import("@heroicons/react/24/solid/ChevronDownIcon"),
  ChevronLeftIcon: () => import("@heroicons/react/24/solid/ChevronLeftIcon"),
  ChevronRightIcon: () => import("@heroicons/react/24/solid/ChevronRightIcon"),
  ChevronUpIcon: () => import("@heroicons/react/24/solid/ChevronUpIcon"),
  CircleStackIcon: () => import("@heroicons/react/24/solid/CircleStackIcon"),
  ClipboardIcon: () => import("@heroicons/react/24/solid/ClipboardIcon"),
  CloudIcon: () => import("@heroicons/react/24/solid/CloudIcon"),
  CodeBracketIcon: () => import("@heroicons/react/24/solid/CodeBracketIcon"),
  Cog6ToothIcon: () => import("@heroicons/react/24/solid/Cog6ToothIcon"),
  Cog8ToothIcon: () => import("@heroicons/react/24/solid/Cog8ToothIcon"),
  CommandLineIcon: () => import("@heroicons/react/24/solid/CommandLineIcon"),
  ComputerDesktopIcon: () =>
    import("@heroicons/react/24/solid/ComputerDesktopIcon"),
  CubeIcon: () => import("@heroicons/react/24/solid/CubeIcon"),
  CurrencyBangladeshiIcon: () =>
    import("@heroicons/react/24/solid/CurrencyBangladeshiIcon"),
  CurrencyDollarIcon: () =>
    import("@heroicons/react/24/solid/CurrencyDollarIcon"),
  CurrencyEuroIcon: () => import("@heroicons/react/24/solid/CurrencyEuroIcon"),
  CurrencyPoundIcon: () =>
    import("@heroicons/react/24/solid/CurrencyPoundIcon"),
  CurrencyYenIcon: () => import("@heroicons/react/24/solid/CurrencyYenIcon"),
  DevicePhoneMobileIcon: () =>
    import("@heroicons/react/24/solid/DevicePhoneMobileIcon"),
  DeviceTabletIcon: () => import("@heroicons/react/24/solid/DeviceTabletIcon"),
  DocumentArrowDownIcon: () =>
    import("@heroicons/react/24/solid/DocumentArrowDownIcon"),
  DocumentDuplicateIcon: () =>
    import("@heroicons/react/24/solid/DocumentDuplicateIcon"),
  DocumentIcon: () => import("@heroicons/react/24/solid/DocumentIcon"),
  DocumentTextIcon: () => import("@heroicons/react/24/solid/DocumentTextIcon"),
  EllipsisHorizontalIcon: () =>
    import("@heroicons/react/24/solid/EllipsisHorizontalIcon"),
  EllipsisVerticalIcon: () =>
    import("@heroicons/react/24/solid/EllipsisVerticalIcon"),
  EyeIcon: () => import("@heroicons/react/24/solid/EyeIcon"),
  EyeSlashIcon: () => import("@heroicons/react/24/solid/EyeSlashIcon"),
  FaceFrownIcon: () => import("@heroicons/react/24/solid/FaceFrownIcon"),
  FaceSmileIcon: () => import("@heroicons/react/24/solid/FaceSmileIcon"),
  FilmIcon: () => import("@heroicons/react/24/solid/FilmIcon"),
  FingerPrintIcon: () => import("@heroicons/react/24/solid/FingerPrintIcon"),
  FireIcon: () => import("@heroicons/react/24/solid/FireIcon"),
  FlagIcon: () => import("@heroicons/react/24/solid/FlagIcon"),
  FolderIcon: () => import("@heroicons/react/24/solid/FolderIcon"),
  GiftIcon: () => import("@heroicons/react/24/solid/GiftIcon"),
  GlobeEuropeAfricaIcon: () =>
    import("@heroicons/react/24/solid/HandRaisedIcon"),
  HandRaisedIcon: () => import("@heroicons/react/24/solid/HandRaisedIcon"),
  HandThumbDownIcon: () =>
    import("@heroicons/react/24/solid/HandThumbDownIcon"),
  HandThumbUpIcon: () => import("@heroicons/react/24/solid/HandThumbUpIcon"),
  HashtagIcon: () => import("@heroicons/react/24/solid/HashtagIcon"),
  HeartIcon: () => import("@heroicons/react/24/solid/HeartIcon"),
  HomeIcon: () => import("@heroicons/react/24/solid/HomeIcon"),
  HomeModernIcon: () => import("@heroicons/react/24/solid/HomeModernIcon"),
  IdentificationIcon: () =>
    import("@heroicons/react/24/solid/IdentificationIcon"),
  InboxArrowDownIcon: () =>
    import("@heroicons/react/24/solid/InboxArrowDownIcon"),
  InboxIcon: () => import("@heroicons/react/24/solid/InboxIcon"),
  InformationCircleIcon: () =>
    import("@heroicons/react/24/solid/InformationCircleIcon"),
  KeyIcon: () => import("@heroicons/react/24/solid/KeyIcon"),
  LanguageIcon: () => import("@heroicons/react/24/solid/LanguageIcon"),
  LifebuoyIcon: () => import("@heroicons/react/24/solid/LifebuoyIcon"),
  LightBulbIcon: () => import("@heroicons/react/24/solid/LightBulbIcon"),
  LightningBoltIcon: () => import("@heroicons/react/24/solid/BoltIcon"),
  LinkIcon: () => import("@heroicons/react/24/solid/LinkIcon"),
  ListBulletIcon: () => import("@heroicons/react/24/solid/ListBulletIcon"),
  LockClosedIcon: () => import("@heroicons/react/24/solid/LockClosedIcon"),
  LockOpenIcon: () => import("@heroicons/react/24/solid/LockOpenIcon"),
  MagnifyingGlassIcon: () =>
    import("@heroicons/react/24/solid/MagnifyingGlassIcon"),
  MapIcon: () => import("@heroicons/react/24/solid/MapIcon"),
  MegaphoneIcon: () => import("@heroicons/react/24/solid/MegaphoneIcon"),
  MicrophoneIcon: () => import("@heroicons/react/24/solid/MicrophoneIcon"),
  MinusCircleIcon: () => import("@heroicons/react/24/solid/MinusCircleIcon"),
  MinusIcon: () => import("@heroicons/react/24/solid/MinusIcon"),
  MoonIcon: () => import("@heroicons/react/24/solid/MoonIcon"),
  MusicalNoteIcon: () => import("@heroicons/react/24/solid/MusicalNoteIcon"),
  NewspaperIcon: () => import("@heroicons/react/24/solid/NewspaperIcon"),
  OfficeBuildingIcon: () =>
    import("@heroicons/react/24/solid/BuildingOfficeIcon"), // Replaced with BuildingOfficeIcon as a valid alternative
  PaperAirplaneIcon: () =>
    import("@heroicons/react/24/solid/PaperAirplaneIcon"),
  PaperClipIcon: () => import("@heroicons/react/24/solid/PaperClipIcon"),
  PauseIcon: () => import("@heroicons/react/24/solid/PauseIcon"),
  PencilIcon: () => import("@heroicons/react/24/solid/PencilIcon"),
  PhoneIcon: () => import("@heroicons/react/24/solid/PhoneIcon"),
  PhotographIcon: () => import("@heroicons/react/24/solid/PhotoIcon"),
  PlayIcon: () => import("@heroicons/react/24/solid/PlayIcon"),
  PlusCircleIcon: () => import("@heroicons/react/24/solid/PlusCircleIcon"),
  PlusIcon: () => import("@heroicons/react/24/solid/PlusIcon"),
  PresentationChartBarIcon: () =>
    import("@heroicons/react/24/solid/PresentationChartBarIcon"),
  PresentationChartLineIcon: () =>
    import("@heroicons/react/24/solid/PresentationChartLineIcon"),
  PrinterIcon: () => import("@heroicons/react/24/solid/PrinterIcon"),
  // PuzzleIcon module not found, entry removed or replaced with a valid icon
  PuzzleIcon: () => import("@heroicons/react/24/solid/CubeIcon"), // Replaced with CubeIcon as a valid alternative
  QrCodeIcon: () => import("@heroicons/react/24/solid/QrCodeIcon"),
  QuestionMarkCircleIcon: () =>
    import("@heroicons/react/24/solid/QuestionMarkCircleIcon"),
  ReceiptPercentIcon: () =>
    import("@heroicons/react/24/solid/ReceiptPercentIcon"),
  ReceiptTaxIcon: () =>
    import("@heroicons/react/24/outline/ReceiptPercentIcon"), // Replaced with ReceiptPercentIcon as a valid alternative
  RefreshIcon: () => import("@heroicons/react/24/outline/ArrowPathIcon"), // Replaced with ArrowPathIcon as a valid alternative
  ReplyIcon: () => import("@heroicons/react/24/outline/ArrowUturnLeftIcon"), // Replaced with ArrowUturnLeftIcon as a valid alternative
  RssIcon: () => import("@heroicons/react/24/solid/RssIcon"), // Replaced with RssIcon as a valid alternative
  SaveIcon: () => import("@heroicons/react/24/solid/ArrowDownTrayIcon"), // Replaced with ArrowDownTrayIcon as a valid alternative
  ScaleIcon: () => import("@heroicons/react/24/solid/ScaleIcon"),
  ScissorsIcon: () => import("@heroicons/react/24/solid/ScissorsIcon"),
  ServerIcon: () => import("@heroicons/react/24/solid/ServerIcon"),
  ShareIcon: () => import("@heroicons/react/24/solid/ShareIcon"),
  ShieldCheckIcon: () => import("@heroicons/react/24/solid/ShieldCheckIcon"),
  ShieldExclamationIcon: () =>
    import("@heroicons/react/24/solid/ShieldExclamationIcon"),
  ShoppingBagIcon: () => import("@heroicons/react/24/solid/ShoppingBagIcon"),
  ShoppingCartIcon: () => import("@heroicons/react/24/solid/ShoppingCartIcon"),
  SignalIcon: () => import("@heroicons/react/24/solid/SignalIcon"),
  SparklesIcon: () => import("@heroicons/react/24/solid/SparklesIcon"),
  SpeakerWaveIcon: () => import("@heroicons/react/24/solid/SpeakerWaveIcon"),
  Squares2X2Icon: () => import("@heroicons/react/24/solid/Squares2X2Icon"),
  StarIcon: () => import("@heroicons/react/24/solid/StarIcon"),
  StopIcon: () => import("@heroicons/react/24/solid/StopIcon"),
  SunIcon: () => import("@heroicons/react/24/solid/SunIcon"),
  SwitchHorizontalIcon: () =>
    import("@heroicons/react/24/solid/ArrowsRightLeftIcon"), // Replaced with ArrowsRightLeftIcon as a valid alternative
  SwitchVerticalIcon: () =>
    import("@heroicons/react/24/solid/ArrowsUpDownIcon"), // Replaced with ArrowsUpDownIcon as a valid alternative
  TableCellsIcon: () => import("@heroicons/react/24/solid/TableCellsIcon"),
  TagIcon: () => import("@heroicons/react/24/solid/TagIcon"),
  TemplateIcon: () => import("@heroicons/react/24/solid/SquaresPlusIcon"), // Replaced with SquaresPlusIcon as a valid alternative
  TicketIcon: () => import("@heroicons/react/24/solid/TicketIcon"),
  TrashIcon: () => import("@heroicons/react/24/solid/TrashIcon"),
  TrophyIcon: () => import("@heroicons/react/24/solid/TrophyIcon"),
  TruckIcon: () => import("@heroicons/react/24/solid/TruckIcon"),
  UserIcon: () => import("@heroicons/react/24/solid/UserIcon"),
  UserGroupIcon: () => import("@heroicons/react/24/solid/UserGroupIcon"),
  UsersIcon: () => import("@heroicons/react/24/solid/UsersIcon"),
  VariableIcon: () => import("@heroicons/react/24/solid/VariableIcon"),
  VideoCameraIcon: () => import("@heroicons/react/24/solid/VideoCameraIcon"),
  ViewColumnsIcon: () => import("@heroicons/react/24/solid/ViewColumnsIcon"),
  WalletIcon: () => import("@heroicons/react/24/solid/WalletIcon"),
  WifiIcon: () => import("@heroicons/react/24/solid/WifiIcon"),
  WindowIcon: () => import("@heroicons/react/24/solid/WindowIcon"),
  WrenchIcon: () => import("@heroicons/react/24/solid/WrenchIcon"),
};
