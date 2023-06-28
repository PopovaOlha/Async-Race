import ElementCreater from '../../../util/element-creator';
import LinkView from '../header-links/header-links';
import HeadlineView from '../headline/headline';
import MainView from '../../main/main-view/main';
import View from '../../view';

const CssStyles = {
    LEFT_COLUMN: 'left-column',
    CUSTOM_SCROLL_BAR: 'custom-scroll_bar',
    SCROLL_BOX: 'scroll_box',
    LEFT_COLUMN_CONTAINER: 'left-column_container',
    HEADER: 'header',
    CSS_LOGO: 'css-logo',
    LOGO: 'logo',
    CSS_LOGO_NAME: 'css-logo_name',
    SHARE_CONTENT: 'share-content',
    SHARE_MENU: 'share-menu',
    SHARE_EMAIL: 'share-email',
    SHARE_FACEBOOK: 'share-facebook',
    SHARE_TWITTER: 'share-twitter',
    EMAIL_LOGO: 'email-logo',
    FACEBOOK_LOGO: 'facebook-logo',
    TWITTER_LOGO: 'twitter-logo',
};

export default class HeaderView extends View {
    constructor() {
        const paramsCol = {
            tag: 'div',
            classNames: [CssStyles.LEFT_COLUMN, CssStyles.CUSTOM_SCROLL_BAR],
            textContent: '',
            callback: null,
        };
        super(paramsCol);
        this.configureView();
    }
    public configureView() {
        const paramsScroll = {
            tag: 'div',
            classNames: [CssStyles.SCROLL_BOX],
            textContent: '',
            callback: null,
        };
        const creatorScroll = new ElementCreater({ param: paramsScroll });
        const creatorMain = new MainView();
        const creatorHeadline = new HeadlineView();
        this.elementCreater.addInnerElement(creatorScroll);
        const paramLeftContainer = {
            tag: 'div',
            classNames: [CssStyles.LEFT_COLUMN_CONTAINER],
            textContent: '',
            callback: null,
        };
        const creatorContainer = new ElementCreater({ param: paramLeftContainer });
        creatorScroll.addInnerElement(creatorContainer);
        const paramHeader = {
            tag: 'header',
            classNames: [CssStyles.HEADER],
            textContent: '',
            callback: null,
        };
        const creatorHeader = new ElementCreater({ param: paramHeader });
        creatorScroll.addInnerElement(creatorHeader);
        creatorScroll.addInnerElement(creatorHeadline.getHtmlDocument());
        creatorScroll.addInnerElement(creatorMain.getHtmlDocument());

        const paramHeaderLogo = {
            tag: 'div',
            classNames: [CssStyles.CSS_LOGO],
            textContent: '',
            callback: null,
        };
        const creatorCssLogo = new ElementCreater({ param: paramHeaderLogo });
        creatorHeader.addInnerElement(creatorCssLogo);

        const paramLogo = {
            tag: 'img',
            classNames: [CssStyles.LOGO],
            textContent: '',
            callback: null,
        };
        const creatorLogo = new ElementCreater({ param: paramLogo });
        creatorLogo.addAttribute('src', '../../../images/apple.png');
        creatorCssLogo.addInnerElement(creatorLogo);

        const paramLogName = {
            tag: 'span',
            classNames: [CssStyles.CSS_LOGO_NAME],
            textContent: 'CSS Diner',
            callback: null,
        };
        const createLogName = new ElementCreater({ param: paramLogName });
        creatorCssLogo.addInnerElement(createLogName);

        const paramShareContent = {
            tag: 'div',
            classNames: [CssStyles.SHARE_CONTENT],
            textContent: '',
            callback: null,
        };
        const createShareContent = new ElementCreater({ param: paramShareContent });
        creatorHeader.addInnerElement(createShareContent);

        const paramShareMenu = {
            tag: 'span',
            classNames: [CssStyles.SHARE_MENU],
            textContent: 'Share',
            callback: null,
        };
        const createShareMenu = new ElementCreater({ param: paramShareMenu });
        createShareContent.addInnerElement(createShareMenu);

        const linkItems = [
            {
                LinkStyle: [CssStyles.SHARE_EMAIL],
                ImgStyle: [CssStyles.EMAIL_LOGO],
                LinkName: 'a',
                ImgName: 'img',
                Root: '../../../images/email-envelope.svg',
            },
            {
                LinkStyle: [CssStyles.SHARE_FACEBOOK],
                ImgStyle: [CssStyles.FACEBOOK_LOGO],
                LinkName: 'a',
                ImgName: 'img',
                Root: '../../../images/facebook-social-logo.svg',
            },
            {
                LinkStyle: [CssStyles.SHARE_TWITTER],
                ImgStyle: [CssStyles.TWITTER_LOGO],
                LinkName: 'a',
                ImgName: 'img',
                Root: '../../../images/twitter.svg',
            },
        ];

        linkItems.forEach((item) => {
            const imageElement = new LinkView(item.ImgName, item.ImgStyle);
            imageElement.elementCreater.addAttribute('src', item.Root);
            const linkElement = new LinkView(item.LinkName, item.LinkStyle);
            linkElement.elementCreater.addAttribute('href', '#');
            linkElement.elementCreater.addInnerElement(imageElement.getHtmlDocument());
            createShareContent.addInnerElement(linkElement.getHtmlDocument());
        });
    }
}
