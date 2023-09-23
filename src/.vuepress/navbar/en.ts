import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Rust",
    icon: "pen-to-square",
    prefix: "/rust/",
    children: [
      {
        text: "Basic",
        children: [
          "the_book/"
        ],
      },
      {
        text: "Advanced",
        children: [
          
        ],
      },
      { 
        text: "Stdlib", 
        children:[

        ]
      },
      { 
        text: "Other", 
        children:[

        ]
      }
    ],
  }
]);
