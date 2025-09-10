interface CareerEvent {
    deadline: string;
    link: string;
    title: string;
    type: string;
}

interface Category {
    hidden_on: null | string;
    id: number;
    image: {
        url: string;
    };
    kind: "link" | "text";
    subcategories: Array<Category> | null;
    tag: null | string;
    translations: Array<{
        content: string;
        id: number;
        language: string;
        link: null | string;
        title: string;
    }>;
    visibility: "all";
    visible_on: null | string;
}

interface Crous {
    id: string;
    name: string;
}

interface ExternalService {
    description: string;
    picture: {
        url: string;
    };
    title: string;
    type: string;
    url: string;
}

interface FeedChannel {
    name: string;
    picture: null | string;
    uuid: string;
}

interface EventsFeed {
    content: string;
    end: string;
    start: string;
    title: string;
    type: "event";
    url: string;
}

interface FacebookFeed {
    content: string;
    external_link: string;
    like_count: number;
    picture?: string;
    share_count: number;
    start: string;
    title: string;
    type: "facebook";
    url: string;
}

interface NewsFeed {
    content: string;
    picture?: string;
    start: string;
    title: string;
    type: "news";
    url: string;
}

interface FeedPost {
    channel: {
        name: string;
        picture: null | string;
        uuid: string;
    };
    content: string;
    created_at: string;
    picture: string;
    pinned: boolean;
    reactions: {
        like: {
            count: number;
            self: boolean;
        };
    };
    uuid: string;
}

type TwitterFeed = never;

interface YouTubeFeed {
    content: string;
    picture: string;
    start: string;
    title: string;
    type: "youtube";
    url: string;
    viewcount: string;
}

interface Instance {
    id: string;
    name: string;
    logo?: string;
    casurl?: string;
    clientid?: string;
    scope?: string;
    uriend?: boolean;
}

interface Lesson {
    description: string;
    dtend: string;
    dtstart: string;
    location: string;
    locations: Array<string>;
    summary: string;
    timezone: string;
    uid: string;
}

interface Location {
    description: string;
    latitude: string;
    longitude: string;
    map: {
        url: never;
    };
    map_x: never;
    map_y: never;
    picture: {
        url: never;
    };
    sublocations: Array<Location>;
    title: string;
    virtual: boolean;
    visibility: string;
}

type Platform = "android" | "ios";

interface Metadata {
    context: string;
    platform: Platform;
    published: string;
    since: number;
    version_code: string;
    version_name: string;
}

interface OAuthLogin {
    token_type: string;
    scope: string;
    access_token: string;
    refresh_token: string;
}
interface OAuthUserData {
    uid: string;
    firstname: string;
    lastname: string;
    program: string;
    promotion: string;
    picture: string;
    id_token: string;
}

interface Profile {
    title: string;
    uuid: string;
}

interface QuickAccess {
    email: string;
    location: string;
    phone: string;
    title: string;
}

type Response<T> = {
    timestamp: string;
} & ({
    response: T;
    state: "ok";
} | {
    message: string;
    state: "unauthorized";
} | {
    state: "internal_server_error";
});

interface CrousRestaurant {
    closed: boolean;
    comment: string;
    contact: string;
    coordinates: {
        latitude: string;
        longitude: string;
    };
    id: string;
    kind: string;
    name: string;
    picture: string;
    schedule: Array<{
        evening: boolean;
        morning: boolean;
        noon: boolean;
    }>;
}

interface User {
    firstname: string;
    id_token: string;
    lastname: string;
    /**
     * Can be an empty string.
     */
    picture: string;
    program: string;
    /**
     * Should be used for authenticated requests.
     */
    token: string;
    /**
     * Only available when using OAuth login
     */
    refreshToken?: string;
    /**
     * Department extracted from JWT token
     */
    department?: null | string;
}

declare const getCareerEvents: (instance: string) => Promise<Response<CareerEvent>>;

declare const getCrous: (instance: string, token: string) => Promise<Array<Crous>>;

declare const getCrousRestaurants: (instance: string, token: string, crous: string) => Promise<Array<CrousRestaurant>>;

declare const getEventsFeed: (instance: string) => Promise<Array<EventsFeed>>;

declare const getExternalServices: (instance: string) => Promise<Array<ExternalService>>;

declare const getFacebookFeed: (instance: string) => Promise<Array<FacebookFeed>>;

declare const getFeedChannels: (instance: string) => Promise<Array<FeedChannel>>;

declare const getFeedPosts: (instance: string) => Promise<Array<FeedPost>>;

declare const getKnowledgebase: (instance: string) => Promise<Array<Category>>;

declare const getLocations: (instance: string) => Promise<Array<Location>>;

declare const loginWithCredentials: (instance: string, username: string, password: string) => Promise<User>;

declare const loginWithOAuth: (instance: string, oauthToken: string) => Promise<User>;

declare const getCASURL: (instance: string) => string;

declare const refreshOAuthToken: (instance: string, refreshToken: string) => Promise<OAuthLogin>;
declare const refreshOAuthTokenWithUser: (instance: string, refreshToken: string) => Promise<User>;

declare const getMetadata: (instance: string, platform: Platform) => Promise<Metadata>;

declare const getNewsFeed: (instance: string) => Promise<Array<NewsFeed>>;

declare const getPlanning: (instance: string, token: string) => Promise<Array<Lesson>>;

declare const getProfiles: (instance: string) => Promise<Array<Profile>>;

declare const getQuickAccesses: (instance: string) => Promise<Array<QuickAccess>>;

declare const getTwitterFeed: (instance: string) => Promise<Array<TwitterFeed>>;

declare const getYouTubeFeed: (instance: string) => Promise<Array<YouTubeFeed>>;

declare const INSTANCES: Array<Instance>;

declare class AppSchoError extends Error {
    constructor(message: string);
}
declare class CASNotSupportedError extends AppSchoError {
    constructor(instance: string);
}
declare class InternalServerError extends AppSchoError {
    constructor();
}
declare class NoPlanningSubscriptionError extends AppSchoError {
    constructor();
}
declare class NotFoundError extends AppSchoError {
    constructor();
}
declare class UnauthorizedError extends AppSchoError {
    constructor();
}

declare const LOGOS: {
    readonly bsb: any;
    readonly edhec: any;
    readonly emstra: any;
    readonly esarc: any;
    readonly esg: any;
    readonly essec: any;
    readonly digitalcampus: any;
    readonly macromedia: any;
    readonly hec: any;
    readonly ipp: any;
    readonly ieu: any;
    readonly iseg: any;
    readonly lisaa: any;
    readonly merkure: any;
    readonly mbs: any;
    readonly eigsi: any;
    readonly essca: any;
    readonly ucly: any;
    readonly alijia: any;
    readonly epp: any;
    readonly esigelec: any;
    readonly estp: any;
    readonly esaip: any;
    readonly iicp: any;
    readonly ueve: any;
    readonly pstb: any;
    readonly regent: any;
    readonly sciencepo: any;
    readonly scpoaix: any;
    readonly ubmont: any;
    readonly uclouvain: any;
    readonly univeiffel: any;
    readonly unilyon3: any;
    readonly uniassas: any;
    readonly univangers: any;
    readonly unimons: any;
    readonly unimes: any;
    readonly upjv: any;
    readonly univpoitiers: any;
    readonly unitoulon: any;
};

export { AppSchoError, CASNotSupportedError, type CareerEvent, type Category, type Crous, type CrousRestaurant, type EventsFeed, type ExternalService, type FacebookFeed, type FeedChannel, type FeedPost, INSTANCES, type Instance, InternalServerError, LOGOS, type Lesson, type Location, type Metadata, type NewsFeed, NoPlanningSubscriptionError, NotFoundError, type OAuthLogin, type OAuthUserData, type Platform, type Profile, type QuickAccess, type Response, type TwitterFeed, UnauthorizedError, type User, type YouTubeFeed, getCASURL, getCareerEvents, getCrous, getCrousRestaurants, getEventsFeed, getExternalServices, getFacebookFeed, getFeedChannels, getFeedPosts, getKnowledgebase, getLocations, getMetadata, getNewsFeed, getPlanning, getProfiles, getQuickAccesses, getTwitterFeed, getYouTubeFeed, loginWithCredentials, loginWithOAuth, refreshOAuthToken, refreshOAuthTokenWithUser };
