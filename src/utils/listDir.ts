import axios from "axios";
import { contentType, dirType } from "../interface/github";


export default async function getDirList() {
    const contentList: contentType[] = (await axios.get(process.env.REACT_APP_SRC_API as string)).data;

    const dirList = contentList.filter(item => item.type === "dir") as dirType[];

    return dirList;
}