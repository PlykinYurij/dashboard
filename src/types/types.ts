export interface IUser {
    username: string
}

export interface IUserData {
    me: IUser
}

export interface IDashboard {
    active: number,
    inactive: number,
    completed: number,
}

export interface IDashboardData {
    dialogs: IDashboard,
    lists: IDashboard,
    scenarios: IDashboard,
}