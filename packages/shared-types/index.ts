import { PortableTextBlock } from '@portabletext/types';

// ==========================================================================
// ==========================================================================
export interface ContentMetaTags {
  contentTitle?: string;
  contentDescription?: PortableTextBlock | string;
  contentKeyword?: string;
  contentImage?: Media | string;
  contentDynamicRoute?: string;
  contentSlug?: string | { current: string };
}

export interface DefaultMetaTags {
  titleSource: string;
  canonicalUrl: string;
  descriptionSource: string;
  imageSource: {
    alt: string | null;
    asset: {
      url: string;
      width: string;
      height: string;
    };
  };
  imageSourceDescription: string;
  KeywordsSource: string;
  siteNamePosition: string;
}

export interface OverrideMetaTags {
  overideMetaTitle: boolean;
  overideMetaDescription: boolean;
  overideMetaKeywords: boolean;
  overideMetaImage: boolean;
  overideMetaImageDescription: boolean;
  metaTitle: string;
  metaDescription: string;
  MetaKeywords: string;
  metaImage: Media;
  metaImageDescription: string;
}

// ==========================================================================
// PAGES
// ==========================================================================
export interface LandingPage {
  layoutVariant: string;
  uri?: string;
  title: string;
  subtitle: string;
  standFirst: any;
  body: any;
  layout: any;
  isHeroSearchEnabled: boolean;
  isSlideTransition: boolean;
  heroVideoUrl: string;
  heroType: string;
  heroStaticMedia: string;
  heroImage: Media;
  heroFirstFrameImage: Media;
  cta: Cta[];
  contentCarousel: ContentCarousel[];
  carousel: Carousel[];
  contentMetaTags: ContentMetaTags | undefined;
  overrideMetaTags: OverrideMetaTags | undefined;
  featureImage: Media;
}

export interface ContactPageProps {
  title: string;
  body: any;
  featureImage: Media;
  layout: any;
  dynamicRoute: string;
  slug: string;
  overrideMetaTags: OverrideMetaTags;
}

export interface StandardPage {
  subtitle: string;
  title: string;
  body: PortableTextBlock;
  featureImage: Media;
  dynamicRoute: string;
  slug: string;
  overrideMetaTags: OverrideMetaTags;
}

export interface Category {
  title?: string;
  dynamicRoute?: string;
  slug?: { _type: string; current: string };
}

// ==========================================================================
// COMPONENTS
// ==========================================================================

export interface AccordionItemProps {
  value: string;
  variant: string;
  triggerButton: React.ReactNode | React.ReactNode[];
  children: React.ReactNode | React.ReactNode[];
}

export interface DefaultFeedProps {
  layoutVariant?: string;
  type: string;
  data: Blog[] | Portfolio[];
}

export interface Media {
  crop: string;
  hotspot: string;
  description: string;
  caption: string;
  alt: string;
  blur?: boolean;
  isBackgroundImage?: boolean;
  asset: {
    _type: string;
    _id: string;
    url: string;
    metadata: any;
    width: number;
    height: number;
  };
}

export interface EmbedServices {
  emdedType: string;
  youTubeVideUrl: string;
  vimeoVideUrl: string;
  spotfiyPlayerUrl: string;
}

export interface DefaultFeedHeaderProps {
  layoutVariant: string;
  pageName?: string;
  title?: string;
  dropDownData?: BlogCategories[] | PortfolioCategories[];
  filterMenu?: any;
  selectMenuData?: { id: string; label: string; orderBy: string; sort: string }[];
  setSelectValue?: string;
}

export interface SelectMenuProps {
  pageName?: string;
  sortOptions: { id: string; label: string; orderBy: string; sort: string }[];
}

export interface Cta {
  _type?: string;
  _key?: string;
  url?: string;
  title?: string;
  email?: string;
  phoneNumber?: string;
  view?: string;
  labelId?: string;
  content?: {
    title?: string;
    dynamicRoute?: string;
    slug?: { _type: string; current: string };
  };
}

export interface ContentCarousel {
  _type: string;
  _key: string;
  _id: string;
  title: string;
  subtitle: string;
  standFirst: any;
  featureImage: Media;
  cta: Cta[];
  isBackgroundImage: boolean;
}

export interface Carousel {
  _type: string;
  _key: string;
  _id: string;
  videoUrl: string;
  heroFirstFrameImage: Media;
  featureImage: Media;
}

export interface Blog {
  _id: string;
  _key: string;
  dynamicRoute: string;
  slug: { current: string };
  subtitle: string;
  title: string;
  body: any;
  postMedoiaVariant: string;
  heroImage: Media;
  heroVideoUrl: string;
  excerpt: string;
  image: Media;
  featureImage: Media;
  cta: Cta[];
  category: Category;
  layout: LayoutConfig[];
  embedServices: EmbedServices;
  overrideMetaTags: OverrideMetaTags;
}

export interface BlogCategories {
  _type?: string;
  title?: string;
  url?: string;
  slug?: { _type: string; current: string };
  content?: {
    slug?: { _type: string; current: string };
    dynamicRoute?: string;
  };
}

export interface BlogFeedItemProps {
  layoutVariant: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  featureImage: Media;
  dynamicRoute: string;
  isHorizontalFeed?: boolean;
}

export interface Portfolio {
  _id: string;
  _key: string;
  dynamicRoute: string;
  layoutVariant: string;
  slug: { current: string };
  title: string;
  subtitle: string;
  body: any;
  postMedoiaVariant: string;
  image: Media;
  featureImage: Media;
  heroImage: Media;
  heroVideoUrl: string;
  excerpt: string;
  cta: Cta[];
  category: Category;
  layout: LayoutConfig[];
  embedServices: EmbedServices;
  overrideMetaTags: OverrideMetaTags;
}

export interface PortfolioCategories {
  _type?: string;
  title?: string;
  url?: string;
  slug?: { _type: string; current: string };
  content?: {
    slug?: { _type: string; current: string };
    dynamicRoute?: string;
  };
}

export interface TeamProfile {
  _id: string;
  _key: string;
  slug: { current: string };
  title: string;
  position: string;
  body: any;
  excerpt: string;
  contactLinks?: {
    _key: string;
    _type: string;
    title: string;
    email: string;
    phoneNumber: string;
  }[];
  featureImage: Media;
  featureImageEffect: Media;
  cta: Cta[];
  category: Category;
  layout: LayoutConfig[];
}

export interface SocialNavProps {
  variant: string;
  buttonVariant: string;
  data: {
    naviagtionList: NavigationList[];
  };
  withText: boolean;
  withIcon: boolean;
}

export interface NavigationList {
  _type?: string;
  _key?: string;
  title?: string;
  url?: string;
  content?: {
    title?: string;
    dynamicRoute?: string;
    slug?: { _type: string; current: string };
  };
  slug?: { _type: string; current: string };
  withText?: boolean;
  icon?: string;
  withIcon?: boolean;
  variant?: string;
  navigationDropdownList?: {
    _type?: string;
    _key?: string;
    title?: string;
    url?: string;
    content?: {
      title?: string;
      dynamicRoute?: string;
      slug?: { _type: string; current: string };
    };
  }[];
  platform?: string;
}

export interface SiteHeaderProps {
  layoutVariant: string;
  data: {
    _type?: string;
    _rev?: string;
    _id?: string;
    variant?: string;
    navigationUserAccount?: {
      _type?: string;
      _key?: string;
      isTitleEnabled?: boolean;
      titleNav?: string;
      title?: string;
      naviagtionList?: NavigationList[];
    };
    navigationSite?: {
      _type?: string;
      _key?: string;
      isTitleEnabled?: boolean;
      titleNav?: string;
      title?: string;
      naviagtionList?: NavigationList[];
    };
    isSearchEnabled?: boolean;
    isNavEnabled?: boolean;
    isNavAccountEnabled?: boolean;
  };
}

export interface ColumnsContent {
  _type?: string;
  _key?: string;
  isTitleEnabled?: boolean;
  titleNav?: string;
  title?: string;
  body: any;
  url?: string;
  content?: {
    title?: string;
    dynamicRoute?: string;
    slug?: { _type: string; current: string };
  };
  naviagtionList?: NavigationList[];
}
[];

export interface PaginationProps {
  pageName: string;
  totalCount: number;
  siblingCount: number;
  pageSize: number;
  layoutVariant?: string;
  urlPageNumber: number;
}

// ==========================================================================
// LAYOUTS
// ==========================================================================
export interface LayoutConfig {
  _type: string;
  title: string;
}

export interface CommonFields {
  _type: string;
  _key: string;
  layoutVariant: string;
  variant: string;
  textImgSectionImage: Media;
  showReelImage: Media;
  cta: Cta[];
  clients: {
    _type: string;
    _key: string;
    url: string;
    title: string;
    featureImage: Media;
  }[];
  category: Category;
  brandStoryImage: Media;
  posts: Blog[];
}

export interface TextColumn extends CommonFields {
  subtitle: string;
  title: string;
  isImageEnabled: boolean;
  body: any;
  featureImage: Media;
}

export interface BrandStoryLayout extends CommonFields {
  title: string;
  titleServices: string;
  body: any;
  services: {
    _type: string;
    _key: string;
    text: string;
    body: any;
  };
}

export interface ContactFormLayout {
  variant: string;
  title: string;
  body?: any;
  formMessage?: string;
}

export interface StyledImgProps {
  src?: string;
  onLoadingComplete?: (result: HTMLImageElement) => () => void;
  onError?: () => void;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  fill?: boolean;
  quality?: number;
  priority?: boolean;
  placeholder?: string;
  blurDataURL?: string;
}

export interface StyledAnimatedDivProps {
  children?: JSX.Element | JSX.Element[] | Element | Element[] | React.ReactNode | React.ReactNode[];
  style?: any;
  value?: string | number[];
  isHorizontalFeed?: boolean;
}

export interface StyledRadixProps {
  type?: string;
  defaultValue?: string | number[];
  collapsible?: boolean;
  min?: number;
  max?: number;
  step?: number;
  asChild?: any;
  open?: boolean;
  onValueChange?: (id: any) => void;
  onOpenChange?: (val: boolean) => void;
  onSelect?: () => void;
  sideOffset?: number;
  side?: string;
  align?: string;
}

export interface StyledComponentProps extends StyledAnimatedDivProps, StyledImgProps, StyledRadixProps {
  for?: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  layoutVariant?: string;
  isHorizontalFeed?: boolean;
  isVisible?: boolean;
  variant?: string;
  isFluid?: boolean;
  withColGapp?: boolean;
  withRowGap?: boolean;
  withRowCol?: boolean;
  isActive?: boolean;
  heroFirstFrameImage?: string;
  iconPosition?: string;
  active?: boolean;
  isToggle?: boolean;
  isEven?: boolean;
  isCollapsed?: boolean;
  withThumbsButton?: boolean;
  isPlayerOpen?: boolean;
  isDropdownMenu?: boolean;
  isSubmenuActive?: boolean;
  isVersionTrack?: boolean;
  htmlFor?: string;
  isSearchSidebarEnabled?: boolean;
  artworkEnabled?: boolean;
  currentRow?: number;
  isAlbumClicked?: boolean;
  isPlaylistClicked?: boolean;
  isLast?: boolean;
  duration?: number;
  isNegative?: boolean;
  hasCol4?: boolean;
  isPlayerExtended?: boolean;
  isSearchBubbleActive?: boolean;
  title?: string;
  href?: string;
  target?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// ==========================================================================
// Search
// ==========================================================================
export interface SiteSetting {
  __i18n_lang?: string;
  _id?: string;
  _createdAt?: string;
  _rev?: string;
  _updatedAt?: string;
  websiteName?: string;
}

export interface Toast {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: (id: string) => void;
  close: () => void;
}

export interface DialogBox {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: (id: string) => void;
  close: () => void;
}

// Translations
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Translation {}
