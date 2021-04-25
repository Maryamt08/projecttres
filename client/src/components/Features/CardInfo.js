/*import slide0 from "../../slide_0.jpg";
import slide1 from "../../slide_1.jpg";
import slide2 from "../../slide_2.jpg";*/


const CardInfo = [
    // {
    //   id: 1,
    //   name: "Sara",
    //   image: slide0,
    //   link: "",
      
    // },
    // {
    //   id: 2,
    //   name: "Salina",
    //   image: slide1,
    //   link: "",
    // },
    // {
    //   id: 3,
    //   name: "Katherine",
    //   image: slide2,
    //   link: "",
     
    // },

    // {
    //   id: 4,
    //   name: "Salina",
    //   image: slide0,
    //   link: "",
      
    // },

    // {
    //   id: 5,
    //   name: "Andra",
    //   image: slide1,
    //   link: "",
      
    // },

    // {
    //   id: 6,
    //   name: "Sandy",
    //   image: slide2,
    //   link: "",
      
    // },

    {
      id: 1,
      name: "Lisa Olsen",
      image: "https://images.unsplash.com/photo-1591159524212-81537d3f426b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      phone_number: "703-663-8884",
      salon_name: "Tysons Nail Lounge",
      salon_website: "https://tysonsnaillounge.com/"
    },
    {
      id: 2,
      name: "Regina Carter",
      image: "https://images.unsplash.com/photo-1613457492120-4fcfbb7c3a5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      phone_number: "703-893-7991",
      salon_name: "Artistic Nails and Spa",
      salon_website: "http://www.artisticnailsandspava.com/index.html"
    },
    {
      id: 3,
      name: "Miranda Preston",
      image: "https://images.unsplash.com/photo-1588015810531-dd522c9c8bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=646&q=80",
      phone_number: "757-324-0291",
      salon_name: "Paix et Amour Nails",
      salon_website: "https://sabrinapaixetamour.glossgenius.com/"
    },
    {
      id: 4,
      name: "Kelly Jackson",
      image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      phone_number: "703-886-9899",
      salon_name: "Luxury Nails",
      salon_website: "https://luxurynailsvienna.com/"
    },
    {
      id: 5,
      name: "Tess Carter",
      image: "https://images.unsplash.com/photo-1588159229515-71d0ed7f8ed4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
      phone_number: "571-378-1400",
      salon_name: "Beauty Nail Bar",
      salon_website: "https://beautynailbar.art/"
    },
    {
      id: 6,
      name: "Holly Jones",
      image: "https://images.unsplash.com/photo-1599206676335-193c82b13c9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=651&q=80",
      phone_number: "703-938-0218",
      salon_name: "Fresh Nails & Day Spa",
      salon_website: "https://freshnailsdayspa.com/"
    },
    {
      id: 7,
      name: "Audrey Ward",
      image: "https://images.unsplash.com/photo-1592574083647-6d7c37d81535?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      phone_number: "571-405-6040",
      salon_name: "Kosmo Nail Bar",
      salon_website: "https://kosmonailbarmclean.com/"
    },
    {
      id: 8,
      name: "Fiona Gale",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80",
      phone_number: "703-853-1906",
      salon_name: "Rainlily",
      salon_website: "https://www.rainlilybeauty.com/"
    },
    {
      id: 9,
      name: "Monica Luis",
      image: "https://images.unsplash.com/photo-1575618890017-4313323c2435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      phone_number: "703-650-0457",
      salon_name: "Noble's Nail Spa",
      salon_website: "https://www.noblesnail.com/"
    },
    {
      id: 10,
      name: "Maria Keating",
      image: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      phone_number: "703-532-3860",
      salon_name: "Holly Nail Spa",
      salon_website: "https://hollynailnspa.com/"
    },
    {
      id: 11,
      name: "Amy Green",
      image: "https://images.unsplash.com/photo-1585731601359-b5edfffbf629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      phone_number: "703-532-0974",
      salon_name: "Orchid Nail",
      salon_website: "https://orchidnailarlington.com/"
    },
    {
      id: 12,
      name: "Jessica Lee",
      image: "https://images.unsplash.com/photo-1592839898726-4a99f4d7e764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
      phone_number: "703-224-103",
      salon_name: "Cavalry Nail Spa",
      salon_website: "https://cavalrynailbar.com/"
    },
    {
      id: 13,
      name: "Tory Gibson",
      image: "https://images.unsplash.com/photo-1559006045-d34d415b2cff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      phone_number: "703-938-0121",
      salon_name: "White Lotus Nails",
      salon_website: "https://whitelotusnailsva.com/"
    },
    {
      id: 14,
      name: "Selina Connor",
      image: "https://images.unsplash.com/photo-1561871887-51bfe90ad482?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      phone_number: "703-261-6894",
      salon_name: "Soleil Nail Spa",
      salon_website: "https://soleilnailspavienna.com/"
    },
    {
      id: 15,
      name: "Kelsey Rhodes",
      image: "https://images.unsplash.com/photo-1584566006505-8923576e70d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
      phone_number: "703-255-3331",
      salon_name: "Lovely Nails",
      salon_website: "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.brocktonlovelynails.com%2F%3Ffbclid%3DIwAR0gYVTez_diB3uRwOnaJb6Yteh4XfdlXUJ51sAZZLYdRbRzQRrq-JADDzk&h=AT0XuuDN279XsfDP7f9UyB-n_3ZD57iG1V3chcfDQU5CeicTYB4HloE06_OeVEMyXjsi9Iy7W27ncXfRPuBEZZqbPOJZ24_I1tIJl3P64N5d9_VGGM73qp4RqQvdbGdxQw99_RAM"
    },
    {
      id: 16,
      name: "Mary Ashwood",
      image: "https://images.unsplash.com/photo-1502949298791-393048291bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
      phone_number: "703-536-4247",
      salon_name: "Aislinn Spa",
      salon_website: "https://aislinnnailsandspa.com/"
    },
    {
      id: 17,
      name: "Kim Larson",
      image: "https://images.unsplash.com/photo-1608977003690-1c3be67e19a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      phone_number: "703-288-9043",
      salon_name: "Natural Nails",
      salon_website: "https://naturalnailstysons.com/"
    },
    {
      id: 18,
      name: "Elsa Rey",
      image: "https://images.unsplash.com/photo-1590736652254-591259e725e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80",
      phone_number: "704-242-3973",
      salon_name: "Allure Nails",
      salon_website: "http://www.allurenailschurchstreet.com/"
    },
    {
      id: 19,
      name: "Melissa Edwards",
      image: "https://images.unsplash.com/photo-1590736701530-f9e57920dd6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      phone_number: "703-448-8890",
      salon_name: "Angel Nails",
      salon_website: "http://ww25.angelnailssalon.com/?subid1=20210422-1216-008c-b7ed-cfe397ca4934"
    },
    {
      id: 20,
      name: "Rachel Lewis" ,
      image: "https://images.unsplash.com/photo-1618606679090-cce74cd451cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
      phone_number: "703-865-8525",
      salon_name: "Organic Nails",
      salon_website: "https://www.organicnailsandspa.com/"
    },
    {
      id: 21,
      name: "Carrie Grey",
      image: "https://images.unsplash.com/photo-1591159524212-81537d3f426b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      phone_number: "703-560-8668",
      salon_name: "Luxury Nails Spa",
      salon_website: "https://luxurynailspadl.com/"
    }
  ]

  export default CardInfo;