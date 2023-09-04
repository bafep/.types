import {
    Snowflake,
    ApplicationCommandDataResolvable,
    PermissionResolvable,
    Collection,
} from "discord.js";

import React, { ReactNode } from "react";

// Types for the discord module:

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

// Types for the web module:

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

// page-data (landing page)
interface PageData {
    text: string;
    wait: number;
}

export const data: PageData[] = [
    { text: "4C 2023", wait: 2000 },
    { text: "Einzigartig 🌟", wait: 3000 },
    { text: "Innovativ 💡", wait: 3000 },
    { text: "Hingabe 🌼", wait: 3000 },
    { text: "Freude 😄", wait: 3000 },
    { text: "Träumerei 🌌", wait: 3000 },
    { text: "Design 💎", wait: 3000 },
    { text: "Begeisterung 🎉", wait: 3000 },
    { text: "Einfall 🌈", wait: 3000 },
    { text: "Feinheit 🎨", wait: 3000 },
    { text: "Individuell 🧩", wait: 3000 },
    { text: "Vielfalt 🌼", wait: 3000 },
    { text: "Zauber ✨", wait: 3000 },
    { text: "Klarheit 📣", wait: 3000 },
    { text: "Faszination ✨", wait: 3000 },
    { text: "Erfindung 🛠️", wait: 3000 },
    { text: "Farben 🌈", wait: 3000 },
    { text: "Weite 🌏", wait: 3000 },
    { text: "Innovation 💭", wait: 3000 },
    { text: "Vision 👓", wait: 3000 },
    { text: "Echtheit 🌟", wait: 3000 },
    { text: "Ausdruck 🎭", wait: 3000 },
    { text: "Inspiration 💡", wait: 3000 },
    { text: "Empathie 🌼", wait: 3000 },
    { text: "Intuition 🌿", wait: 3000 },
    { text: "Mut 🦁", wait: 3000 },
    { text: "Neugier 🕵️", wait: 3000 },
    { text: "Freiheit 🦋", wait: 3000 },
    { text: "Erfahrung 🌅", wait: 3000 },
    { text: "Kühnheit 🦅", wait: 3000 },
    { text: "Einfluss 💪", wait: 3000 },
    { text: "Wissen 📚", wait: 3000 },
    { text: "Eigenheit 🌈", wait: 3000 },
    { text: "Poesie ✍️", wait: 3000 },
    { text: "Ungewöhnlich 🎩", wait: 3000 },
    { text: "Erwachen 🌞", wait: 3000 },
    { text: "Glanz ✨", wait: 3000 },
    { text: "Lebendig 🌱", wait: 3000 },
    { text: "Verzauberung 🪄", wait: 3000 },
    { text: "Gestaltung 🎨", wait: 3000 },
    { text: "Faszinierend 💫", wait: 3000 },
    { text: "Erschaffen 🛠️", wait: 3000 },
    { text: "Wandel 🌀", wait: 3000 },
    { text: "Atemberaubend 🌬️", wait: 3000 },
    { text: "Gemeinschaft 🤝", wait: 3000 },
    { text: "Leidenschaft 🌹", wait: 3000 },
    { text: "Entdeckung 🔍", wait: 3000 },
    { text: "Freude 🌞", wait: 3000 },
    { text: "Frische 🌿", wait: 3000 },
    { text: "Glückseligkeit 🌈", wait: 3000 },
    { text: "Harmonie 🎶", wait: 3000 },
    { text: "Zauberhaft ✨", wait: 3000 },
    { text: "Erleuchtung ☀️", wait: 3000 },
    { text: "Geheimnis 🕵️", wait: 3000 },
    { text: "Euphorie 🌟", wait: 3000 },
    { text: "Verwunderung ❓", wait: 3000 },
    { text: "Abenteuer 🌄", wait: 3000 },
    { text: "Veränderung 🌱", wait: 3000 },
    { text: "Fortschritt 🚀", wait: 3000 },
    { text: "Glück 🍀", wait: 3000 },
    { text: "Herzlichkeit ❤️", wait: 3000 },
    { text: "Schöpfung 🎨", wait: 3000 },
    { text: "Zufriedenheit 😊", wait: 3000 },
    { text: "Lebendigkeit 🌟", wait: 3000 },
    { text: "Zielstrebigkeit 🏁", wait: 3000 },
    { text: "Verwirklichung 🌄", wait: 3000 },
    { text: "Erneuerung 🔄", wait: 3000 },
    { text: "Freigeist 🕊️", wait: 3000 },
    { text: "Abenteuerlust 🌍", wait: 3000 },
    { text: "Vertrauen 🤝", wait: 3000 },
    { text: "Glücksmoment 🌈", wait: 3000 },
    { text: "Leuchten ✨", wait: 3000 },
    { text: "Erhabenheit 🌟", wait: 3000 },
    { text: "Erkenntnis 🧠", wait: 3000 },
    { text: "Wunder 🌌", wait: 3000 },
    { text: "Einsicht 👁️", wait: 3000 },
    { text: "Begeisterung ⚡", wait: 3000 },
    { text: "Veränderung 🌀", wait: 3000 },
    { text: "Glückselig 🌻", wait: 3000 },
    { text: "Stärke 💪", wait: 3000 },
    { text: "Erfüllung 💖", wait: 3000 },
    { text: "Lebensfreude 🌞", wait: 3000 },
    { text: "Genuss 🍃", wait: 3000 },
    { text: "Ruhe 🌅", wait: 3000 },
    { text: "Ehrfurcht 🙌", wait: 3000 },
    { text: "Neubeginn 🌱", wait: 3000 },
    { text: "Lächeln 😊", wait: 3000 },
    { text: "Verzauberung 🌟", wait: 3000 },
    { text: "Erlebnis 🌄", wait: 3000 },
    { text: "Wohlgefühl 🌺", wait: 3000 },
    { text: "Abenteuer 🌍", wait: 3000 },
    { text: "Verbindung 💞", wait: 3000 },
    { text: "Erholung 🏞️", wait: 3000 },
    { text: "Faszination ✨", wait: 3000 },
    { text: "Rätsel ❓", wait: 3000 },
    { text: "Entdeckung 🔍", wait: 3000 },
    { text: "Wachstum 🌱", wait: 3000 },
    { text: "Erneuerung 🔄", wait: 3000 },
    { text: "Freiheit 🌈", wait: 3000 },
    { text: "Ziel 🎯", wait: 3000 },
    { text: "Strahlen ☀️", wait: 3000 },
    { text: "Verwunderung 🤯", wait: 3000 },
    { text: "Flug 🦋", wait: 3000 },
    { text: "Begegnung 👋", wait: 3000 },
    { text: "Erkundung 🌄", wait: 3000 },
    { text: "Glück 🌞", wait: 3000 },
    { text: "Leidenschaft 🌹", wait: 3000 },
    { text: "Freundlich 🤗", wait: 3000 },
    { text: "Veränderung 🌅", wait: 3000 },
    { text: "Inspiration 💡", wait: 3000 },
    { text: "Wunder ✨", wait: 3000 },
    { text: "Wagemut 🌠", wait: 3000 },
    { text: "Erfolg 🌟", wait: 3000 },
    { text: "Genuss 🍃", wait: 3000 },
    { text: "Ruhe 🌿", wait: 3000 },
    { text: "Ehrfurcht 🙌", wait: 3000 },
    { text: "Anfang 🌄", wait: 3000 },
    { text: "Entwicklung 🌱", wait: 3000 },
    { text: "Veränderung 🌀", wait: 3000 },
    { text: "Befreiung 🕊️", wait: 3000 },
    { text: "Aufbruch 🚀", wait: 3000 },
    { text: "Lebensfreude 😄", wait: 3000 },
    { text: "Vorwärts 🏞️", wait: 3000 },
    { text: "Glanz ✨", wait: 3000 },
    { text: "Entfaltung 🌼", wait: 3000 },
    { text: "Erwachen 🌅", wait: 3000 },
    { text: "Klang 🎶", wait: 3000 },
    { text: "Momentum 🚀", wait: 3000 },
    { text: "Sehnsucht 💫", wait: 3000 },
    { text: "Rausch 🌀", wait: 3000 },
    { text: "Stille 🌙", wait: 3000 },
    { text: "Ewigkeit ⏳", wait: 3000 },
    { text: "Gipfel 🏔️", wait: 3000 },
    { text: "Echo 🗣️", wait: 3000 },
    { text: "Flüstern 🌬️", wait: 3000 },
    { text: "Verwebung 🕸️", wait: 3000 },
    { text: "Sternenstaub ✨", wait: 3000 },
    { text: "Mystik 🔮", wait: 3000 },
    { text: "Atem 🌬️", wait: 3000 },
    { text: "Schimmer 🌟", wait: 3000 },
    { text: "Einsamkeit 🌌", wait: 3000 },
    { text: "Sehnsucht 🌌", wait: 3000 },
    { text: "Kreatur 🦄", wait: 3000 },
    { text: "Verwandlung 🦋", wait: 3000 },
    { text: "Sog 🌌", wait: 3000 },
    { text: "Ursprung 🌱", wait: 3000 },
    { text: "Verzauberung 🌈", wait: 3000 },
    { text: "Geheimnis 🗝️", wait: 3000 },
    { text: "Erhabenheit 🌄", wait: 3000 },
    { text: "Versprechen 🤝", wait: 3000 },
    { text: "Fernes 🌠", wait: 3000 },
    { text: "Sammlung 📚", wait: 3000 },
    { text: "Erlösung 🕊️", wait: 3000 },
    { text: "Resonanz 🌍", wait: 3000 },
    { text: "Sanftheit 🍃", wait: 3000 },
    { text: "Vertrautheit 🤗", wait: 3000 },
];

// profiles
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

// slot-generator
interface SymbolProps {
    symbol: string;
    value: number;
}

// alerts
type AlertProps = {
    preview?: boolean;
};

// cards
interface CardProps {
    number: number;
    onClick: () => void;
    isFlipped: boolean;
}

// container (landing page)
type ContainerProps = {
    children?: React.ReactNode;
};

// cover-image (landing page)
type ImageProps = {
    title: string;
    src: string;
    slug?: string;
};

// date-formatter (landing page)
type DateProps = {
    dateString: string;
};

// hero-post (landing page)
type HeroProps = {
    title: string;
    coverImage?: string;
    date?: string;
    src?: string;
    excerpt?: string;
    author?: Author;
    slug?: string;
};

// intro text (landing page)
type IntroProps = {};

type DataType = {
    text: string;
    wait: number;
};

// post title (landing page)
type PostProps = {
    children?: ReactNode;
};

export {
    // discord
    SnowflakeOrString,
    RunOptions,
    RunFunction,
    ExtendedInteraction,
    ExtendedButtonInteraction,
    CommandOptions,
    CommandType,
    Verification,
    VerificationData,
    Datenschutz,
    ServerStats,
    KigaPosts,
    KigaPostData,
    AutoResponse,
    VerificationFormFields,
    VerificationRequest,
    MyCollection,
    ExtendedClient,

    // web
    Author,
    PostType,
    WebPostProps,
    EventDataProps,
    PageData,
    Profile,
    AvatarProps,
    Diamond,
    ProfileType,
    ProfilePageProps,
    SymbolProps,
    AlertProps,
    CardProps,
    ContainerProps,
    ImageProps,
    DateProps,
    HeroProps,
    IntroProps,
    PostProps,
    DataType,
};
