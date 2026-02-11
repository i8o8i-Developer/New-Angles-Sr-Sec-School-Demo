import React from "react";

const disclosureData = [
  {
    title: "A. GENERAL INFORMATION",
    items: [
      { label: "Name Of The School", value: "NEW ANGELS SENIOR SECONDARY SCHOOL" },
        { label: "Affiliation Number", value: "2130850" },
        { label: "School Code", value: "71126" },
        { label: "Complete Address", value: "NEW ANGELS SENIOR SECONDARY SCHOOL, KATRA ROAD, PRATAPGARH - 230001" },
        { label: "Principal Name & Qualification", value: "Mr. Bipin Kumar Soni, M.A., B.Ed." },
        { label: "School Email ID", value: "angelscollegepbh@gmail.com" },
        { label: "Contact Number", value: "9838907304, 9918926330" },
    ],
  },
  {
    title: "B. DOCUMENTS AND INFORMATION",
    items: [
      { label: "Copies of Affiliation/Upgradation Letter and Recent Extension of Affiliation, if any", value: <a href="/Src/Assets/Documents/AFFILIATION%20LETTER.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-primary/80 transition">Affiliation Letter</a> },
      { label: "Copies of Societies/Trust/Company Registration/Renewal Certificate", value: <a href="/Src/Assets/Documents/TRUST%20CERTIFICATE.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-primary/80 transition">Trust Certificate</a> },
      { label: "Copy of No Objection Certificate (NOC)", value: <a href="/Src/Assets/Documents/NOC.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-primary/80 transition">NOC</a> },
      { label: "Copies of Recognition Certificate under RTE Act, 2009", value: <a href="/Src/Assets/Documents/RECOGNITION%20CERTIFICATE.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-primary/80 transition">Recognition Certificate</a> },
      { label: "Copy of Valid Building Safety Certificate", value: <a href="/Src/Assets/Documents/BUILDING%20CERTIFICATE.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-primary/80 transition">Building Certificate</a> },
      { label: "Copy of Valid Fire Safety Certificate", value: <a href="/Src/Assets/Documents/FIRE%20CERTIFICATE.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-primary/80 transition">Fire Certificate</a> },
      { label: "Copy of the DEO Certificate", value: <a href="/Src/Assets/Documents/DEO%20CERTIFICATE.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-primary/80 transition">DEO Certificate</a> },
    ],
  },
    {
      title: "D. STAFF (TEACHING)",
      items: [
        { label: "Principal", value: "Bipin Kumar Soni" },
        { label: "Total No. of Teachers", value: <span>Total: 52<br/>PGT: 20<br/>TGT: 23<br/>PRT: 8</span> },
        { label: "Teachers Section Ratio", value: "1.5 : 1" },
        { label: "Details of Special Educator", value: "Rajendra Kumar Mishra" },
        { label: "Details of Counsellor & Wellness Teacher", value: "Fatima Zeenat" },
      ],
    },
  {
    title: "C. RESULT AND ACADEMICS",
    items: [
      { label: "Academic Calendar", value: <a href="/academic-calendar" className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-primary/80 transition">View</a> },
      { label: "List Of Books", value: <a href="#" className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-primary/80 transition">View Document</a> },
      { label: "Annual Report", value: <a href="#" className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-primary/80 transition">View Document</a> },
    ],
  },
  {
      title: "E: SCHOOL INFRASTRUCTURE",
      items: [
        { label: "Total Campus Area of the School (in Sq. Mtr)", value: "8340" },
        { label: "No. and Size of the Class Rooms (in Sq. Mtr)", value: "28 Classrooms & 46 Sq. Mtr" },
        { label: "No. and Size of Laboratories including Computer Labs (in Sq. Mtr)", value: "4 Laboratories & 69 Sq. Mtr" },
        { label: "Internet Facility", value: "YES" },
        { label: "No. of Girls Toilets", value: "8" },
        { label: "No. of Boys Toilets", value: "12" },
        { label: "YouTube Video Link of Inspection covering Infrastructure of the School", value: <a href="https://youtu.be/YWpXkcD627g" className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-primary/80 transition">View Inspection Video</a> },
      ],
    },
];

const MandatoryPublicDisclosure = () => {
  return (
    <div className="container mx-auto px-2 xs:px-3 sm:px-4 py-6 min-h-screen">
      <h1 className="text-2xl xs:text-3xl font-bold mb-6 xs:mb-8 text-center text-primary tracking-tight">Mandatory Public Disclosure</h1>
      <div className="flex flex-col gap-6 xs:gap-8">
        {disclosureData.map((section, idx) => (
          <section
            key={idx}
            className="bg-white/90 rounded-lg xs:rounded-xl shadow-md xs:shadow-lg p-4 xs:p-6 border border-gray-200"
          >
            <h2 className="text-lg xs:text-xl font-semibold mb-3 xs:mb-4 text-accent border-b border-accent/20 pb-2 xs:pb-3">
              {section.title}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-[320px] w-full text-left border-separate border-spacing-y-1 xs:border-spacing-y-2 text-sm xs:text-base">
                <tbody>
                  {section.items.map((item, i) => (
                    <tr key={i} className="align-top">
                      <td className="font-medium pr-2 xs:pr-4 py-2 w-1/2 text-gray-700 whitespace-pre-line align-top">
                        {item.label}
                      </td>
                      <td className="py-2 text-gray-900 w-1/2 align-top break-words">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MandatoryPublicDisclosure;