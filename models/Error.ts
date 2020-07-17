interface Error {
    message: string;
    details?: { [key: string]: string };
}

export default Error;