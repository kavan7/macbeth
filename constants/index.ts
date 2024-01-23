import { ListingProps } from "@/types";
export const manufacturers = [
  "Macduff",
  "Siward",
  "Donalbain",
  "Malcom",
  "Ten Thousand Soldiers",
    ];

  
  export const listings: ListingProps[] = [
    {
      name: "Iverness",
      price: "47,043",
      detail: "The location of Macbeth's castle before he became king. Also the place where Macbeth and Lady Macbeth kill Duncan,",
      image: "./r1.png",
      index: 1
    },
    {
      name: "Fife",
      price: "66,353",
      detail: "Home to me and my family.",
      image: "./r2.png",
      index: 2
    },

    {
      name: "Forres",
      price: "32,043",
      detail: "Forres is a castle where Duncan lives. When Macbeth becomes king, he will live at Forres, and Banquo will be murdered only a mile from the castle",
      image: "./r1.png",
      index: 3
    },
    {
      name: "Glamis Castle",
      price: "35,853",
      detail: "Glamis Castle is situated beside the village of Glamis in Angus, Scotland. It is the home of the Earl of Strathmore and Kinghorne, and is open to the public. ",
      image: "./r3.png",
      index: 4
    },
   
  ]

  
  export const yearsOfProduction = [
    { title: "Year", value: "" },
    { title: "2015", value: "2015" },
    { title: "2016", value: "2016" },
    { title: "2017", value: "2017" },
    { title: "2018", value: "2018" },
    { title: "2019", value: "2019" },
    { title: "2020", value: "2020" },
    { title: "2021", value: "2021" },
    { title: "2022", value: "2022" },
    { title: "2023", value: "2023" },
  ];
  
  export const fuels = [
    {
      title: "Fuel",
      value: "",
    },
    {
      title: "Gas",
      value: "Gas",
    },
    {
      title: "Electricity",
      value: "Electricity",
    },
  ];
  
  export const footerLinks = [
    {
      title: "About",
      links: [
        { title: "How it works", url: "/" },
        { title: "Featured", url: "/" },
        { title: "Partnership", url: "/" },
        { title: "Bussiness Relation", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Events", url: "/" },
        { title: "Blog", url: "/" },
        { title: "Podcast", url: "/" },
        { title: "Invite a friend", url: "/" },
      ],
    },
    {
      title: "Socials",
      links: [
        { title: "Discord", url: "/" },
        { title: "Instagram", url: "/" },
        { title: "Twitter", url: "/" },
        { title: "Facebook", url: "/" },
      ],
    },
  ];