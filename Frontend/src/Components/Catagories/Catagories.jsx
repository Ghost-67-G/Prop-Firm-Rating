import React from "react";
import style from "./Catagories.module.css";

const Catagories = () => {
  let cata1 = [
    {
      name: "Animals & Pets",
      icon: "<i class='fa seachicon fa-paw'/>",
      color: "#fffbd6",
      cata: [
        "Animal Health",
        "Animal Parks & Zoo",
        "Cats & Dogs",
        "Horses & Riding",
        "Pet Services",
        "Pet Stores",
      ],
    },
    {
      name: "Beauty & Well-being",
      icon: "<i class='fa seachicon fa-spray-can-sparkles'/>",
      color: "#9ff6d3",
      cata: [
        "Cosmetics & Makeup",
        "Hair Care & Styling",
        "Personal Care",
        "Salons & Clinics",
        "Tattoos & Piercings",
        "Wellness & Spa",
        "Yoga & Meditation",
      ],
    },
    {
      name: "Business_Services",
      icon: '<i class="fa seachicon fa-projector"/>',
      color: "#ffc5d5",
      cata: [
        "Administration & Services",
        "Associations & Centers",
        "HR & Recruiting",
        "Import & Export",
        "IT & Communication",
        "Office Space & Supplies",
        "Print & Graphic Design",
        "Research & Development",
        "Sales & Marketing",
        "Shipping & Logistics",
        "Wholesale",
      ],
    },
    {
      icon: '<i class="fa seachicon fa-helmet-safety"/>',
      color: "#9ff6d3",
      name: "Construction Manufacturing",
      cata: [
        "Architects & Engineers",
        "Building Materials",
        "Chemicals & Plastic",
        "Construction Services",
        "Contractors & Consultants",
        "Factory Equipment",
        "Garden & Landscaping",
        "Industrial Supplies",
        "Manufacturing",
        "Production Services",
        "Tools & Equipment",
      ],
    },
  ];

  let cata2 = [
    {
      name: "Events & Entertainment",
      icon: "<i class='fa seachicon fa-microphone-lines'/>",
      color: "#ffc5d5",
      cata: [
        "Adult Entertainment",
        "Childrens Entertainment",
        "Clubbing & Nightlife",
        "Events & Venues",
        "Gambling",
        "Gaming",
        "Museums & Exhibits",
        "Music & Movies",
        "Theater & Opera",
        "Wedding & Party",
      ],
    },
    {
      name: "Food, Beverages & Tobacco",
      color: "#fffbd6",
      icon: '<i class="fa seachicon fa-burger-soda"/>',
      cata: [
        "Agriculture & Produce",
        "Asian Grocery Stores",
        "Bakery & Pastry",
        "Beer & Wine",
        "Beverages & Liquor",
        "Candy & Chocolate",
        "Coffee & Tea",
        "Food Production",
        "Fruits & Vegetables",
        "Grocery Stores & Markets",
        "Lunch & Catering",
        "Meat, Seafood & Eggs",
        "Smoking & Tobacco",
      ],
    },
    {
      icon: '<i class="fa seachicon fa-briefcase-medical" />',
      name: "Health_Medical",
      color: "#9ff6d3",
      cata: [
        "Clinics",
        "Dental Services",
        "Diagnostics & Testing",
        "Doctors & Surgeons",
        "Health Equipment",
        "Hospital & Emergency",
        "Medical Specialists",
        "Mental Health",
        "Pharmacy & Medicine",
        "Physical Aids",
        "Pregnancy & Children",
        "Therapy & Senior Health",
        "Vision & Hearing",
      ],
    },
    {
      icon: '<i class="fa seachicon fa-kitchen-set"/>',
      color: "#ffc5d5",
      name: "Hobbies Crafts",
      cata: [
        "Art & Handicraft",
        "Astrology & Numerology",
        "Fishing & Hunting",
        "Hobbies",
        "Metal, Stone & Glass Work",
        "Music &Instruments",
        "Needlework & Knitting",
        "Outdoor Activities",
        "Painting & Paper",
      ],
    },
  ];

  let cata3 = [
    {
      name: "Restaurants & Bars",
      icon: "<i class='fa seachicon fa-utensils'/>",
      color: "#ffc5d5",
      cata: [
        "African & Pacific Cuisine",
        "Bars & Cafes",
        "Chinese & Korean Cuisine",
        "European Cuisine",
        "General Restaurants",
        "Japanese Cuisine",
        "Mediterranean Cuisine",
        "Middle Eastern Cuisine",
        "North & South American Cuisine",
        "Southeast Asian Cuisine",
        "Takeaway",
        "Vegetarian & Diet",
      ],
    },
    {
      icon: '<i class="fa seachicon fa-house-chimney"/>',
      name: "Home & Services",
      color: "#ffc999",
      cata: [
        "Cleaning Service Providers",
        "Craftsman",
        "House Services",
        "House Sitting & Security",
        "Moving & Storage",
        "Plumbing & Sanitation",
        "Repair Service Providers",
      ],
    },
    {
      icon: '<i class="fa seachicon fa-landmark"/>',
      color: "#ffc999",
      name: "Legal_Services_Government",
      cata: [
        "Customs & Toll",
        "Government Department",
        "Law Enforcement",
        "Lawyers & Attorneys",
        "Legal Service Providers",
        "Libraries & Archives",
        "Municipal Department",
        "Registration Services",
      ],
    },
  ];

  let cata4 = [
    {
      name: "Home & Garden",
      icon: "<i class='fa seachicon fa-couch'/>",
      color: "#9ff6d3",
      cata: [
        "Bathroom & Kitchen",
        "Cultural Goods",
        "Decoration & Interior",
        "Energy & Heating",
        "Fabric & Stationery",
        "Furniture Stores",
        "Garden & Pond",
        "Home & Garden Services",
        "Home Goods Stores",
        "Home Improvements",
      ],
    },
    {
      icon: '<i class="fa seachicon fa-shirt"/>',
      name: "Shopping_Fashion",
      color: "#ffc5d5",
      cata: [
        "Accessories",
        "Clothing & Underwear",
        "Clothing Rental & Repair",
        "Costume & Wedding",
        "Jewelry & Watches",
        "Malls & Marketplaces",
      ],
    },
    {
      icon: '<i class="fa seachicon fa-ice-skate"/>',
      name: "Sports",
      color: "#ffc999",
      cata: [
        "Ball Games",
        "Bat-and-ball Games",
        "Bowls & Lawn Sports",
        "Dancing & Gymnastics",
        "Equipment & Associations",
        "Extreme Sports",
        "Fitness & Weight Lifting",
        "Golf & Ultimate",
        "Hockey &Ice Skating",
        "Martial arts & Wrestling",
        "Outdoor & Winter Sports",
        "Shooting & Target Sports",
        "Swimming & Water Sports",
        "Tennis & Racquet Sports",
      ],
    },
  ];

  return (
    <div>
      <div className={`text-center py-5 bg-light`}>
        <h2 className={`fw-bold text-dark mt-4`}>What are you looking for?</h2>
        <div className={`mx-auto bg-white rounded-3 mt-3 mb-5 ${style.inputP}`}>
          <i class={`fa ${style.seachicon} me-3 fa-magnifying-glass`}></i>
          <input
            className={`input border-0 py-2 fs-5`}
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
      <div className={`container-fluid px-5 py-5`}>
        <h3 className={`text-dark fw-semibold `}>
          Explore companies by category
        </h3>
        <div className={`d-flex px-5 gap-3`}>
          <div className="d-flex flex-column gap-3">
          {cata1.map((item) => {
            return (
              <div className={`border ${style.divCata} rounded-3 overflow-hidden`}>
                <div
                  className={`text-center rounded-top px-3 pt-4`}
                  style={{ backgroundColor: `${item.color}`,height:'110px', }}
                >
                  <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <h5 className="fw-semibold">{item.name}</h5>
                </div>
                <div className={`px-3 fs-6`}>
                  {item.cata.map((item1) => {
                    return (
                      <div className={`border-bottom pt-2`}>
                        <p>{item1}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          </div>
          <div className="d-flex flex-column gap-3">
          {cata2.map((item) => {
            return (
              <div className={`border ${style.divCata} rounded-3 overflow-hidden`}>
                <div
                  className={`text-center px-3 pt-4`}
                  style={{ backgroundColor: `${item.color}`,height:'110px', }}
                >
                  <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <h5 className="fw-semibold">{item.name}</h5>
                </div>
                <div className={`px-3 fs-6`}>
                  {item.cata.map((item1) => {
                    return (
                      <div className={`border-bottom pt-2`}>
                        <p>{item1}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          </div>
          <div className="d-flex flex-column gap-3">
          {cata3.map((item) => {
            return (
              <div className={`border ${style.divCata} rounded-3 overflow-hidden`}>
                <div
                  className={`text-center px-3 pt-4`}
                  style={{ backgroundColor: `${item.color}`,height:'110px', }}
                >
                  <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <h5 className="fw-semibold">{item.name}</h5>
                </div>
                <div className={`px-3 fs-6`}>
                  {item.cata.map((item1) => {
                    return (
                      <div className={`border-bottom pt-2`}>
                        <p>{item1}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          </div>
          <div className="d-flex flex-column gap-3">
          {cata4.map((item) => {
            return (
              <div className={`border ${style.divCata} rounded-3 overflow-hidden`}>
                <div
                  className={`text-center px-3 pt-4`}
                  style={{ backgroundColor: `${item.color}`,height:'110px',}}
                >
                  <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <h5 className="fw-semibold">{item.name}</h5>
                </div>
                <div className={`px-3 fs-6`}>
                  {item.cata.map((item1) => {
                    return (
                      <div className={`border-bottom pt-2`}>
                        <p>{item1}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;