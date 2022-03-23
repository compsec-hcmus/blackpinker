import parser from "html-react-parser";
const markdownIt = require('markdown-it');

const md = new markdownIt({html: true, linkify: true});

export default function mdToJsx(mdText: string) {
    return parser(md.render(mdText));
};