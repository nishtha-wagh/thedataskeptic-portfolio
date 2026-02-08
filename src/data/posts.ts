export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Hot Take" | "Tutorial" | "Personal";
  date: string;
  readTime: string;
  likes: number;
  comments: number;
};

export const posts: BlogPost[] = [
  {
    slug: "why-your-ml-model-doesnt-need-more-data",
    title: "Why Your ML Model Doesn’t Need More Data",
    category: "Hot Take",
    date: "Jan 2026",
    readTime: "6 min read",
    excerpt:
      "Everyone’s obsessed with bigger datasets. But in production, real gains often come from better features, constraints, and problem framing.",
    content: `
    ## The Data Hoarding Problem

    We've all been there. Your model’s accuracy plateaus at 87%, and the first instinct is always the same: *"We need more data."*

    But here's the uncomfortable truth — **more data is rarely the answer**.

    ---

    ## The Feature Engineering Goldmine

    Let me share a real example.

    We had a churn model stuck at **82% accuracy** with 500K records. Instead of scraping more users, we engineered better features:

    - **Session decay rate** — how quickly engagement drops over time  
    - **Feature adoption velocity** — speed of trying new features  
    - **Support ticket sentiment trajectory** — sentiment trends over time  

    The result? **91% accuracy. Zero new data points.**

    ---

    ## Domain Expertise > Data Volume

    The best data scientists aren’t the ones with the biggest datasets.  
    They’re the ones who ask the “dumb” questions and translate intuition into signals.

    > *“The goal is to turn data into information, and information into insight.”* — Carly Fiorina

    ---

    ## When You Actually Need More Data

    Sometimes you genuinely do:

    1. Severe class imbalance  
    2. New market segments  
    3. Temporal shifts where old data no longer applies  

    These are diagnosable problems — **not defaults**.

    ---

    ## The Takeaway

    Next time your model underperforms:

    - Audit features with SHAP  
    - Talk to domain experts  
    - Check for leakage  
    - Experiment with architectures  

    **Think differently before you collect differently.**
    `,
    likes: 342,
    comments: 47,
  },
];