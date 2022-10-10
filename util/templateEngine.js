import fs from "fs";

const navbar = fs.readFileSync("./public/layout/navbar/navbar.html").toString();
const footer = fs.readFileSync("./public/layout/footer/footer.html").toString();

export function renderPage(path, options = {}) {
    const page = fs.readFileSync("./public/pages"+path).toString();

    //TODO: return as a html so styling can be included. 
    //node does appearantly not natively have a DOMparser so will have to research solutions
    return navbar
        .replace("%%TAB_TITLE%%", options.tabTitle || "Mandatory I")
        .replace("%%PAGE_CSS_LINK%%", options.cssLink || "")
        + page
        .replace("%%PAGE_HEADER%%",options.contentTitle || "Content")
        + footer
}