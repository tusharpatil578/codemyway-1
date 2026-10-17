export interface StudentTestimonial {
  id: string;
  name: string;
  cohort: string;
  salaryTransition: string;
  oldRole: string;
  newRole: string;
  company: string;
  quote: string;
  image: string;
  verified: boolean;
  hikePercent: number;
}

export const TESTIMONIALS: StudentTestimonial[] = [
  {
    id: "vikramaditya",
    name: "Vikramaditya Rao",
    cohort: "Cohort #08 Alumnus",
    salaryTransition: "₹6.5 LPA → ₹24 LPA",
    oldRole: "Junior BI Analyst",
    newRole: "Senior Analytics Engineer",
    company: "Tier-1 Fintech",
    quote:
      "Before CodeMyWay, I knew basic SQL and copied StackOverflow Pandas scripts. Pooja from IIT Bombay personally dismantled my naive queries and taught me Snowflake partition theory. In my final interview at an EU fintech, I redesigned their warehouse model on the spot.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANAPDlFreib8lHOJz6_22zDgaPWMP3hTFpPbzPmnhKddU2cqe6lwFfRpEwMIuB4JK-X91KXeJ5eDqAvRXdhEexCUbiVZcAkRZJY-aGITy7-7oAkS6Mm5oAM70KdZM-7PsWJfbGqBhmNliRWnpPJoHJ8TfPRsMqKXPgPZ2mbZXZwEd8sSXodip3g2Y2CyD-IkqNq1i93kXGOee1YrjRQGnty8rtVYsj5szNSfA-XiDNdFLG4UT48T05",
    verified: true,
    hikePercent: 269
  },
  {
    id: "shreya",
    name: "Shreya Mukherjee",
    cohort: "Cohort #11 Alumna",
    salaryTransition: "MIS Exec → Lead BI Specialist",
    oldRole: "MIS Executive (Non-Tech)",
    newRole: "Decision Scientist",
    company: "Global Mobility Giant",
    quote:
      "The 1-on-1 code reviews are ruthless in the best way. Aarav (IIT Delhi) rejected my code three times until my regression model was statistically bulletproof. That exact attention to detail helped me pass Google's technical panel on my first attempt.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbYbxOmUnegUjr0RFg25o0zaWX-nXlAy3y1AJ4H5mTafqWlD0BACDcDVdOIOzzsEaBaVmlFsLIwG6sqU-ZettVXE-By6hDCnD3uJ7t-U3Ytx4k_MAzrJEW8KKbwt0n-pTizM7K5QQeri-o7n50F0MO9PbJKZ1aI80EX00NVXgBEObV4wvmXlMjmryVcDi7fBbvgkUD6CMeshhKOry7Ex_BcSISNBcqDsnwrVLONCki1KPPJ-0NT8X6",
    verified: true,
    hikePercent: 185
  },
  {
    id: "ananya",
    name: "Ananya Deshpande",
    cohort: "Cohort #09 Alumna",
    salaryTransition: "₹8 LPA → ₹28.5 LPA",
    oldRole: "QA Automation Engineer",
    newRole: "Data Platform Engineer",
    company: "Swiggy",
    quote:
      "Learning vectorized Polars and distributed dbt models directly from Rohan (IIT Roorkee) completely rewired my engineering instinct. The algorithmic mock defense before the Swiggy interview matched the exact system design questions asked.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBedgactBRueCK3aTGsvd51JZ8HOIci0B6MJJu4JtlctbxuPtzXKS37kJDCT3CXOtfvciddcD-U785keRuwEHVkrl5iJ0BIdbb7Axc_oZdg59PNOBc47PB_3rDNGRc9qZRPPehQWP9zLMceNyUkHz5EPOhLPdtXEFHKk9YbdcHRkl3ZZLp5RajK2Ks64Gvj_Hgl7Ih0yH5jIkM9hk4mPthnaHVGQlIpE53vUyzTodzU_uExMpQFQbxw",
    verified: true,
    hikePercent: 256
  }
];

export const PLACEMENT_STATS = {
  avgHike: "142%",
  placementRate: "94.8%",
  avgPackage: "₹18.5 LPA",
  topQuartile: "₹34+ LPA",
  ratio: "30 : 1",
  avgDaysToOffer: 48,
  totalGraduates: 1840,
  auditedBy: "Deloitte Registry / Grant Thornton Audited Ledger FY24",
  companiesHiring: [
    { name: "Google", count: 48, avgSalary: "₹36 LPA", role: "Data Scientist / Analytics Specialist" },
    { name: "Microsoft", count: 39, avgSalary: "₹32 LPA", role: "Decision Scientist" },
    { name: "Amazon", count: 64, avgSalary: "₹28 LPA", role: "Business Intelligence Engineer II" },
    { name: "Goldman Sachs", count: 28, avgSalary: "₹34 LPA", role: "Quantitative Data Analyst" },
    { name: "Uber", count: 31, avgSalary: "₹35 LPA", role: "Marketplace Data Scientist" },
    { name: "Swiggy", count: 52, avgSalary: "₹26 LPA", role: "Senior Analytics Engineer" },
    { name: "Stripe", count: 18, avgSalary: "₹42 LPA", role: "Platform Analytics Engineer" }
  ]
};
