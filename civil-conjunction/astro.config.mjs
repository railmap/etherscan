import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Etherscan Docs",
      social: {
        github: "https://github.com/railmap/etherscan",
      },
      sidebar: [
        {
          label: "Modules",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Account",
              items: [
                { label: "Introduction", link: "guides/account/account/" },
                { label: "Balance", link: "guides/account/balance/balance/" },
                {
                  label: "Balance Multi",
                  link: "guides/account/balancemulti/balancemulti/",
                },
              ],
            },
            { label: "Contracts", link: "/guides/contracts/contracts/" },
          ],
        },
        {
          label: "General Types",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
