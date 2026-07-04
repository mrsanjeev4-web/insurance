/**
 * FAQ data for: Best Health Insurance Companies in the USA
 *
 * Each entry maps to a schema.org "Question" + "Answer" pair.
 * Add / edit items here — the component and SEO schema consume this automatically.
 */

export interface FaqItem {
    /** The question (maps to schema.org Question.name) */
    q: string;
    /** The answer  (maps to schema.org Answer.text) */
    a: string;
}

const bestHealthInsuranceFaqs: FaqItem[] = [
    {
        q: "What is the best health insurance company in the USA?",
        a: "Kaiser Permanente is often recognized for customer satisfaction, while UnitedHealthcare offers the largest provider network. The best company depends on your location, budget, and healthcare needs.",
    },
    {
        q: "Which health insurance company has the largest network?",
        a: "UnitedHealthcare generally maintains the largest provider network in the United States, giving members access to hundreds of thousands of doctors and hospitals nationwide.",
    },
    {
        q: "Which health insurance is best for seniors?",
        a: "Humana is widely regarded as one of the top Medicare Advantage providers. It offers robust wellness benefits and competitive prescription drug coverage tailored for seniors.",
    },
    {
        q: "What is the cheapest health insurance company?",
        a: "Affordable options vary by state, but Centene and Molina Healthcare often provide lower-cost marketplace plans. Subsidies through the ACA marketplace can also significantly reduce premiums.",
    },
    {
        q: "Can I get health insurance if I have a pre-existing condition?",
        a: "Yes. Under the Affordable Care Act (ACA), insurance companies cannot deny coverage or charge more because of pre-existing conditions. All ACA-compliant plans must cover pre-existing conditions from day one.",
    },
    {
        q: "What is the difference between HMO and PPO plans?",
        a: "An HMO (Health Maintenance Organization) requires you to choose a primary care physician and get referrals for specialists, but usually costs less. A PPO (Preferred Provider Organization) lets you see any doctor without a referral, offering more flexibility at a higher premium.",
    },
    {
        q: "How do I choose the right health insurance plan?",
        a: "Consider five key factors: monthly premium, annual deductible, out-of-pocket maximum, provider network (whether your preferred doctors are in-network), and prescription drug coverage. Balancing these against your expected healthcare use will guide you to the best plan.",
    },
    {
        q: "When can I enroll in health insurance?",
        a: "The main enrollment window is the Open Enrollment Period (OEP), which typically runs from November 1 to January 15 for ACA marketplace plans. Outside this window, a qualifying life event (marriage, birth, job loss) triggers a Special Enrollment Period.",
    },
];

export default bestHealthInsuranceFaqs;
