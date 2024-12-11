import { createServer } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import fs from "node:fs";

async function genStatic(url) {
    const vite = await createServer({
        // tell vite to properly parse React code
        plugins: [react()],
        // prevent vite from starting as a webserver, among other things
        appType: "custom",
    })

    // import our server entry's render method
    // this also adds the polyfills (and other dependencies/optimizations)
    const { render } = await vite.ssrLoadModule("/src/main.ssg.tsx")

    // load our default index.html file from the build directory
    const toBuildPath = pathPart => path.join(process.cwd(), "dist", pathPart)
    const indexHtmlContent = fs.readFileSync(toBuildPath("index.html")).toString()

    // now we create our DOM markup
    const html = await render(url);

    // make sure to add your rendered content as a child of the client entry's render target
    // in the default case that's the div with id="root"
    const urlHtmlContent = indexHtmlContent.replace(
        '<div id="root"></div>', 
        `<div id="root">${html}</div>`
    )

    const filePath = toBuildPath(path.join(url, "index.html"));
    fs.mkdirSync(path.join(filePath, '..'), { recursive: true });
    // finally, write the file to your build directory
    // omitting the suffix can be done, depending on your webserver's configuration
    fs.writeFileSync(filePath, urlHtmlContent)

    // shutdown vite
    await vite.close()
}

const urls = ["/", "/recipes", "/recipes/create", "/ingredients", "/ingredients/create"]

urls.map(genStatic)