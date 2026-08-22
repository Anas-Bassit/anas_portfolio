import type { Project } from "../types/project";

export const projects: readonly Project[] = [
    {
    id: "shoply-backend",
    title: "Shoply Platform Backend",

    shortDescription:
        "A centralized multi-vendor e-commerce backend powering the Shoply customer app, merchant dashboard, admin dashboard, and delivery application.",

    category: "personal",
    kind: "product",

    status: "Live · Active Development",
    role: "Backend Developer",

    problem:
        "Multi-store e-commerce platforms need to keep customers, merchants, administrators, and delivery workflows connected to the same business data and rules without duplicating backend logic across separate applications.",

    solution:
        "Built a centralized Laravel backend that exposes shared APIs and business workflows for the Shoply customer app, merchant dashboard, admin dashboard, and delivery application.",

    backendWork: [
        "Designed and developed REST APIs serving customer, merchant, admin, and delivery applications from a shared backend.",
        "Implemented authentication, token refresh, OTP and password recovery flows, role-based access control, and application-specific authorization.",
        "Built core commerce workflows covering merchants, stores, branches, products, categories, carts, checkout, orders, and delivery.",
        "Implemented Stripe payment workflows, including payment state handling and webhook processing.",
        "Developed customer-facing features including addresses, reviews, ratings, search, filtering, pagination, and product recommendations.",
        "Implemented Firebase notification workflows and queued background processing.",
        "Handled file and image uploads using persistent storage.",
        "Built administrative workflows for managing users, merchants, stores, products, orders, payments, and operational data.",
    ],

    highlights: [
        "One centralized backend serving four different client applications with shared business rules.",
        "Multi-role workflows for customers, merchants, administrators, and delivery users.",
        "Layered application structure separating request handling, orchestration, business logic, persistence, and API presentation.",
        "Redis-backed caching and queued background processing.",
        "Stripe payment integration with webhook-driven payment updates.",
        "Firebase-powered notification workflows.",
        "Rule-based recommendation engine for product discovery.",
        "Deployed as a live production API with public API documentation.",
    ],

    architecture: [
        "Layered architecture following Controller → Service → UseCase → Repository responsibilities.",
        "Form Requests isolate validation and DTOs provide typed data transfer between application layers.",
        "Business logic lives in dedicated Use Cases, with transaction handling and business exceptions where required.",
        "Repositories isolate persistence concerns, while API Resources keep response formatting separate from application logic.",
    ],

    integrations: [
        "Stripe",
        "Firebase",
        "Persistent Storage",
    ],

    technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Redis",
        "Docker",
        "Laravel Sanctum",
        "Laravel Queues",
    ],

    liveUrl: "https://api.shoply-ap.me/",
    sourceVisibility: "private",
    featured: true,
    caseStudyAvailable: true,
    }
];