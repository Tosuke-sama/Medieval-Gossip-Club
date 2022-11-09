export interface TdFooterProps {
    copyright?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    logo?: {
        type: ObjectConstructor;
        value?: FooterLogo;
        required?: boolean;
    };
    textLinkList?: {
        type: ArrayConstructor;
        value?: Array<LinkObj>;
        required?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'text' | 'logo';
        required?: boolean;
    };
}
export interface FooterLogo {
    icon: string;
    title?: string;
    titleUrl?: string;
}
export interface LinkObj {
    name: string;
    url?: string;
    openType?: 'navigate' | 'redirect' | 'relaunch' | 'switchTab' | 'navigateBack';
}
