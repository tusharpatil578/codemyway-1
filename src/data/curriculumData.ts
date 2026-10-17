export interface ModuleInfo {
  id: string;
  number: string;
  weeks: string;
  title: string;
  subtitle: string;
  icon: string;
  hours: number;
  description: string;
  bullets: string[];
  capstone: string;
  tags: string[];
  techStack: string[];
  sampleCodeSnippet: string;
}

export const CURRICULUM_MODULES: ModuleInfo[] = [
  {
    id: "mod-1",
    number: "MODULE 01",
    weeks: "WEEKS 1-4",
    title: "Advanced SQL & Data Warehousing",
    subtitle: "PostgreSQL, Snowflake, Indexing & Query Plans",
    icon: "database",
    hours: 32,
    description:
      "Move beyond simple GROUP BY queries. Master recursive CTEs, dense ranking functions, window frames (ROWS BETWEEN), execution plans with EXPLAIN ANALYZE, and distributed Snowflake clustering keys.",
    bullets: [
      "Partition Pruning & B-Tree Index design under 100M+ row workloads",
      "Building analytical semantic layers with incremental dbt models",
      "Financial cohort analysis and running burn-rate calculations via windowing",
      "Vacuuming, bloat prevention, and lock contention mitigation in high-write Postgres"
    ],
    capstone: "High-Frequency Trading Ledger Reconciliation Engine (PostgreSQL)",
    tags: ["PostgreSQL 16", "Snowflake", "dbt Core", "Query Planner", "Partitioning"],
    techStack: ["PostgreSQL", "Snowflake", "dbt", "Docker", "EXPLAIN ANALYZE"],
    sampleCodeSnippet: `-- Recursive CTE to traverse parent-child account hierarchies with balance rollovers
WITH RECURSIVE account_tree AS (
    SELECT id, parent_id, balance_usd, 1 AS depth
    FROM ledger_accounts
    WHERE parent_id IS NULL
    UNION ALL
    SELECT c.id, c.parent_id, c.balance_usd, p.depth + 1
    FROM ledger_accounts c
    JOIN account_tree p ON c.parent_id = p.id
)
SELECT depth, COUNT(*) as accounts_count, SUM(balance_usd) as total_capital
FROM account_tree
GROUP BY depth
ORDER BY depth;`
  },
  {
    id: "mod-2",
    number: "MODULE 02",
    weeks: "WEEKS 5-8",
    title: "Production Python Analytics",
    subtitle: "Pandas 2.0, Polars, Vectorized NumPy & ETL",
    icon: "terminal",
    hours: 38,
    description:
      "Ditch slow for-loops. Master vectorized array programming with NumPy and Polars. Build fault-tolerant extraction pipelines, handle dirty real-world JSON telemetry, and write clean PEP-8 OOP pipelines.",
    bullets: [
      "Memory-efficient chunk processing and LazyFrame execution plans",
      "Custom API scrapers with automated exponential backoff retry logic",
      "Automated schema validation pipelines with Pydantic & PyArrow",
      "High-throughput multi-threaded ingestion into Parquet lakehouses"
    ],
    capstone: "Multi-Source E-Commerce Attribution Pipeline & Lakehouse Engine",
    tags: ["Polars", "PyArrow", "Pandas 2.0", "Parquet", "Vectorized SIMD"],
    techStack: ["Python 3.11", "Polars", "PyArrow", "DuckDB", "S3/MinIO"],
    sampleCodeSnippet: `import polars as pl

# Scan multi-gigabyte partitioned parquet without loading into memory
df_transactions = pl.scan_parquet("s3://fintech-lake/ledger_2024_*.parquet")

cohort_analysis = (
    df_transactions
    .filter(pl.col("status") == "SETTLED")
    .group_by(["merchant_id", "cohort_month"])
    .agg([
        pl.col("net_volume_usd").quantile(0.95).alias("p95_gmv"),
        pl.col("user_id").n_unique().alias("active_transactors")
    ])
    .collect(streaming=True)
)`
  },
  {
    id: "mod-3",
    number: "MODULE 03",
    weeks: "WEEKS 9-12",
    title: "Statistical Modeling & A/B Testing",
    subtitle: "Hypothesis Testing, Bayesian Inference & Causal Metrics",
    icon: "query_stats",
    hours: 36,
    description:
      "Statistical validity separates senior analysts from dashboard button-pushers. Learn power analysis, minimum detectable effect sizing, Welch's t-tests, and quasi-experimental synthetic controls.",
    bullets: [
      "Two-tailed hypothesis testing and variance reduction techniques (CUPED)",
      "Bayesian conversion rate estimation under sparse sample sizes",
      "Causal impact analysis on marketing feature rollouts using DoWhy",
      "Multi-Armed Bandit routing for dynamic algorithmic allocation"
    ],
    capstone: "Enterprise Product Feature Experimentation & Uplift Engine",
    tags: ["Bayesian A/B", "CUPED", "Welch's t-test", "Synthetic Controls", "Statsmodels"],
    techStack: ["SciPy", "Statsmodels", "PyMC", "NumPy", "JupyterLab"],
    sampleCodeSnippet: `import numpy as np
from scipy import stats

def evaluate_cuped_experiment(y_post, y_pre, treatment_mask):
    """Variance reduction via Controlled-experiment Using Pre-Experiment Data (CUPED)"""
    cov = np.cov(y_post, y_pre)[0, 1]
    var_pre = np.var(y_pre)
    theta = cov / var_pre
    y_cuped = y_post - theta * (y_pre - np.mean(y_pre))
    
    t_stat, p_val = stats.ttest_ind(
        y_cuped[treatment_mask], 
        y_cuped[~treatment_mask], 
        equal_var=False
    )
    return {"t_statistic": t_stat, "p_value": p_val, "variance_reduction_pct": (1 - np.var(y_cuped)/np.var(y_post))*100}`
  },
  {
    id: "mod-4",
    number: "MODULE 04",
    weeks: "WEEKS 13-16",
    title: "Executive BI & Capstone Project",
    subtitle: "Tableau, dbt Cloud & Real-time Executive Dashboards",
    icon: "dashboard",
    hours: 44,
    description:
      "Transform code into boardroom business impact. Build self-updating Tableau and PowerBI dashboards backed by dbt cloud semantic data models. End the cohort by presenting live to an IIT alumni jury panel.",
    bullets: [
      "Metric Tree design & executive KPI root-cause decomposition",
      "Real-time alerting bots for sudden revenue drift and churn spikes",
      "End-to-end Git CI/CD deployment of data warehouse pipelines",
      "Live oral architectural defense before senior data directors"
    ],
    capstone: "C-Suite SaaS Unit Economics & Boardroom BI Suite",
    tags: ["Tableau", "dbt Cloud", "Metric Trees", "CI/CD", "Stakeholder Defense"],
    techStack: ["Tableau Desktop", "dbt Cloud", "GitHub Actions", "Looker Studio", "Slack Webhooks"],
    sampleCodeSnippet: `version: 2

models:
  - name: fct_monthly_mrr_waterfall
    description: "C-Suite MRR breakdown decomposing new, expansion, contraction and churn"
    columns:
      - name: customer_id
        tests:
          - not_null
      - name: mrr_delta_usd
        description: "Net delta attributed to cohort pricing expansion"
        tests:
          - expression_is_true:
              expression: "mrr_delta_usd >= -500000"`
  }
];
