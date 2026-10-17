export interface Mentor {
  id: string;
  name: string;
  role: string;
  companyTag: string;
  companyTagColor: string; // "primary" | "secondary" | "tertiary"
  collegeTag: string;
  image: string;
  alt: string;
  bio: string;
  trackSpecialization: string;
  mentoredCohorts: string;
  placementRate: string;
  jeeRank?: string;
  patentsOrPapers?: string;
  availability: string;
}

export const MENTORS: Mentor[] = [
  {
    id: "aarav-singhal",
    name: "Aarav Singhal",
    role: "Senior Data Scientist & ML Architect",
    companyTag: "Ex-Google",
    companyTagColor: "secondary",
    collegeTag: "IIT DELHI '18",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOtVLuWt15Zndr8vWEwE1ONLpEOcuvuomPzssy4rq4JNKqZddoxShkjcPrJjKnSIeMGdRWyIcbhLL0oTGVhYEF4fCKZE6SqEIYKmUvwbE3tA6pylxcz0786rBzOEELMWJEmB5mx1MsqxwnuWclxtNlCxH_BQTT--6oAJL8Ke1mksBl25xj4XcoxUjegy53_qKsTqZdmCvMpBu_SZDEh1y1FRrBGH-nbmxkZI8HwV8fp9DR_30xcAMO",
    alt: "Professional studio portrait of Aarav Singhal, IIT Delhi alumnus and Ex-Google Senior Data Scientist",
    bio: "Spearheaded production recommendation graphs at Google Cloud. Specializes in predictive telemetry, real-time feature stores, and automated statistical testing frameworks.",
    trackSpecialization: "Predictive Analytics & Polars",
    mentoredCohorts: "14 Finished",
    placementRate: "97% Placed",
    jeeRank: "AIR 142 (JEE Advanced 2014)",
    patentsOrPapers: "2 IEEE papers on distributed graph neural embeddings",
    availability: "3 slots open for Summer 2025"
  },
  {
    id: "pooja-nambiar",
    name: "Pooja Nambiar",
    role: "Lead Analytics Engineer",
    companyTag: "Goldman Sachs",
    companyTagColor: "primary",
    collegeTag: "IIT BOMBAY '19",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBedgactBRueCK3aTGsvd51JZ8HOIci0B6MJJu4JtlctbxuPtzXKS37kJDCT3CXOtfvciddcD-U785keRuwEHVkrl5iJ0BIdbb7Axc_oZdg59PNOBc47PB_3rDNGRc9qZRPPehQWP9zLMceNyUkHz5EPOhLPdtXEFHKk9YbdcHRkl3ZZLp5RajK2Ks64Gvj_Hgl7Ih0yH5jIkM9hk4mPthnaHVGQlIpE53vUyzTodzU_uExMpQFQbxw",
    alt: "Corporate headshot of Pooja Nambiar, IIT Bombay alumna and Goldman Sachs Lead Analytics Engineer",
    bio: "Architected low-latency settlement reconciliations processing 10M+ daily ticks. Expert in high-performance Snowflake architecture, dbt pipelines, and complex window aggregations.",
    trackSpecialization: "SQL Warehousing & dbt Core",
    mentoredCohorts: "11 Finished",
    placementRate: "95% Placed",
    jeeRank: "AIR 88 (JEE Advanced 2015)",
    patentsOrPapers: "Co-author of high-throughput ledger audit whitepaper",
    availability: "2 slots open for Summer 2025"
  },
  {
    id: "karthik-sundaram",
    name: "Karthik Sundaram",
    role: "Head of BI & Decision Sciences",
    companyTag: "Ex-Uber",
    companyTagColor: "tertiary",
    collegeTag: "NIT TRICHY '17",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlLdbCWrxsTBFrYrVbNmHP4EAlqmCYaQ0XtCDciQuAfd1FXfF4woKJ3fIFayoHvdQ18uYaVeKUjvS3clv8mfvEjFWqMWC1zBQPpLY3-HpsksgKdZYGYHoW4q_pLz_ioIwCfYxWw50qqjL_g6jCAgrpgc56U0PIrLEN5CuswFkLGNF2CGVxWXhfIlb42lHJUo0qOaXs93xtdcuQFrq8fG7Oxoe0uo6J4YP6bqJl2K13npeQxJnDy6PW",
    alt: "Portrait of Karthik Sundaram, NIT Trichy alumnus and Ex-Uber Head of BI & Decision Sciences",
    bio: "Led driver economics and real-time surge elasticity dashboards across APAC regions. Mentors on executive storytelling, metric trees, and mission-critical Tableau architectures.",
    trackSpecialization: "Executive BI & Growth Models",
    mentoredCohorts: "16 Finished",
    placementRate: "96% Placed",
    jeeRank: "State Rank 14 (AIEEE/JEE Main 2013)",
    patentsOrPapers: "Keynote speaker at dbt Coalesce 2023 on Metric Trees",
    availability: "4 slots open for Summer 2025"
  },
  {
    id: "rohan-verma",
    name: "Rohan Verma",
    role: "Staff Infrastructure Data Engineer",
    companyTag: "Stripe",
    companyTagColor: "primary",
    collegeTag: "IIT ROORKEE '16",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9pWw1xx4GOhbuPMtQK9JvueXWnadEg-R3iCYaa9FP4Q9KL10W5jr0yb8_jgi_sDYJ4cFKRyd4_rX5mJWjR0xkwBwsyt-myjxFtQOiWowsqyliAHCj2FsEy_Qp9M1bT3KaOB5IMJlaK8hhsvsZtJy_sMUcUILaqlzh0AR8FVbUpcNmQyogaGSBtBXNW6PDIQZnNd4xEVE-p2HBVNJaEPBL-0qYUy4HI6YyD2ixGaivw02cnqw4kvlN",
    alt: "Portrait of Rohan Verma, IIT Roorkee alumnus and Stripe Staff Data Engineer",
    bio: "Designed petabyte-scale financial telemetry and stream compaction layers at Stripe. Focuses on vectorized SIMD kernels, parquet partitioning, and distributed locks.",
    trackSpecialization: "Distributed Lakehouses & Streaming",
    mentoredCohorts: "12 Finished",
    placementRate: "98% Placed",
    jeeRank: "AIR 204 (JEE Advanced 2012)",
    patentsOrPapers: "Distributed Ledger compaction framework contributor",
    availability: "1 slot open for Summer 2025"
  }
];
