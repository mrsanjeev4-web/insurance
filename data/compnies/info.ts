export interface CompanyInterfaceHome {
  rank: number;
  id: string;
  name: string;
  overview: string[];
  keyFeatures: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  website: string;
  websiteLabel: string;
}

export const companies: CompanyInterfaceHome[] = [
  {
    rank: 1,
    id: "unitedhealthcare",
    name: "UnitedHealthcare",
    overview: [
      "UnitedHealthcare is one of the largest health insurance providers in the United States, serving more than 50 million members through a wide range of health plans and healthcare services. As part of UnitedHealth Group, the company has established itself as a trusted name in the insurance industry by offering comprehensive coverage for individuals, families, employers, Medicare beneficiaries, and Medicaid members.",
      "The company is recognized for its extensive nationwide provider network, allowing members to access thousands of hospitals, physicians, specialists, pharmacies, and healthcare facilities across the country. Whether someone needs routine preventive care, emergency treatment, specialist consultations, or long-term healthcare management, UnitedHealthcare offers plans designed to meet different medical and financial needs.",
      "One of the company's biggest strengths is its focus on technology-driven healthcare. Members can use the UnitedHealthcare mobile app and online portal to search for doctors, review claims, access digital ID cards, estimate treatment costs, refill prescriptions, and schedule virtual doctor visits.",
      "UnitedHealthcare offers several types of health insurance products, including Individual & Family Plans, Employer Group Plans, Medicare Advantage, Medicare Supplement Insurance, Medicaid Plans in participating states, Dental Insurance, Vision Coverage, and Prescription Drug Plans. Many plans also include preventive services, wellness programs, mental health support, chronic disease management, and telehealth services.",
      "Because plan availability, provider networks, and pricing vary by state, prospective members should carefully compare plan options before enrolling. However, for people seeking nationwide access to healthcare providers, flexible coverage options, and reliable digital healthcare tools, UnitedHealthcare remains one of the strongest choices available in the U.S. health insurance market.",
    ],
    keyFeatures: [
      "Nationwide network of doctors and hospitals",
      "Individual and family health insurance",
      "Employer-sponsored group health plans",
      "Medicare Advantage and Medicare Supplement plans",
      "Medicaid plans in eligible states",
      "Prescription drug coverage",
      "Virtual care and telehealth services",
      "Wellness and preventive care programs",
      "Mobile app and online member portal",
      "Dental and vision insurance options",
    ],
    pros: [
      "One of the largest provider networks in the United States",
      "Excellent Medicare Advantage plans",
      "Easy-to-use digital healthcare platform",
      "Strong preventive care benefits",
      "Available in most U.S. states",
    ],
    cons: [
      "Premiums may be higher than some regional insurers",
      "Benefits vary depending on location",
      "Certain plans require referrals for specialists",
    ],
    bestFor:
      "Individuals, families, employers, and Medicare beneficiaries looking for nationwide healthcare coverage and a large provider network.",
    website: "https://www.uhc.com",
    websiteLabel: "uhc.com",
  },
  {
    rank: 2,
    id: "bcbs",
    name: "Blue Cross Blue Shield (BCBS)",
    overview: [
      "Blue Cross Blue Shield (BCBS) is one of the most recognized health insurance brands in the United States, providing healthcare coverage through a nationwide federation of independent and locally operated health insurance companies. Collectively, BCBS companies serve more than 115 million members, making the organization one of the largest health insurance systems in the country.",
      "Unlike a single insurance company, Blue Cross Blue Shield Association consists of independently operated member companies that offer health insurance in different states. This structure allows BCBS plans to provide local expertise while maintaining one of the largest healthcare provider networks in the nation.",
      "BCBS offers a wide variety of insurance products, including Individual and Family Plans, Employer Group Coverage, Medicare Advantage Plans, Medicare Supplement Insurance, Medicaid Plans in selected states, Dental Insurance, Vision Coverage, and Prescription Drug Plans. Many plans also include wellness benefits, preventive care services, behavioral health support, maternity care, and telehealth options.",
      "One of the key advantages of choosing BCBS is its extensive provider network. Members typically have access to a large number of hospitals, physicians, specialists, and healthcare facilities throughout the United States. For individuals who travel frequently or live in multiple states during the year, this broad network can be especially valuable.",
      "Because every BCBS company operates independently, available plans, premiums, provider networks, and additional benefits may vary depending on where members live. Even so, the Blue Cross Blue Shield brand has built a strong reputation for financial stability, broad healthcare access, and dependable customer service.",
    ],
    keyFeatures: [
      "Nationwide healthcare network",
      "Individual and family plans",
      "Employer-sponsored coverage",
      "Medicare Advantage and Supplement plans",
      "Preventive healthcare benefits",
      "Telehealth services",
      "Prescription drug coverage",
      "Dental and vision plans",
      "Mobile apps and online account management",
    ],
    pros: [
      "Largest healthcare provider network",
      "Strong nationwide brand recognition",
      "Excellent employer-sponsored plans",
      "Wide Medicare coverage",
      "Available across all U.S. states",
    ],
    cons: [
      "Plans differ by state",
      "Premiums vary significantly",
      "Customer experience depends on the local BCBS company",
    ],
    bestFor:
      "People who want a trusted insurer with extensive provider access and flexible plan options across the United States.",
    website: "https://www.bcbs.com",
    websiteLabel: "bcbs.com",
  },
  {
    rank: 3,
    id: "kaiser-permanente",
    name: "Kaiser Permanente",
    overview: [
      "Kaiser Permanente is one of the most respected nonprofit healthcare organizations in the United States, recognized for combining health insurance with an integrated healthcare delivery system. Unlike many traditional insurers that only provide insurance coverage, Kaiser Permanente operates its own hospitals, medical offices, laboratories, pharmacies, and healthcare facilities in many of the regions it serves.",
      "Serving more than 12 million members, Kaiser Permanente offers Individual & Family Plans, Employer-Sponsored Coverage, Medicare Advantage Plans, Medicaid Plans in selected states, and a variety of preventive healthcare programs. The organization is known for emphasizing preventive care, early diagnosis, chronic disease management, and patient wellness rather than simply treating illnesses after they occur.",
      "One of Kaiser Permanente's greatest strengths is its coordinated care model. Primary care physicians, specialists, pharmacists, and healthcare professionals work together using a shared electronic health record system, reducing unnecessary delays and improving the quality of care.",
      "Members also benefit from advanced digital healthcare services. Through the Kaiser Permanente website and mobile app, patients can schedule appointments, refill prescriptions, review lab results, communicate with doctors, access digital medical records, and receive virtual care without visiting a clinic.",
      "Although Kaiser Permanente is widely respected for its high-quality care and customer satisfaction, its services are available only in selected states and regions. Most members are expected to receive care through Kaiser Permanente's own network of hospitals and physicians, which may limit flexibility for people who prefer a broader choice of providers.",
    ],
    keyFeatures: [
      "Integrated health insurance and healthcare system",
      "Nonprofit healthcare organization",
      "Individual, family, employer, Medicare, and Medicaid plans",
      "Coordinated care model",
      "Electronic medical records",
      "Telehealth and virtual doctor visits",
      "Preventive healthcare services",
      "Prescription drug coverage",
      "Mobile app and online member portal",
    ],
    pros: [
      "High customer satisfaction ratings",
      "Excellent preventive care services",
      "Coordinated treatment among healthcare providers",
      "Outstanding digital healthcare platform",
      "Strong Medicare Advantage plans",
    ],
    cons: [
      "Available only in selected states",
      "Most services require using Kaiser Permanente facilities",
      "Limited flexibility compared to PPO plans",
    ],
    bestFor:
      "Individuals and families who prefer coordinated healthcare, preventive services, and integrated medical care.",
    website: "https://healthy.kaiserpermanente.org",
    websiteLabel: "healthy.kaiserpermanente.org",
  },
  {
    rank: 4,
    id: "aetna",
    name: "Aetna",
    overview: [
      "Aetna, a CVS Health company, is one of the oldest and most established health insurance providers in the United States. With a history spanning more than 170 years, the company serves millions of members by offering comprehensive health insurance solutions for individuals, families, employers, Medicare beneficiaries, and Medicaid recipients in selected states.",
      "Since becoming part of CVS Health, Aetna has expanded its healthcare ecosystem by combining health insurance with pharmacy services, retail health clinics, and digital healthcare solutions. This integration helps members access medical care, prescription medications, and preventive health services more conveniently.",
      "Aetna offers a wide selection of health insurance products, including Individual & Family Plans, Employer Group Coverage, Medicare Advantage Plans, Medicare Supplement Insurance, Prescription Drug Plans (Part D), Dental Insurance, Vision Coverage, and Supplemental Health Plans.",
      "One of Aetna's major advantages is its broad provider network. Members have access to thousands of doctors, hospitals, specialists, urgent care centers, and pharmacies throughout the United States, helping reduce out-of-pocket expenses when using in-network services.",
      "Because coverage options, provider networks, and pricing vary depending on the state, individuals should carefully compare available plans before enrolling. Nevertheless, Aetna remains one of the most trusted names in the U.S. health insurance industry due to its financial strength, broad coverage options, and integration with CVS Health's healthcare services.",
    ],
    keyFeatures: [
      "Backed by CVS Health",
      "Nationwide provider network",
      "Individual and family health insurance",
      "Employer-sponsored plans",
      "Medicare Advantage and Supplement plans",
      "Prescription drug coverage",
      "Telehealth services",
      "Wellness and preventive care programs",
      "Dental and vision insurance",
      "Mobile app and online member portal",
    ],
    pros: [
      "Trusted brand with a long history",
      "Integrated healthcare through CVS Health",
      "Strong Medicare offerings",
      "Wide provider network",
      "Excellent digital member experience",
    ],
    cons: [
      "Some plans have higher premiums",
      "Benefits vary by location",
      "Provider availability depends on plan type",
    ],
    bestFor:
      "Individuals, families, and seniors seeking comprehensive healthcare coverage with access to CVS Health's integrated services.",
    website: "https://www.aetna.com",
    websiteLabel: "aetna.com",
  },
  {
    rank: 5,
    id: "cigna",
    name: "Cigna Healthcare",
    overview: [
      "Cigna Healthcare is a globally recognized health insurance provider known for offering flexible health plans, strong wellness programs, and comprehensive medical coverage for individuals, families, employers, and international customers.",
      "In the United States, Cigna offers a broad range of insurance products, including Individual & Family Health Plans, Employer-Sponsored Coverage, Medicare Advantage Plans, Medicare Prescription Drug Plans, Dental Insurance, Vision Coverage, and Supplemental Health Benefits. The company is particularly recognized for its emphasis on preventive care, behavioral health services, and chronic disease management.",
      "One of Cigna's key strengths is its focus on whole-person health. Rather than concentrating solely on medical treatment, the company encourages members to improve their physical, mental, and emotional well-being through wellness programs, health coaching, nutrition support, fitness incentives, and mental health resources.",
      "Cigna maintains an extensive provider network that includes physicians, specialists, hospitals, urgent care centers, and pharmacies across the United States. Members can easily search for in-network providers through the company's website or mobile app.",
      "Although plan availability and pricing vary depending on location, Cigna remains a strong choice for people seeking flexible coverage, wellness-focused healthcare, and modern digital health management tools.",
    ],
    keyFeatures: [
      "Comprehensive individual and family plans",
      "Employer-sponsored health insurance",
      "Medicare Advantage and prescription drug plans",
      "Nationwide provider network",
      "Telehealth and virtual care",
      "Behavioral health support",
      "Wellness and preventive care programs",
      "Dental and vision insurance",
      "Mobile app and online account management",
    ],
    pros: [
      "Strong wellness and preventive care programs",
      "Excellent digital healthcare experience",
      "Extensive provider network",
      "Comprehensive employer health plans",
      "International healthcare expertise",
    ],
    cons: [
      "Plan availability differs by state",
      "Premiums vary depending on coverage level",
      "Some specialized services require prior authorization",
    ],
    bestFor:
      "Individuals, families, employers, and travelers looking for comprehensive coverage with a strong focus on wellness and digital healthcare.",
    website: "https://www.cigna.com",
    websiteLabel: "cigna.com",
  },
  {
    rank: 6,
    id: "humana",
    name: "Humana",
    overview: [
      "Humana is one of the leading health insurance companies in the United States, with a strong reputation for providing Medicare-focused healthcare solutions while also offering medical, dental, vision, and pharmacy benefits for individuals, families, employers, and military members. Founded in 1961, the company has grown into one of the nation's largest health insurers.",
      "Although Humana provides several types of health insurance, the company is especially recognized for its Medicare Advantage plans, which consistently rank among the most popular choices for eligible seniors. Many of these plans combine hospital, medical, prescription drug, dental, vision, hearing, and wellness benefits into a single package.",
      "Humana believes that healthcare should focus not only on treating illnesses but also on helping people maintain healthy lifestyles, offering preventive healthcare programs, fitness benefits, chronic disease management, mental health support, and wellness resources.",
      "For eligible Medicare members, many Humana plans also include additional wellness benefits such as fitness memberships, home healthcare support, transportation assistance, nurse hotlines, and medication management programs.",
      "Although individual plan availability and pricing differ by state, Humana continues to be one of the best choices for seniors and Medicare beneficiaries who want comprehensive healthcare coverage with valuable wellness benefits.",
    ],
    keyFeatures: [
      "Medicare Advantage plans",
      "Individual and employer health insurance",
      "Prescription drug coverage",
      "Dental, vision, and hearing benefits",
      "Telehealth services",
      "Wellness and fitness programs",
      "Large provider network",
      "Mobile app and online member portal",
    ],
    pros: [
      "Excellent Medicare Advantage plans",
      "Strong wellness programs",
      "Comprehensive preventive care",
      "User-friendly digital tools",
      "Wide network of healthcare providers",
    ],
    cons: [
      "Individual plan availability varies by state",
      "Premiums differ depending on coverage",
      "Some plans have limited provider networks",
    ],
    bestFor:
      "Seniors, Medicare beneficiaries, retirees, and individuals looking for healthcare plans with additional wellness benefits.",
    website: "https://www.humana.com",
    websiteLabel: "humana.com",
  },
  {
    rank: 7,
    id: "elevance-health",
    name: "Elevance Health (Anthem)",
    overview: [
      "Elevance Health, formerly known as Anthem, is one of the largest health benefits companies in the United States. Through its affiliated health plans, the company provides medical insurance, pharmacy services, behavioral healthcare, dental coverage, vision insurance, and wellness programs to millions of Americans. Although the corporate name changed to Elevance Health in 2022, many insurance plans continue to operate under the well-known Anthem brand in several states.",
      "The company offers Individual & Family Health Plans, Employer Group Coverage, Medicare Advantage Plans, Medicaid Programs, and Specialty Insurance Products, allowing members to choose healthcare solutions that fit different budgets, family sizes, and medical needs.",
      "One of Elevance Health's biggest strengths is its extensive provider network. Members have access to thousands of doctors, hospitals, specialists, pharmacies, and healthcare facilities across the United States.",
      "Elevance Health places significant emphasis on whole-person healthcare by integrating physical health, behavioral health, pharmacy services, and social support into a coordinated care model. Many plans include preventive care, mental health counseling, wellness coaching, maternity services, chronic disease management, and virtual healthcare visits.",
      "While available plans vary by state, Elevance Health remains one of the most trusted insurance providers for individuals, families, employers, and government-sponsored healthcare programs.",
    ],
    keyFeatures: [
      "Individual and family health insurance",
      "Employer-sponsored plans",
      "Medicare Advantage",
      "Medicaid coverage",
      "Behavioral health services",
      "Pharmacy benefits",
      "Telehealth services",
      "Preventive healthcare",
      "Wellness programs",
      "Mobile app and online account management",
    ],
    pros: [
      "Broad provider network",
      "Strong employer health plans",
      "Excellent preventive healthcare",
      "Comprehensive digital services",
      "Integrated medical and behavioral healthcare",
    ],
    cons: [
      "Coverage varies by state",
      "Plan costs depend on location",
      "Network restrictions may apply",
    ],
    bestFor:
      "Individuals, families, employers, and Medicare members seeking comprehensive healthcare coverage with strong preventive care benefits.",
    website: "https://www.elevancehealth.com",
    websiteLabel: "elevancehealth.com",
  },
  {
    rank: 8,
    id: "molina-healthcare",
    name: "Molina Healthcare",
    overview: [
      "Molina Healthcare is a nationally recognized managed healthcare organization that specializes in providing affordable health insurance solutions for individuals and families who qualify for government-sponsored healthcare programs. Founded in 1980, the company focuses primarily on Medicaid, Medicare, and Marketplace health insurance plans.",
      "Today, Molina Healthcare serves millions of members through state-sponsored healthcare programs and Affordable Care Act (ACA) Marketplace plans, centered on improving healthcare access while delivering coordinated, cost-effective medical services for low-income individuals, seniors, and families.",
      "Molina Healthcare offers Medicaid Managed Care Plans, Medicare Advantage Plans, Dual Eligible Special Needs Plans (D-SNPs), Marketplace Individual & Family Plans, and additional services such as behavioral health support, pharmacy benefits, preventive care, maternity services, and chronic disease management.",
      "One of Molina Healthcare's greatest strengths is its commitment to community-based healthcare, working closely with local physicians, hospitals, clinics, pharmacies, and community organizations.",
      "For individuals who qualify for Medicaid, Medicare, or Affordable Care Act Marketplace coverage, Molina Healthcare remains one of the most reliable and accessible health insurance providers in the United States.",
    ],
    keyFeatures: [
      "Medicaid health plans",
      "Medicare Advantage plans",
      "ACA Marketplace coverage",
      "Prescription drug benefits",
      "Preventive healthcare",
      "Behavioral health services",
      "Telehealth",
      "Community healthcare programs",
      "Mobile app",
      "Online member portal",
    ],
    pros: [
      "Affordable health insurance options",
      "Strong Medicaid expertise",
      "Comprehensive preventive care",
      "Community-focused healthcare",
      "Easy-to-use digital services",
    ],
    cons: [
      "Available only in participating states",
      "Smaller provider network than some national insurers",
      "Plan options vary by location",
    ],
    bestFor:
      "Individuals and families eligible for Medicaid, Medicare, or Affordable Care Act Marketplace health insurance.",
    website: "https://www.molinahealthcare.com",
    websiteLabel: "molinahealthcare.com",
  },
  {
    rank: 9,
    id: "highmark",
    name: "Highmark",
    overview: [
      "Highmark is one of the largest regional health insurance organizations in the United States, serving millions of members through a wide range of healthcare plans and related services. As part of the Highmark Health enterprise, the company combines health insurance with healthcare delivery, pharmacy services, and advanced technology.",
      "Highmark primarily operates in Pennsylvania, Delaware, West Virginia, and parts of New York, where it offers Individual & Family Plans, Employer Group Coverage, Medicare Advantage, Medicare Supplement Insurance, Medicaid Programs in participating regions, Dental Plans, Vision Coverage, and Prescription Drug Benefits.",
      "One of Highmark's biggest strengths is its strong regional provider network, ensuring convenient access to quality healthcare services close to home.",
      "Highmark also emphasizes preventive healthcare and wellness. Many plans include annual wellness exams, vaccinations, cancer screenings, maternity care, behavioral health services, chronic disease management, and lifestyle improvement programs.",
      "Although Highmark's services are primarily available in selected states, it remains one of the most trusted regional health insurance providers due to its strong provider network, customer-focused approach, and commitment to improving healthcare quality.",
    ],
    keyFeatures: [
      "Individual and family health insurance",
      "Employer-sponsored plans",
      "Medicare Advantage and Supplement plans",
      "Prescription drug coverage",
      "Preventive healthcare",
      "Telehealth services",
      "Wellness programs",
      "Mobile app and online account management",
      "Dental and vision insurance",
    ],
    pros: [
      "Strong regional provider network",
      "Excellent customer service",
      "Comprehensive preventive care",
      "User-friendly digital healthcare tools",
      "Reliable Medicare coverage",
    ],
    cons: [
      "Available only in selected states",
      "Smaller national presence than larger insurers",
      "Coverage options vary by region",
    ],
    bestFor:
      "Residents of Highmark's service areas looking for comprehensive healthcare coverage with strong local provider networks.",
    website: "https://www.highmark.com",
    websiteLabel: "highmark.com",
  },
  {
    rank: 10,
    id: "centene",
    name: "Centene Corporation",
    overview: [
      "Centene Corporation is one of the largest healthcare enterprises in the United States, specializing in government-sponsored healthcare programs and affordable insurance solutions, serving millions of members across the country.",
      "Centene's mission is to improve access to high-quality, affordable healthcare while supporting underserved communities and vulnerable populations, working with healthcare providers, hospitals, pharmacies, and community organizations.",
      "The company offers Medicaid Managed Care Plans, Medicare Advantage Plans, Medicare Prescription Drug Plans, ACA Marketplace Health Plans, Behavioral Health Services, Pharmacy Benefits, Telehealth, and Comprehensive Preventive Care Programs.",
      "Technology also plays an important role in Centene's member experience, with online member portals and mobile applications letting members review benefits, locate providers, access digital ID cards, monitor claims, refill prescriptions, and connect with healthcare professionals through virtual visits.",
      "For individuals and families who qualify for Medicaid, Medicare, or Marketplace coverage, Centene offers reliable health insurance solutions supported by an extensive network of healthcare providers and community-based healthcare programs.",
    ],
    keyFeatures: [
      "Medicaid managed care",
      "Medicare Advantage plans",
      "Marketplace health insurance",
      "Pharmacy benefits",
      "Preventive healthcare",
      "Behavioral health services",
      "Telehealth",
      "Mobile app",
      "Community healthcare programs",
      "Care coordination services",
    ],
    pros: [
      "Strong government healthcare expertise",
      "Affordable Marketplace plans",
      "Preventive healthcare focus",
      "Comprehensive care management",
      "Large national presence",
    ],
    cons: [
      "Plan availability varies by state",
      "Network size differs between subsidiaries",
      "Some plans require referrals for specialist care",
    ],
    bestFor:
      "Individuals and families seeking affordable Medicaid, Medicare, or ACA Marketplace health insurance coverage.",
    website: "https://www.centene.com",
    websiteLabel: "centene.com",
  },
];

export interface ComparisonRow {
  name: string;
  bestFor: string;
  network: number; // stars out of 5
  medicare: number | true; // true = checkmark, number = stars
  aca: "yes" | "limited";
  digital: number; // stars out of 5
}

export const comparisonRows: ComparisonRow[] = [
  { name: "UnitedHealthcare", bestFor: "Nationwide Coverage", network: 5, medicare: true, aca: "yes", digital: 5 },
  { name: "Blue Cross Blue Shield", bestFor: "Largest Provider Access", network: 5, medicare: true, aca: "yes", digital: 4 },
  { name: "Kaiser Permanente", bestFor: "Integrated Care", network: 4, medicare: true, aca: "yes", digital: 5 },
  { name: "Aetna", bestFor: "CVS Integration", network: 4, medicare: true, aca: "yes", digital: 5 },
  { name: "Cigna", bestFor: "Wellness Programs", network: 4, medicare: true, aca: "limited", digital: 5 },
  { name: "Humana", bestFor: "Seniors", network: 4, medicare: 5, aca: "limited", digital: 4 },
  { name: "Elevance Health", bestFor: "Families & Employers", network: 4, medicare: true, aca: "yes", digital: 4 },
  { name: "Molina Healthcare", bestFor: "Medicaid & ACA", network: 3, medicare: true, aca: "yes", digital: 4 },
  { name: "Highmark", bestFor: "Regional Coverage", network: 4, medicare: true, aca: "yes", digital: 4 },
  { name: "Centene", bestFor: "Affordable Government Plans", network: 3, medicare: true, aca: "yes", digital: 4 },
];

export interface BestForEntry {
  label: string;
  company: string;
}

export const bestForList: BestForEntry[] = [
  { label: "Best Overall", company: "UnitedHealthcare" },
  { label: "Best Provider Network", company: "Blue Cross Blue Shield" },
  { label: "Best Integrated Healthcare", company: "Kaiser Permanente" },
  { label: "Best Medicare Plans", company: "Humana" },
  { label: "Best Employer Coverage", company: "Aetna" },
  { label: "Best Wellness Programs", company: "Cigna" },
  { label: "Best Family Coverage", company: "Elevance Health" },
  { label: "Best Medicaid Plans", company: "Molina Healthcare" },
  { label: "Best Regional Coverage", company: "Highmark" },
  { label: "Best Affordable Marketplace Plans", company: "Centene" },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const companyFaqs: FAQ[] = [
  {
    question: "Which health insurance company has the largest provider network?",
    answer:
      "Blue Cross Blue Shield and UnitedHealthcare are widely recognized for offering some of the largest provider networks in the United States.",
  },
  {
    question: "Which company is best for Medicare Advantage?",
    answer:
      "Humana, UnitedHealthcare, Aetna, and Kaiser Permanente are among the leading providers of Medicare Advantage plans.",
  },
  {
    question: "Which health insurance company is best for families?",
    answer:
      "UnitedHealthcare, Elevance Health, Blue Cross Blue Shield, and Aetna offer a variety of plans suitable for families.",
  },
  {
    question: "Which insurer focuses on preventive healthcare?",
    answer:
      "Kaiser Permanente and Cigna are especially known for their strong emphasis on preventive care and wellness programs.",
  },
  {
    question: "Can I buy health insurance directly from these companies?",
    answer:
      "Yes. Most companies offer individual and family plans directly or through the Health Insurance Marketplace, depending on your state and eligibility.",
  },
];
