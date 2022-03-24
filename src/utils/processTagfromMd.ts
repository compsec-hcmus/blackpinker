// re math example
// ![wArmup category](https://img.shields.io/badge/Category-Warmups-brightgreen.svg)  
// ![score](http://img.shields.io/badge/Score_after_CTF-50-blue.svg)  
// ![solves](https://img.shields.io/badge/Solves-1483-lightgrey.svg) 
const re_tag = /!\[[a-zA-Z ]+\]\(https?:\/\/[a-zA-Z./\-_0-9%]+.svg\)/gm

// re math example
// https://img.shields.io/badge/Category-Warmups-brightgreen.svg  
// http://img.shields.io/badge/Score_after_CTF-50-blue.svg  
// https://img.shields.io/badge/Solves-1483-lightgrey.svg
const re_http = /https?:\/\/[a-zA-Z./\-_0-9%]+.svg/m

export function getTagFromMd(md: string) {
    const tag = md.match(re_tag);
    return tag?.map(item => (item.match(re_http) as string[])[0])
}

export function rmTagFromMd(md: string) {
    return md.replace(re_tag, '');
}