import { Member } from "@src/types";

export const members: Member[] = [
  // BASSDRUM 公式は一番上にしておく
  {
    id: "bassdrum",
    name: "BASSDRUM inc.",
    role: "Company",
    bio: "",
    avatarSrc: "/avatars/bassdrum.jpg",
    sources: [
        "https://note.com/bassdrum/rss"
    ],
    twitterUsername: "BASSDRUM_org",
    githubUsername: "bassdrum-org",
    websiteUrl: "https://bassdrum.org/",
  },
  {
    id: "toyoshimorioka",
    name: "Toyoshi Morioka",
    role: "Tech Director",
    bio: "",
    avatarSrc: "/avatars/toyoshimorioka.jpg",
    sources: [
        "https://note.com/toyoshimorioka/rss",
        "https://zenn.dev/toyoshimorioka/feed?include_scraps=true",
        "https://qiita-feed.saqoosha.workers.dev/toyoshimorioka"
    ],
    twitterUsername: "mogamogamachine",
    githubUsername: "ToyoshiMorioka",
  },
  {
    id: "wtshm",
    name: "Kenta Watashima",
    role: "Programmer / Tech Director",
    bio: "",
    avatarSrc: "/avatars/wtshm.jpg",
    sources: [
      "https://zenn.dev/wtshm/feed?include_scraps=true",
      "https://qiita.com/wtshm/feed.atom"
    ],
    twitterUsername: "wtshm",
    githubUsername: "wtshm",
    websiteUrl: "https://achr.me",
  },
  {
    id: "junito",
    name: "Jun Ito",
    role: "Tech Director",
    bio: "",
    avatarSrc: "/avatars/junito.jpg",
    sources: [
        "https://note.com/jun_ito_bd/rss",
    ],
  },
  {
    id: "hige",
    name: "Takanobu Izukawa",
    role: "System Engineer",
    bio: "",
    avatarSrc: "/avatars/hige.png",
    sources: [
      "https://zenn.dev/hige/feed?include_scraps=true"
    ],
    twitterUsername: "soundkitchen",
    githubUsername: "soundkitchen",
    websiteUrl: "https://izukawa.org",
  },
    {
    id: "qanta",
    name: "Qanta Shimizu",
    role: "Tech Director",
    bio: "",
    avatarSrc: "/avatars/qanta_s.jpg",
    sources: [
        "https://note.com/qantasmz/m/mb2a3dcf555d5/rss",
        "https://qiita-feed.saqoosha.workers.dev/qantasmz"
    ],
    twitterUsername: "qanta",
    githubUsername: "qantasmz",
    websiteUrl: "http://qanta.jp",
  },
];
