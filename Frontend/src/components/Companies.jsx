import React from "react";

const Companies = () => {
  const companies = [
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Accenture_logo.svg/1280px-Accenture_logo.svg.png", color: "#2C2C2C" },
    { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/TCS_logo.svg/1200px-TCS_logo.svg.png", color: "#F0A000" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Infosys_logo.svg/1200px-Infosys_logo.svg.png", color: "#009C8C" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wipro_logo.svg/1200px-Wipro_logo.svg.png", color: "#5F5A5A" },
    { name: "Zoho", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zoho_Logo_2019.svg/1200px-Zoho_Logo_2019.svg.png", color: "#0076D6" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", color: "#FF9900" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Google_logo.svg", color: "#4285F4" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo_2022.svg", color: "#00A4EF" },
    { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flipkart_logo_2018.svg", color: "#0055F5" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Salesforce_logo.svg/1200px-Salesforce_logo.svg.png", color: "#00A1E0" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/IBM_logo.svg", color: "#006699" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/SAP_2011_logo.svg", color: "#00A0B1" },
    { name: "HCL", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/HCL_technologies_logo.svg", color: "#0064A3" },
    { name: "Tech Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Tech_Mahindra_logo.svg", color: "#A9A9A9" },
    { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Cognizant_logo.svg", color: "#1D6F82" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-5">
      <h2 className="text-center text-4xl font-bold mb-8 text-gray-900">
        Our Placement Partners
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex flex-col items-center p-6 rounded-lg bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            style={{ border: `3px solid ${company.color}` }}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-20 w-20 object-contain mb-4 transition-all duration-200 transform hover:scale-110"
            />
            <p
              className="text-lg font-medium text-center"
              style={{ color: company.color }}
            >
              {company.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
