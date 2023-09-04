import { Snowflake, ApplicationCommandDataResolvable, PermissionResolvable, Collection } from "discord.js";
import React, { ReactNode } from "react";
type SnowflakeOrString = Snowflake | string;
interface RunOptions<T extends Record<string, any>> {
    client: ExtendedClient;
    interaction: T;
    args: string[];
}
type RunFunction<T extends Record<string, any>> = (options: RunOptions<T>) => unknown;
interface ExtendedInteraction<T> {
    member: T;
    options: Record<string, any>;
}
interface ExtendedButtonInteraction<T> {
    member: T;
    fields: Record<string, any>;
}
interface CommandOptions {
    userPermissions?: PermissionResolvable[];
    guildOnly?: boolean;
    ownerOnly?: boolean;
    directory?: string;
    description?: string;
}
type CommandType<T extends Record<string, any>> = ApplicationCommandDataResolvable & {
    run: RunFunction<T>;
    options?: CommandOptions;
};
interface Verification {
    enabled: boolean;
    blacklisted: boolean;
    visitor: boolean | null;
    isVerified: boolean | null;
}
interface VerificationData {
    _id: string;
    userID: string;
    klasse: string;
    email: string;
    status: VerificationRequestStatus;
    requestedCodes: boolean;
    recoveryCodes: string[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
interface VerificationFormFields {
    "input-klasse": string;
    "input-email": string;
}
type VerificationRequestStatus = "N/A" | "Accepted" | "Declined";
interface VerificationRequest {
    userID: SnowflakeOrString;
    klasse: string;
    email: string;
    status: VerificationRequestStatus;
}
interface Datenschutz {
    data: VerificationData;
    hasRequestedCodes: boolean;
    hasDeletedData: boolean;
}
interface ServerStats {
    online: number;
    members: number;
    verifiedMembers: number;
    footer: Array<[string, Date]>;
}
interface KigaPosts {
    _id: string;
    guildID: string;
    enabled: boolean;
    holiday: boolean;
    postChannel: string;
    __v: number;
}
interface KigaPostData extends KigaPosts {
    messageID: string;
    description: string;
    avatarURL: string;
    footerText: string;
}
interface AutoResponse {
    _id: string;
    guildID: string;
    enabled: boolean;
    trigger: {
        trigger: string;
        response: string;
    }[];
}
type MyCollection<T> = Collection<string, T>;
interface ExtendedClient {
    commands: MyCollection<any>;
    buttons: MyCollection<any>;
    modals: MyCollection<any>;
    cooldowns: MyCollection<any>;
    verification: MyCollection<any>;
    autoResponses: MyCollection<any>;
    kigaPosts: MyCollection<any>;
}
type Author = {
    name: string;
    picture: string;
};
type PostType = {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
};
type WebPostProps = {
    allPosts: PostType[];
};
type EventDataProps = {
    date: string;
    title: string;
    description: string;
};
interface PageData {
    text: string;
    wait: number;
}
export declare const data: PageData[];
type Profile = {
    name: string;
    sex: string;
    avatar: string;
    about: string;
    biography?: string;
    facts: string[];
    wasIchGerneMag: string[];
    diamonds?: Diamond[];
    instagram?: string;
    snapchat?: string;
};
type AvatarProps = {
    name: string;
    picture: string;
};
type Diamond = {
    id: string;
    src: string;
};
type ProfileType = Record<string, Profile>;
type ProfilePageProps = {
    profile?: Profile;
};
interface SymbolProps {
    symbol: string;
    value: number;
}
type AlertProps = {
    preview?: boolean;
};
interface CardProps {
    number: number;
    onClick: () => void;
    isFlipped: boolean;
}
type ContainerProps = {
    children?: React.ReactNode;
};
type ImageProps = {
    title: string;
    src: string;
    slug?: string;
};
type DateProps = {
    dateString: string;
};
type HeroProps = {
    title: string;
    coverImage?: string;
    date?: string;
    src?: string;
    excerpt?: string;
    author?: Author;
    slug?: string;
};
type IntroProps = {};
type DataType = {
    text: string;
    wait: number;
};
type PostProps = {
    children?: ReactNode;
};
export { SnowflakeOrString, RunOptions, RunFunction, ExtendedInteraction, ExtendedButtonInteraction, CommandOptions, CommandType, Verification, VerificationData, Datenschutz, ServerStats, KigaPosts, KigaPostData, AutoResponse, VerificationFormFields, VerificationRequest, MyCollection, ExtendedClient, Author, PostType, WebPostProps, EventDataProps, PageData, Profile, AvatarProps, Diamond, ProfileType, ProfilePageProps, SymbolProps, AlertProps, CardProps, ContainerProps, ImageProps, DateProps, HeroProps, IntroProps, PostProps, DataType, };
