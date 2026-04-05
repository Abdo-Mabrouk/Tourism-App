import img1 from "@/assets/imge (1).svg";
import img2 from "@/assets/imge (2).svg";
import img3 from "@/assets/imge (3).svg";
import img4 from "@/assets/imge (4).svg";
import BlogsImg1 from "@/assets/Blogs-1.svg";
import BlogsImg2 from "@/assets/Blogs-2.svg";
import BlogsImg3 from "@/assets/Blogs-3.svg";
import BlogsImg4 from "@/assets/Blogs-4.svg";
import BlogsImg5 from "@/assets/Blogs-5.svg";
import BlogsImg6 from "@/assets/Blogs-6.svg";
import BlogsImg7 from "@/assets/Blogs7.svg";
import BlogsImg8 from "@/assets/Blogs-8.svg";
import BlogsImg9 from "@/assets/Blogs-9.svg";
import BlogsImg10 from "@/assets/Blogs-10.svg";
import BlogsImg11 from "@/assets/Blogs-11.svg";
import BlogsImg12 from "@/assets/Blogs-12.svg";
import BlogsImg13 from "@/assets/Blogs-13.svg";
import teamImg1 from "@/assets/Team 1.svg";
import teamImg2 from "@/assets/Team 2.svg";
import teamImg3 from "@/assets/Team 3.svg";
import teamImg4 from "@/assets/Team 4.svg";
import teamImg5 from "@/assets/Team 5.svg";
import teamImg6 from "@/assets/Team 6.svg";
import teamImg7 from "@/assets/Team 7.svg";
import teamImg8 from "@/assets/Team 8.svg";
import teamImg9 from "@/assets/Team 9.svg";
import teamImg10 from "@/assets/Team 10.svg";
import teamImg11 from "@/assets/Team 1.svg";
const data = [
  {
    id: 1,
    imge: [img1, img2, img3, img4],
    desc: "Adventure Snorkeling Tour To Ras Mohamed By Bus",
    city: "fayoum",
    excursions: "Shore Excursions",
    price: "3200",
    offers: "20",
  },
  {
    id: 2,
    imge: [img2, img3, img4, img1],
    desc: "Adventure Snorkeling Tour To Ras Mohamed By Bus",
    city: "3 Places",
    excursions: "Multi Days",
    price: "3200",
    priceAfterDiscount: "1500",
    offers: "5",
    CountDownDays: 20,
    CountDownHours: 5,
    CountDownMinutes: 20,
  },
  {
    id: 3,
    imge: [img3, img4, img1, img2],
    desc: "Adventure Snorkeling Tour To Ras Mohamed By Bus",
    city: "5 Cities",
    excursions: "One Day",
    price: "750",
    offers: "3",
  },
  {
    id: 4,
    imge: [img4, img1, img2, img3],
    desc: "Adventure Snorkeling Tour To Ras Mohamed By Bus",
    city: "3 Places",
    excursions: "Nile Cruises",
    price: "500",
    offers: "3",
  },
  {
    id: 5,
    imge: [img1, img2, img3, img4],
    desc: "Adventure Snorkeling Tour To Ras Mohamed By Bus",
    city: "3 Places",
    excursions: "Nile Cruises",
    price: "500",
    offers: "15",
  },
  {
    id: 6,
    imge: [img2, img3, img4, img1],
    desc: "Adventure Snorkeling Tour To Ras Mohamed By Bus",
    city: "5 Cities",
    excursions: "One Day",
    price: "750",
    offers: "20",
  },
  {
    id: 7,
    imge: [img3, img4, img1, img2],
    desc: "Adventure Snorkeling Tour To Ras Mohamed By Bus",
    city: "fayoum",
    excursions: "Shore Excursions",
    price: "750",
    offers: "20",
  },
  {
    id: 8,
    imge: [img4, img1, img2, img3],
    desc: "Adventure Snorkeling Tour To Ras Mohamed By Bus",
    city: "3 Places",
    excursions: "Multi Days",
    price: "2000",
    priceAfterDiscount: "1500",
    offers: "20",
    CountDownDays: 18,
    CountDownHours: 23,
    CountDownMinutes: 40,
  },
  {
    id: 9,
    imge: [img4, img1, img2, img3],
    desc: "Adventure Snorkeling Tour To Ras Mohamed By Bus",
    city: "5 Cities",
    excursions: "One Day",
    price: "2000",
    priceAfterDiscount: "750",
    offers: "3",
    CountDownDays: 16,
    CountDownHours: 30,
    CountDownMinutes: 30,
  },
  {
    id: 10,
    imge: [img4, img1, img2, img3],
    desc: "Adventure Snorkeling Tour To Ras Mohamed By Bus",
    city: "3 Places",
    excursions: "Nile Cruises",
    price: "2000",
    priceAfterDiscount: "500",
    offers: "15",
    CountDownDays: 10,
    CountDownHours: 13,
    CountDownMinutes: 55,
  },
];

const dataBlogs = [
  { id: 1, Blogs: "15 blog", caty: "Ancient Egyptian Tombs", img: BlogsImg1 },
  { id: 2, Blogs: "6 blog", caty: "Museums", img: BlogsImg2 },
  { id: 3, Blogs: "15 blog", caty: "Oasis", img: BlogsImg3 },
  { id: 4, Blogs: "15 blog", caty: "Palaces", img: BlogsImg4 },
  {
    id: 5,
    Blogs: "15 blog",
    caty: "Alexandria Tourist Attractions",
    img: BlogsImg5,
  },
  {
    id: 6,
    Blogs: "15 blog",
    caty: "Sinai Tourist Attractions",
    img: BlogsImg6,
  },
  {
    id: 7,
    Blogs: "15 blog",
    caty: "Cairo Tourist Attractions",
    img: BlogsImg7,
  },
  { id: 8, Blogs: "15 blog", caty: "Islamic Cairo", img: BlogsImg8 },
  { id: 9, Blogs: "6 blog", caty: "Pyramids", img: BlogsImg9 },
  {
    id: 10,
    Blogs: "15 blog",
    caty: "Luxor Tourist Attractions",
    img: BlogsImg10,
  },
  { id: 11, Blogs: "15 blog", caty: "Coptic Cairo", img: BlogsImg11 },
  {
    id: 12,
    Blogs: "15 blog",
    caty: "Aswan Tourist Attractions",
    img: BlogsImg12,
  },
  { id: 13, Blogs: "15 blog", caty: "Temples", img: BlogsImg13 },
  {
    id: 13,
    Blogs: "15 blog",
    caty: "Ancient Egyptian Battles",
    img: BlogsImg1,
  },
  {
    id: 13,
    Blogs: "15 blog",
    caty: "Ancient Egyptian Mythology",
    img: BlogsImg2,
  },
  {
    id: 13,
    Blogs: "15 blog",
    caty: "Sinai Tourist Attractions",
    img: BlogsImg3,
  },
  { id: 13, Blogs: "15 blog", caty: "Egypt Destinations", img: BlogsImg4 },
  { id: 13, Blogs: "15 blog", caty: "Egyptian Pharaohs", img: BlogsImg5 },
];
const dataTeam = [
  { name: "Adly Ebrahim", img: teamImg1, position: "Responsible Manager" },
  { name: "Mahmoud Badia", img: teamImg2, position: "Executive Manager" },
  { name: "Ahmed Abdelwahab", img: teamImg3, position: "Finance Manager" },
  { name: "Yasmin Ahmed", img: teamImg4, position: "Operation Manager" },
  { name: "Hussien Karem", img: teamImg5, position: "HR Manager" },
  { name: "Ahmed Arafat", img: teamImg6, position: "IT Manager" },
  { name: "Ahmed Talaa", img: teamImg7, position: "Customer Success Manager" },
  { name: "Mennatullah Esmail", img: teamImg8, position: "Reservation Manager" },
  { name: "Sales Manager", img: teamImg9, position: "Sales Manager" },
  { name: "Hagar Hassan", img: teamImg10, position: "Vice Tour Operators' Manager" },
  { name: "Alaa Ali", img: teamImg11, position: "Transportation Manager" },
];

export { data, dataBlogs, dataTeam };
