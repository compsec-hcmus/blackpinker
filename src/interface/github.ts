export type dirType = {
    name: string,
    url: string
    type: "dir",
    download_url: null,
}

export type fileType = {
    name: string,
    url: string
    type: "file",
    download_url: string,
}

export type contentType = dirType | fileType;