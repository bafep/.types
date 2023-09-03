import {
    Snowflake,
    ApplicationCommandDataResolvable,
    PermissionResolvable,
    Collection,
} from "discord.js";

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

export {
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
};
