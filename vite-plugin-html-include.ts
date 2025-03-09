// vite-plugin-html-include.js

import fs from "fs";
import path from "path";
import { Plugin } from "vite";

export default function htmlIncludePlugin(): Plugin {
  return {
    name: "html-include-plugin",

    // “transformIndexHtml” is part of Vite’s HTML transforms
    transformIndexHtml: {
      enforce: "pre",

      transform(html, { filename }) {
        let result = html;

        // Look for tags of the form: <include src="partials/header.html" />
        const includePattern = /<include\s+src="([^"]+)"\s*\/?>/g;

        let match;
        while ((match = includePattern.exec(html)) !== null) {
          const srcPath = match[1];
          // Convert to an absolute path relative to the HTML file
          const filePath = path.resolve(path.dirname(filename), srcPath);
          // Read the external file
          const content = fs.readFileSync(filePath, "utf-8");
          // Replace the entire <include ...> tag with file content
          result = result.replace(match[0], content);
        }

        return result;
      },
    },
  };
}
