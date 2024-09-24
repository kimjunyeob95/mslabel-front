export interface HeaderContents {
  title: string;
  route: string;
  items: { content: string; link: string }[];
}

export const HEADER_CONTENT = [
  {
    title: "회사소개2222",
    route: "/company-introduce",
    items: [
      {
        content: "CEO 인사말",
        link: "/company-introduce",
      },
      {
        content: "연혁",
        link: "/company-introduce/1",
      },
      {
        content: "비전",
        link: "",
      },
      {
        content: "거래처",
        link: "",
      },
      {
        content: "오시는 길",
        link: "",
      },
    ],
  },
  {
    title: "사업소개",
    route: "/business-introduce",
    items: [
      {
        content: "브랜드 라벨",
        link: "/business-introduce",
      },
      {
        content: "무지 라벨",
        link: "/business-introduce",
      },
      {
        content: "디지털 라벨",
        link: "/business-introduce",
      },
    ],
  },
  {
    title: "일반라벨",
    route: "/basic-label",
    items: [
      {
        content: "업종별 라벨",
        link: "/basic-label/1",
      },
      {
        content: "특수 라벨",
        link: "/basic-label/2",
      },
      {
        content: "전문 라벨",
        link: "/basic-label/3",
      },
      {
        content: "원단별 라벨",
        link: "/basic-label/4",
      },
    ],
  },
  {
    title: "디지털라벨",
    route: "/digital-label",
    items: [
      {
        content: "용도별 라벨",
        link: "/digital-label/1",
      },
      {
        content: "형태별 라벨",
        link: "/digital-label/2",
      },
      {
        content: "원단별 라벨",
        link: "/digital-label/3",
      },
    ],
  },
  {
    title: "견적문의",
    route: "/estimate-inquiry",
    items: [
      {
        content: "공지사항",
        link: "",
      },
      {
        content: "견적문의",
        link: "",
      },
    ],
  },
];
