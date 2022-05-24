export interface MessageInterface {
    message: string,
    code: number,
}


export interface checkModel {
    mail?: string,
    login?: string,
    phone?: string
}

export interface RegModel {
    login: string,
    password: string,
    firstName: string,
    lastName: string,
    middleName: string,
    email: string,
    inviteCode?: string,
    redirectUrl: string,
    numberPhone: string,
    captcha: string
}

export interface CheckRegModel {
    mail: string,
    login: string,
    phone: string
}

export interface LoginModel {
    login?: string,
    email?: string,
    password: string,
    isNotMyDevice?: boolean,
    captcha: string
}

export interface UserEntity {
    id: number,
    firstName: string,
    lastName: string,
    middleName: string,
    phone: string,
    login: string,
    password: string,
    mail: string,
    status: StatusEntity,
    cash: CashEntity,
    career: Array<CareerEntity>,
    role: string,
    inviteToken: UserInviteEntity,
    command: Array<UserEntity>
}

export interface StatusEntity {
    statusId: number,
    statusName: string,
    statusActive: boolean
}

export interface UserInviteEntity {
    userId: number,
    url: string
}

export interface ProjectModel {
    desc: string,
    iconUrl: string,
    shortDesc: string,
    score: number
}

export interface RefProject {
    userId: number,
    localId: number,
    chance: number,
    url: string
}

export interface ProjectEntity {
    id: number,
    name: string,
    author: UserEntity,
    score: number,
    shortDesc: string,
    projectDesc: string,
    projectIcon: string,
    leaderReferal: string,
    currentUserReferrals: Array<RefProject>,
    // invokerUser?: UserEntity,
    isDefault: boolean
}

export interface ReferalModel {
    referralToken: string,
    localId: number,
    dropChance: number
}

export interface ReferalAddLinks {
    links: Array<ReferalModel>
}

export interface UserInfoUpdateModel {
    login: string,
    password?: string,
    firstName: string,
    lastName: string,
    middleName: string,
    email?: string,
    phone: string
}

export interface ResponseMessageModel {
    message: string,
    code: number
}

export interface FeedBackModel {
    name: string
    numberPhone: string
    mail: string
    instagramUrl: string
    vkUrl: string

}


export interface CareerEntity {
    careerLvl: number,
    careerCount: number
}

export interface CashEntity {
    cashValue: number
}

export interface Sort {
    sorted: boolean,
    unsorted: boolean,
    empty: boolean
}

export interface PageUserEntity {
    totalPages: number,
    totalElements: number,
    size: number,
    content: Array<UserEntity>,
    number: number
    sort: Sort,
    pageable: Pageable,
    numberOfElements: number,
    first: boolean,
    last: boolean,
    empty: boolean
}

export interface Pageable {
    offset: number,
    sort: Sort,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    unpaged: boolean
}

export interface Page<G> {
    totalPages:number,
    content:Array<G>,
    totalElements:number,
    size:number,
    first:boolean,
    last:boolean,
    empty:boolean,
    numberOfElements:number,
    pageable:string,
    sort:string,
    number:number
}
