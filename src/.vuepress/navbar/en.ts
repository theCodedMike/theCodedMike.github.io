import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Rust",
    icon: "note",
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
  },
  {
    text: "Algorithm",
    icon: "discover",
    prefix: "/algorithm/",
    children: [
      {
        text: "Theory",
        children: [
          "1800/",
          "introduction/"
        ]
      },
      {
        text: "Exercise",
        children: [
          "leetcode/"
        ]
      }
    ]
  }
]);
