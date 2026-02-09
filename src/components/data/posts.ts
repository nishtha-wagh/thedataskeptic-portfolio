export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  likes: number;
  comments: number;
  tag: string;
  tagColor: string;
  readTime: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "why-your-ml-model-doesnt-need-more-data",
    title: "Why Your ML Model Doesn't Need More Data",
    excerpt:
      "Everyone's obsessed with bigger datasets. But sometimes, the real breakthrough comes from better feature engineering and domain expertise...",
    date: "Jan 2026",
    likes: 342,
    comments: 47,
    tag: "Hot Take",
    tagColor: "bg-coral-light text-coral",
    readTime: "6 min read",
    content: `## The Data Hoarding Problem

            We've all been there. Your model's accuracy plateaus at 87%, and the first instinct is always the same: *"We need more data."*

            But here's the uncomfortable truth — **more data is rarely the answer**. In fact, in my 3+ years as a data scientist, I've seen teams waste months collecting and labeling data when the real issue was hiding in plain sight.

            ### The Feature Engineering Goldmine

            Let me share a real example. We had a churn prediction model sitting at 82% accuracy with 500K records. The team wanted to scrape another million user records. Instead, I spent a week engineering 12 new features from the existing data:

            - **Session decay rate** — how quickly engagement drops over time
            - **Feature adoption velocity** — speed of trying new product features  
            - **Support ticket sentiment trajectory** — trend of sentiment across tickets

            The result? **91% accuracy.** Zero new data points.

            ### Domain Expertise > Data Volume

            The best data scientists I've worked with aren't the ones who can wrangle the biggest datasets. They're the ones who sit with domain experts, ask the "dumb" questions, and translate business intuition into mathematical features.

            > "The goal is to turn data into information, and information into insight." — Carly Fiorina

            ### When You Actually Need More Data

            Don't get me wrong — sometimes you genuinely need more data:

            1. **Class imbalance** that can't be solved with SMOTE or other techniques
            2. **New market segments** not represented in your training set
            3. **Temporal shifts** where historical data no longer reflects current patterns

            But these are specific, diagnosable problems — not a default reaction to underperformance.

            ### The Takeaway

            Next time your model underperforms, resist the data hoarding urge. Instead:

            - Audit your features with SHAP values
            - Talk to domain experts
            - Check for data leakage
            - Experiment with different model architectures

            **The skeptic's approach: Think differently before you collect differently.**`,
  },
  {
    slug: "the-art-of-being-a-skeptic-in-data-science",
    title: "The Art of Being a Skeptic in Data Science",
    excerpt:
      "Conformity kills innovation. Here's why the best data scientists are the ones who dare to ask the 'stupid' questions...",
    date: "Dec 2025",
    likes: 891,
    comments: 123,
    tag: "Personal",
    tagColor: "bg-lavender-light text-lavender",
    readTime: "8 min read",
    content: `## Why I Embrace the "DataSkeptic" Label

            In every data science team I've been on, there's a moment where someone suggests the *"standard approach."* Random forest for tabular data. LSTM for time series. ResNet for images. And everyone nods along.

            I'm usually the one who raises a hand and says, *"But what if we tried something weird?"*

            ### The Cost of Conformity

            The data science community has a conformity problem. We follow the same tutorials, use the same architectures, and apply the same preprocessing pipelines. It's comfortable. It's safe. And it produces **mediocre results**.

            The breakthroughs I've been part of always came from unconventional thinking:

            - Using **graph neural networks** for what everyone assumed was a tabular problem
            - Applying **NLP techniques** to numerical sensor data (treating value sequences as "sentences")
            - Building a **recommendation system** using collaborative filtering on error patterns

            ### Asking "Stupid" Questions

            The most powerful tool in a data scientist's arsenal isn't Python or TensorFlow — it's the courage to ask questions that might sound naive:

            - *"Why are we predicting this specific metric?"*
            - *"What would a domain expert do without any data?"*
            - *"What if our fundamental assumption is wrong?"*

            These questions make people uncomfortable. That's exactly why they're valuable.

            ### Building Your Skeptic's Mindset

            Here's how I cultivate unconventional thinking:

            1. **Read outside your field** — I draw more inspiration from behavioral economics and cognitive psychology than from ML papers
            2. **Prototype fast, fail faster** — Spend 2 hours on a "crazy idea" before dismissing it
            3. **Question the metric** — Sometimes the model is fine; the success metric is wrong
            4. **Embrace the weird** — Your unusual background, hobbies, or perspective is your superpower

            ### The Paradox of Fitting In

            Here's the irony: the skeptics in data science are often the ones who create the most value. Because when everyone zigs, the person who zags finds the untapped opportunities.

            **Don't just accept. Question everything. The data will back you up.**`,
  },
  {
    slug: "5-sql-tricks-that-changed-my-life",
    title: "5 SQL Tricks That Changed My Life",
    excerpt:
      "Window functions, CTEs, and lateral joins — the holy trinity of analytical SQL. Let me walk you through real-world examples...",
    date: "Nov 2025",
    likes: 1204,
    comments: 89,
    tag: "Tutorial",
    tagColor: "bg-mint-light text-mint",
    readTime: "10 min read",
    content: `## SQL: The Most Underrated Skill in Data Science

            Every data scientist wants to learn the latest deep learning framework. But you know what separates good data scientists from great ones? **SQL mastery.**

            Here are 5 SQL patterns that fundamentally changed how I work with data.

            ### 1. Window Functions for Running Calculations

            Stop writing self-joins for running totals. Window functions are elegant and performant:

            \`\`\`sql
            SELECT 
            user_id,
            event_date,
            revenue,
            SUM(revenue) OVER (
                PARTITION BY user_id 
                ORDER BY event_date 
                ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
            ) AS cumulative_revenue,
            AVG(revenue) OVER (
                PARTITION BY user_id 
                ORDER BY event_date 
                ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
            ) AS rolling_7d_avg
            FROM user_transactions;
            \`\`\`

            ### 2. CTEs for Readable Analytics

            Common Table Expressions turn spaghetti queries into readable stories:

            \`\`\`sql
            WITH monthly_cohorts AS (
            SELECT user_id, DATE_TRUNC('month', first_purchase) AS cohort
            FROM users
            ),
            retention AS (
            SELECT 
                c.cohort,
                DATE_TRUNC('month', t.purchase_date) AS activity_month,
                COUNT(DISTINCT t.user_id) AS active_users
            FROM monthly_cohorts c
            JOIN transactions t ON c.user_id = t.user_id
            GROUP BY 1, 2
            )
            SELECT * FROM retention ORDER BY cohort, activity_month;
            \`\`\`

            ### 3. LATERAL Joins for Top-N Per Group

            Need the top 3 products per category? LATERAL joins are your friend:

            \`\`\`sql
            SELECT c.name, top_products.*
            FROM categories c,
            LATERAL (
            SELECT product_name, sales
            FROM products p
            WHERE p.category_id = c.id
            ORDER BY sales DESC
            LIMIT 3
            ) top_products;
            \`\`\`

            ### 4. FILTER Clause for Conditional Aggregation

            Cleaner than CASE WHEN for conditional counts:

            \`\`\`sql
            SELECT 
            department,
            COUNT(*) AS total_employees,
            COUNT(*) FILTER (WHERE salary > 100000) AS high_earners,
            AVG(salary) FILTER (WHERE tenure_years > 2) AS avg_salary_tenured
            FROM employees
            GROUP BY department;
            \`\`\`

            ### 5. Generate Series for Gap Detection

            Find missing dates in your time series:

            \`\`\`sql
            SELECT gap_date::date
            FROM generate_series('2025-01-01', '2025-12-31', '1 day') AS gap_date
            WHERE gap_date::date NOT IN (
            SELECT DISTINCT event_date FROM daily_metrics
            );
            \`\`\`

            ### The Skeptic's SQL Philosophy

            Most data scientists treat SQL as a "get the data" step before the "real work" in Python. That's backwards. **The more you do in SQL, the faster and more reliable your pipeline becomes.**

            Master these patterns and you'll spend less time wrangling data and more time finding insights.`,
  },
];
