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
    },
    {
    id: "event-services-marketplace",
    title: "Event Services Marketplace & Ticketing API",

    shortDescription:
        "A Laravel backend prototype for planning occasions by booking halls, transportation, catering, and decoration services, with provider inventories, ratings, internal-balance transactions, and a separate public-event ticketing module.",

    category: "personal",
    kind: "project",

    status: "Functional Prototype",
    role: "Backend Developer",

    problem:
        "Planning an occasion can require coordinating multiple service providers such as halls, transportation, catering, and decoration while keeping bookings, availability, inventory, and costs connected in one workflow.",

    solution:
        "Built a Laravel-based backend that lets clients assemble occasion orders from multiple service providers, while owners manage their services and bookings, with an additional module for public events and ticket purchases.",

    backendWork: [
        "Designed REST-style endpoints for authentication, occasion orders, service discovery, bookings, ratings, and ticket purchases.",
        "Modeled users, halls, cars, restaurants, decorations, inventory items, orders, events, tickets, images, and ratings using Eloquent ORM.",
        "Implemented JWT bearer authentication alongside a partial session-based owner workflow.",
        "Built business rules around hall capacity, occasion category, date availability, account balance, and provider inventory.",
        "Implemented service booking flows and internal balance transfers between clients and service owners.",
        "Added multipart media uploads using Laravel filesystem storage.",
    ],

    highlights: [
        "Multi-provider occasion workflow combining halls, transportation, catering, and decoration services.",
        "Category, capacity, and date-based filtering for service discovery.",
        "Internal account-balance model for bookings and ticket purchases.",
        "Provider inventory and service rating functionality.",
        "Separate public-event listing and ticket-purchase module.",
    ],

    architecture: [
        "Conventional Laravel MVC architecture using routes, controllers, Eloquent models, and MySQL.",
        "JSON API behavior is primarily controller-driven, with business logic and persistence handled directly inside controllers.",
        "Includes a partial Blade and Tailwind CSS interface for service-owner and administrative workflows.",
    ],

    integrations: [
        "Laravel Filesystem Storage",
        "JWT Authentication",
        "SMTP Configuration",
    ],

    technologies: [
        "Laravel 10",
        "PHP",
        "MySQL",
        "Eloquent ORM",
        "JWT Auth",
        "Blade",
        "Tailwind CSS",
        "Vite",
    ],

    sourceVisibility: "private",

    featured: false,
    caseStudyAvailable: true,
    },
    {
    id: "concurrent-order-processing-backend",
    title: "Concurrent Order Processing & Distributed Locking Backend",

    shortDescription:
        "A Laravel concurrency testbed exploring race conditions, database transactions, pessimistic locking, Redis-backed distributed locks, caching, queues, and request distribution across multiple application instances.",

    category: "academic",
    kind: "technical-project",

    status: "Completed Academic Project",
    role: "Backend Developer",

    problem:
        "Concurrent order requests can oversell limited inventory when multiple application instances read and update the same stock without proper coordination.",

    solution:
        "Built multiple order-processing strategies to compare unsafe stock updates, transactional row locking, Redis-backed distributed locking, rollback behavior, caching, and synchronous versus queued background processing.",

    backendWork: [
        "Built product, order, order-item, and invoice persistence using Laravel, Eloquent, and MySQL.",
        "Implemented atomic order processing using database transactions and pessimistic row-level locking.",
        "Implemented Redis-backed distributed locks for coordinating stock updates across multiple application instances.",
        "Added Redis caching with cache warming, hit/miss behavior, TTL handling, and explicit invalidation.",
        "Implemented database-queued jobs for invoice generation, notifications, simulations, and sales-processing workloads.",
        "Containerized three Laravel application instances behind an Nginx load balancer and created PowerShell and k6 concurrency tests.",
    ],

    highlights: [
        "Controlled race-condition and overselling demonstration.",
        "Pessimistic database locking with SELECT ... FOR UPDATE.",
        "Cross-instance distributed locking using Redis.",
        "Three Laravel application instances behind Nginx round-robin load balancing.",
        "Synchronous versus queued background-processing experiments.",
        "PowerShell and k6 stress-testing and cache benchmark tooling.",
    ],

    architecture: [
        "Nginx distributes incoming requests across three Laravel containers.",
        "All Laravel instances share the same MySQL database.",
        "A shared Redis instance provides caching and distributed locking.",
        "Background jobs use Laravel's database queue and require a separately started worker.",
    ],

    technologies: [
        "Laravel 12",
        "PHP",
        "MySQL",
        "Redis",
        "Predis",
        "Nginx",
        "Docker",
        "Docker Compose",
        "k6",
        "PowerShell",
    ],

    githubUrl:
        "https://github.com/Anas-Bassit/High-Performance-E-Commerce-Backend-Engine",

    sourceVisibility: "public",

    featured: false,
    caseStudyAvailable: true,
    },
];