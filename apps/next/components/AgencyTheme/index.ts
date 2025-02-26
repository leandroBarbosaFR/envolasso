// AgencyTheme UI
import { AgencyTheme } from 'styled-components';
// ==========================================================================
// Icons
// ==========================================================================
import { buttonIcon1367, logo } from './icons';
// ==========================================================================
// Variables
// ==========================================================================
import { breakpoints, colors, fonts, gridColGap, gridRowGap, typeDefaults } from './variables';
// ==========================================================================
// Layout/Grid
// ==========================================================================
import { container, fluidContainer, grid, main, mediaQueries, section, body } from './layout';
// ==========================================================================
// Components/Typography
// ==========================================================================
import { Accordion } from './components/Accordion';
import { AccordionItem } from './components/AccordionItem';
import { AccordionSection } from './components/AccordionSection';
import { AddressList } from './components/AddressList';
import { Article } from './typography/Article';
import { BlockQuote } from './typography/BlockQuote';
import { BlockContent } from './components/BlockContent';
import { BlogIndex } from './components/BlogIndex';
import { BlogSinglePage } from './components/BlogSinglePage';
import { burgerNavToggle } from './buttonsLinks/burgerNavToggle';
import { button } from './buttonsLinks/button';
import { Carousel } from './components/Carousel';
import { ContactForm } from './components/ContactForm';
import { ContactIndex } from './components/ContactIndex';
import { CookieModal } from './components/CookieModal';
import { CtaNav } from './components/CtaNav';
import { CtaNavSection } from './components/CtaNavSection';
import { DefaultFeed } from './components/DefaultFeed';
import { Dialog } from './components/Dialog';
import { DropdownFilter } from './components/DropdownFilter';
import { DropdownFilterList } from './components/DropdownFilterList';
import { DropdownMenu } from './components/DropdownMenu';
import { DropdownMenuList } from './components/DropdownMenuList';
import { Embed } from './components/Embed';
import { EmbedSection } from './components/EmbedSection';
import { AgencyIcons } from './components/AgencyIcons';
import { FormInputCheckBox } from './components/FormInputCheckBox';
import { FormInputMixed } from './components/FormInputMixed';
import { FormInputPassword } from './components/FormInputPassword';
import { FormInputRadio } from './components/FormInputRadio';
import { FormInputSelect } from './components/FormInputSelect';
import { FormInputTextarea } from './components/FormInputTextarea';
import { GlobalErrorMessage } from './components/GlobalErrorMessage';
import { GlobalLoadingMessage } from './components/GlobalLoadingMessage';
import { GlobalSuccessMessage } from './components/GlobalSuccessMessage';
import { Heading } from './typography/Heading';
import { HeroSectionContentCarousel } from './components/HeroSectionContentCarousel';
import { HomeCarouselItem } from './components/HomeCarouselItem';
import { HomeContentCarouselItem } from './components/HomeContentCarouselItem';
import { HorizontalFeed } from './components/HorizontalFeed';
import { IndexPageHeader } from './components/IndexPageHeader';
import { HeroSection } from './components/HeroSection';
import { ImageTag } from './components/ImageTag';
import { LoginScreen } from './components/LoginScreen';
import { Nav } from './components/Nav';
import { NavDraw } from './components/NavDraw';
import { NavList } from './components/NavList';
import { NewsletterForm } from './components/NewsletterForm';
import { PageHeader } from './components/PageHeader';
import { PageHeaderBanner } from './components/PageHeaderBanner';
import { PageHeaderMedia } from './components/PageHeaderMedia';
import { PageNotFoundIndex } from './components/PageNotFoundIndex';
import { Pagination } from './components/Pagination';
import { Paragraph } from './typography/Paragraph';
import { Popover } from './components/Popover';
import { PortfolioIndex } from './components/PortfolioIndex';
import { PortfolioSinglePage } from './components/PortfolioSinglePage';
import { PortfolioFeedSection } from './components/PortfolioFeedSection';
import { PortfolioBody } from './components/PortfolioBody';
import { PortfolioFeedItem } from './components/PortfolioFeedItem';
import { PortfolioFeedItemDefault } from './components/PortfolioFeedItemDefault';
import { PostBody } from './components/PostBody';
import { PostFeedItem } from './components/PostFeedItem';
import { PostFeedItemDefault } from './components/PostFeedItemDefault';
import { PostFeedSection } from './components/PostFeedSection';
import { SelectMenu } from './components/SelectMenu';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { SocialNav } from './components/SocialNav';
import { StandardPageBody } from './components/StandardPageBody';
import { TeamProfileFeedItem } from './components/TeamProfileFeedItem';
import { TeamProfileFeedItemDefault } from './components/TeamProfileFeedItemDefault';
import { TeamProfileFeedSection } from './components/TeamProfileFeedSection';
import { TextImgSection } from './components/TextImgSection';
import { TextSection } from './components/TextSection';
import { TextSectionAside } from './components/TextSectionAside';
import { Toast } from './components/Toast';
import { ToolTip } from './components/ToolTip';

// ==========================================================================
// AgencyTheme
// ==========================================================================
const theme: AgencyTheme = {
  name: 'AgencyTheme',
  // ==========================================================================
  // Icons
  // ==========================================================================
  buttonIcon1367,
  logo,
  // ==========================================================================
  // variables
  // ==========================================================================
  breakpoints,
  colors,
  fonts,
  gridColGap,
  gridRowGap,
  typeDefaults,
  // ==========================================================================
  // Layout/Grid
  // ==========================================================================
  container,
  fluidContainer,
  grid,
  main,
  mediaQueries,
  section,
  body,
  // ==========================================================================
  // Components/Typography
  // ==========================================================================
  Accordion,
  AccordionItem,
  AccordionSection,
  AddressList,
  Article,
  BlockQuote,
  BlogIndex,
  BlockContent,
  BlogSinglePage,
  burgerNavToggle,
  button,
  Carousel,
  ContactForm,
  ContactIndex,
  CookieModal,
  CtaNav,
  CtaNavSection,
  DefaultFeed,
  Dialog,
  DropdownFilter,
  DropdownFilterList,
  DropdownMenu,
  DropdownMenuList,
  Embed,
  EmbedSection,
  AgencyIcons,
  FormInputCheckBox,
  FormInputMixed,
  FormInputPassword,
  FormInputRadio,
  FormInputSelect,
  FormInputTextarea,
  GlobalErrorMessage,
  GlobalLoadingMessage,
  GlobalSuccessMessage,
  Heading,
  HeroSection,
  HeroSectionContentCarousel,
  HomeCarouselItem,
  HomeContentCarouselItem,
  HorizontalFeed,
  IndexPageHeader,
  ImageTag,
  LoginScreen,
  Nav,
  NavDraw,
  NavList,
  NewsletterForm,
  PageHeader,
  PageHeaderBanner,
  PageHeaderMedia,
  PageNotFoundIndex,
  Pagination,
  Paragraph,
  Popover,
  PortfolioIndex,
  PortfolioSinglePage,
  PortfolioFeedSection,
  PortfolioFeedItem,
  PortfolioBody,
  PortfolioFeedItemDefault,
  PostBody,
  PostFeedItem,
  PostFeedItemDefault,
  PostFeedSection,
  SelectMenu,
  SiteFooter,
  SiteHeader,
  SocialNav,
  StandardPageBody,
  TeamProfileFeedItem,
  TeamProfileFeedItemDefault,
  TeamProfileFeedSection,
  TextImgSection,
  TextSection,
  TextSectionAside,
  Toast,
  ToolTip
};

export default theme;
