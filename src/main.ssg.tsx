import ReactStatic from 'react-dom/static';
import { StaticRouter } from "react-router-dom/server"
import App from "./App"

export const render = async (path: string) => {
  const { prelude } = await ReactStatic.prerenderToNodeStream(
    (
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    ),
    {
      bootstrapScripts: []
    }
  );
  
  return new Promise((resolve, reject) => {
    let data = '';
    prelude.on('data', chunk => {
      data += chunk;
    });
    prelude.on('end', () => resolve(data));
    prelude.on('error', reject);
  });
}