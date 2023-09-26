import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "Rust",
    icon: "note",
    prefix: "/zh/rust/",
    children: [
      {
        text: "基础",
        children: [
          "the_book/"
        ],
      },
      {
        text: "进阶",
        children: [
        
        ],
      },
      { 
        text: "标准库文档", 
        children:[
          
        ]
      },
      { 
        text: "其他", 
        children:[]
      }
    ],
  },
  {
    text: "算法与数据结构",
    icon: "discover",
    prefix: "/zh/algorithm/",
    children: [
      {
        text: "理论",
        children: [
          "1800/",
          "introduction/"
        ]
      },
      {
        text: "练习",
        children: [
          "leetcode/"
        ]
      }
    ]
  }
]);
