import fs from "fs";

const navbar = fs.readFileSync("./public/layout/navbar/navbar.html").toString();
const footer = fs.readFileSync("./public/layout/footer/footer.html").toString();

export function renderPage(path, options = {}) {
    const page = fs.readFileSync("./public/pages"+path).toString();

    return navbar
        .replace("%%TAB_TITLE%%", options.tabTitle || "Mandatory I")
        .replace("%%PAGE_CSS_LINK%%",
            options.cssLink || ""
        ) 
        + page
        + footer;
}