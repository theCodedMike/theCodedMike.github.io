import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "Rust",
    icon: "pen-to-square",
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
  }
]);
