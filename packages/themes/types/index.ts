// ==========================================================================
// Icons
// ==========================================================================
import { ButtonIcon1367 } from './icons';
import { LogoTheme } from './icons';
// ==========================================================================
// Variables
// ==========================================================================
import { BreakPoints, Colors, Fonts, GridColGap, GridRowGap, TypeDefaults } from './variables';
// ==========================================================================
// Layout/Grid
// ==========================================================================
import { Container, FluidContainer, Grid, MainTheme, MediaQueries, Section, Body } from './layout';
// ==========================================================================
// Components/Typography
// ==========================================================================
import { AccordionItemTheme } from './components/AccordionItem';
import { AccordionSectionTheme } from './components/AccordionSection';
import { AccordionTheme } from './components/Accordion';
import { AddressListTheme } from './components/AddressList';
import { ArticleTheme } from './typography/Article';
import { BlockContentTheme } from './components/BlockContent';
import { BlockQuoteTheme } from './typography/BlockQuote';
import { BlogIndexTheme } from './components/BlogIndex';
import { BlogSinglePageTheme } from './components/BlogSinglePage';
import { BurgerNavToggleTheme } from './buttonsLinks/burgerNavToggle';
import { ButtonTheme } from './buttonsLinks/button';
import { ContactFormTheme } from './components/ContactForm';
import { CarouselTheme } from './components/Carousel';
import { CookieModalTheme } from './components/CookieModal';
import { ContactIndexTheme } from './components/ContactIndex';
import { CtaNavSectionTheme } from './components/CtaNavSection';
import { CtaNavTheme } from './components/CtaNav';
import { DefaultFeedTheme } from './components/DefaultFeed';
import { DialogTheme } from './components/Dialog';
import { DropdownFilterListTheme } from './components/DropdownFilterList';
import { DropdownFilterTheme } from './components/DropdownFilter';
import { DropdownMenuListTheme } from './components/DropdownMenuList';
import { DropdownMenuTheme } from './components/DropdownMenu';
import { EmbedSectionTheme } from './components/EmbedSection';
import { EmbedTheme } from './components/Embed';
import { AgencyIconsTheme } from './components/AgencyIcons';
import { FormInputCheckBoxTheme } from './components/FormInputCheckBox';
import { FormInputMixedTheme } from './components/FormInputMixed';
import { FormInputPasswordTheme } from './components/FormInputPassword';
import { FormInputRadioTheme } from './components/FormInputRadio';
import { FormInputSelectTheme } from './components/FormInputSelect';
import { FormInputTextareaTheme } from './components/FormInputTextarea';
import { GlobalErrorMessageTheme } from './components/GlobalErrorMessage';
import { GlobalLoadingMessageTheme } from './components/GlobalLoadingMessage';
import { GlobalSuccessMessageTheme } from './components/GlobalSuccessMessage';
import { HeadingTheme } from './typography/Heading';
import { HeroSectionTheme } from './components/HeroSection';
import { HeroSectionContentCarouselTheme } from './components/HeroSectionContentCarousel';
import { HomeCarouselItemTheme } from './components/HomeCarouselItem';
import { HomeContentCarouselItemTheme } from './components/HomeContentCarouselItem';
import { HorizontalFeedTheme } from './components/HorizontalFeed';
import { IndexPageHeaderTheme } from './components/IndexPageHeader';
import { ImageTagTheme } from './components/ImageTag';
import { LoginScreenTheme } from './components/LoginScreen';
import { NavDrawTheme } from './components/NavDraw';
import { NavListTheme } from './components/NavList';
import { NavTheme } from './components/Nav';
import { NewsletterFormTheme } from './components/NewsletterForm';
import { PageHeaderTheme } from './components/PageHeader';
import { PageHeaderBannerTheme } from './components/PageHeaderBanner';
import { PageHeaderMediaTheme } from './components/PageHeaderMedia';
import { PageNotFoundIndexTheme } from './components/PageNotFoundIndex';
import { PaginationTheme } from './components/Pagination';
import { ParagraphTheme } from './typography/Paragraph';
import { PopoverTheme } from './components/Popover';
import { PortfolioIndexTheme } from './components/PortfolioIndex';
import { PortfolioSinglePageTheme } from './components/PortfolioSinglePage';
import { PortfolioFeedSectionTheme } from './components/PortfolioFeedSection';
import { PortfolioFeedItemDefaultTheme } from './components/PortfolioFeedItemDefault';
import { PortfolioFeedItemTheme } from './components/PortfolioFeedItem';
import { PortfolioBodyTheme } from './components/PortfolioBody';
import { PostBodyTheme } from './components/PostBody';
import { PostFeedItemDefaultTheme } from './components/PostFeedItemDefault';
import { PostFeedItemTheme } from './components/PostFeedItem';
import { PostFeedSectionTheme } from './components/PostFeedSection';
import { SelectMenuTheme } from './components/SelectMenu';
import { SiteFooterTheme } from './components/SiteFooter';
import { SiteHeaderTheme } from './components/SiteHeader';
import { SocialNavTheme } from './components/SocialNav';
import { StandardPageBodyTheme } from './components/StandardPageBody';
import { TextImgSectionTheme } from './components/TextImgSection';
import { TextSectionAsideTheme } from './components/TextSectionAside';
import { TextSectionTheme } from './components/TextSection';
import { ToastTheme } from './components/Toast';
import { ToolTipTheme } from './components/ToolTip';

// ==========================================================================
// Agency Theme Types
// ==========================================================================
export interface ThemeTypes {
  name: string;
  // ==========================================================================
  // Icons
  // ==========================================================================
  buttonIcon1367: ButtonIcon1367;
  logo: LogoTheme;
  // ==========================================================================
  // variables
  // ==========================================================================
  breakpoints: BreakPoints;
  colors: Colors;
  fonts: Fonts;
  gridColGap: GridColGap;
  gridRowGap: GridRowGap;
  typeDefaults: TypeDefaults;
  // ==========================================================================
  // Layout/Grid
  // ==========================================================================
  container: Container;
  fluidContainer: FluidContainer;
  grid: Grid;
  main: MainTheme;
  mediaQueries: MediaQueries;
  section: Section;
  body: Body;
  // ==========================================================================
  // Components/Typography
  // ==========================================================================
  Accordion: AccordionTheme;
  AccordionItem: AccordionItemTheme;
  AccordionSection: AccordionSectionTheme;
  AddressList: AddressListTheme;
  Article: ArticleTheme;
  BlockContent: BlockContentTheme;
  BlockQuote: BlockQuoteTheme;
  BlogIndex: BlogIndexTheme;
  BlogSinglePage: BlogSinglePageTheme;
  burgerNavToggle: BurgerNavToggleTheme;
  button: ButtonTheme;
  ContactForm: ContactFormTheme;
  ContactIndex: ContactIndexTheme;
  Carousel: CarouselTheme;
  CookieModal: CookieModalTheme;
  CtaNav: CtaNavTheme;
  CtaNavSection: CtaNavSectionTheme;
  DefaultFeed: DefaultFeedTheme;
  Dialog: DialogTheme;
  DropdownFilter: DropdownFilterTheme;
  DropdownFilterList: DropdownFilterListTheme;
  DropdownMenu: DropdownMenuTheme;
  DropdownMenuList: DropdownMenuListTheme;
  Embed: EmbedTheme;
  EmbedSection: EmbedSectionTheme;
  AgencyIcons: AgencyIconsTheme;
  FormInputCheckBox: FormInputCheckBoxTheme;
  FormInputMixed: FormInputMixedTheme;
  FormInputPassword: FormInputPasswordTheme;
  FormInputRadio: FormInputRadioTheme;
  FormInputSelect: FormInputSelectTheme;
  FormInputTextarea: FormInputTextareaTheme;
  GlobalErrorMessage: GlobalErrorMessageTheme;
  GlobalLoadingMessage: GlobalLoadingMessageTheme;
  GlobalSuccessMessage: GlobalSuccessMessageTheme;
  Heading: HeadingTheme;
  HeroSection: HeroSectionTheme;
  HeroSectionContentCarousel: HeroSectionContentCarouselTheme;
  HomeCarouselItem: HomeCarouselItemTheme;
  HomeContentCarouselItem: HomeContentCarouselItemTheme;
  HorizontalFeed: HorizontalFeedTheme;
  IndexPageHeader: IndexPageHeaderTheme;
  LoginScreen: LoginScreenTheme;
  ImageTag: ImageTagTheme;
  Nav: NavTheme;
  NavDraw: NavDrawTheme;
  NavList: NavListTheme;
  NewsletterForm: NewsletterFormTheme;
  PageHeader: PageHeaderTheme;
  PageHeaderBanner: PageHeaderBannerTheme;
  PageNotFoundIndex: PageNotFoundIndexTheme;
  PageHeaderMedia: PageHeaderMediaTheme;
  Pagination: PaginationTheme;
  Paragraph: ParagraphTheme;
  Popover: PopoverTheme;
  PortfolioIndex: PortfolioIndexTheme;
  PortfolioBody: PortfolioBodyTheme;
  PortfolioSinglePage: PortfolioSinglePageTheme;
  PortfolioFeedSection: PortfolioFeedSectionTheme;
  PortfolioFeedItemDefault: PortfolioFeedItemDefaultTheme;
  PortfolioFeedItem: PortfolioFeedItemTheme;
  PostBody: PostBodyTheme;
  PostFeedItem: PostFeedItemTheme;
  PostFeedItemDefault: PostFeedItemDefaultTheme;
  PostFeedSection: PostFeedSectionTheme;
  SelectMenu: SelectMenuTheme;
  SiteFooter: SiteFooterTheme;
  SiteHeader: SiteHeaderTheme;
  SocialNav: SocialNavTheme;
  StandardPageBody: StandardPageBodyTheme;
  TextImgSection: TextImgSectionTheme;
  TextSection: TextSectionTheme;
  TextSectionAside: TextSectionAsideTheme;
  Toast: ToastTheme;
  ToolTip: ToolTipTheme;
}
