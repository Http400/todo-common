interface Task {
    _id?: string;
    title: string;
    description: string;
    status?: Status;
    priority?: Priority;
    createdAt?: Date;
    updatedAt?: Date;
}

export enum Status {
    Waiting,
    InProgress,
    Paused,
    Completed,
    Cancelled
};

export enum Priority {
    Low,
    Medium,
    High,
    VeryHigh
};

export default Task;