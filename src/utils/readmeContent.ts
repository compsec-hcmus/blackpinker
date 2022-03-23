import axios from "axios";
import { fileType, contentType } from "../interface/github";

export default async function readmeContent(dir_url: string) {
    const contentList: contentType[] = (await axios.get(dir_url)).data;
    const readmeList = contentList.filter(item => item.type === "file" && item.name.toLowerCase() === "readme.md") as fileType[];

    if (readmeList.length === 0) {
        return "";
    }

    const readmeContent = (await axios.get(readmeList[0].download_url)).data;

    return readmeContent;
}