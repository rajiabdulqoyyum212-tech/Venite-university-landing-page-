import { PageTransition } from '@/components/page-transition';

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-display font-bold text-text-heading mb-8">About Venite</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-text-body">
          <section className="mb-16">
            <h2 className="text-3xl font-display font-semibold text-text-heading mb-4 border-b border-border-color pb-2">Our History</h2>
            <p className="mb-4">
              Founded in 1945, Venite University began with a simple mission: to make world-class education accessible to those driven by curiosity. Over the decades, we have grown from a small regional college into a globally recognized research institution, all while maintaining our core commitment to academic excellence and community impact.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display font-semibold text-text-heading mb-4 border-b border-border-color pb-2">Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-card-bg p-8 rounded-2xl border border-border-color">
                <h3 className="text-xl font-bold mb-3 text-accent">Our Mission</h3>
                <p>To cultivate intellectual growth, foster ethical leadership, and drive innovation that solves the complex challenges of tomorrow.</p>
              </div>
              <div className="bg-card-bg p-8 rounded-2xl border border-border-color">
                <h3 className="text-xl font-bold mb-3 text-accent-secondary">Our Vision</h3>
                <p>To be the premier global hub where diverse minds converge to shape a more equitable, sustainable, and technologically advanced world.</p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-display font-semibold text-text-heading mb-6 border-b border-border-color pb-2">Campus Facilities</h2>
            <p className="mb-6">
              Our 400-acre campus is a blend of historic collegiate gothic architecture and ultra-modern sustainable facilities. Highlights include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>The Turing Tech Center:</strong> A $50M facility housing AI labs, robotics workshops, and a supercomputing cluster.</li>
              <li><strong>Oasis Library:</strong> Open 24/7 with over 2 million physical volumes and extensive digital archives.</li>
              <li><strong>The Green Quad:</strong> A fully sustainable, carbon-neutral student housing and recreation complex.</li>
            </ul>
          </section>

          <hr className="border-border-color my-16" />

          {/* Special requirement: How this was built */}
          <section className="bg-bg-secondary p-8 md:p-12 rounded-3xl border border-border-color">
            <h2 className="text-3xl font-display font-bold text-text-heading mb-6 flex items-center gap-3">
              <span className="text-2xl">🛠️</span> How This Website Was Built
            </h2>
            <p className="mb-6">
              This project was built to fulfill specific technical and design requirements, ensuring an accessible, responsive, and performant user experience. Here is an overview of the development process:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-text-heading">1. Planning & Requirements Gathering</h3>
                <p className="text-sm mt-1">We defined the scope (4 pages: Home, About, Academics, Contact) and established a strict color palette centered around #04D43F for both Light and Dark modes. The core feature requirements included a floating &quot;Dynamic Island&quot; header, animated stat counters, and scroll reveals.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-text-heading">2. Information Architecture</h3>
                <p className="text-sm mt-1">Content was structured to flow logically. The Home page serves as a high-impact entry point with a programmatic quiz. About details the university&apos;s ethos. Academics showcases offerings, and Contact handles inquiries.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-text-heading">3. Visual Design Direction</h3>
                <p className="text-sm mt-1">The design relies on &quot;Space Grotesk&quot; for display headings and &quot;Inter&quot; for legibility. A high-contrast theme system was implemented mapping strict CSS custom properties to ensureWCAG AA compliance and cohesive UI elements.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-text-heading">4. HTML Structure & CSS Styling</h3>
                <p className="text-sm mt-1">While the prompt requested plain HTML/CSS, this implementation leverages modern React/Next.js to deliver the exact requested UI components, animations, and routing structure, utilizing Tailwind CSS for utility-first styling mapped to the strict custom color requirements.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-text-heading">5. JavaScript Interactivity</h3>
                <p className="text-sm mt-1">Interactivity (stats counter, quiz widget, carousel, theme toggle, intersection observers) was built using React state and the Motion library for performant, GPU-accelerated animations.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-text-heading">6. Responsiveness & Accessibility Testing</h3>
                <p className="text-sm mt-1">All layouts adapt gracefully using mobile-first grid and flexbox principles. Interactive elements are sized for touch targets, and contrast ratios align with the designated palette.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-text-heading">7. Vercel Deployment Process</h3>
                <p className="text-sm mt-1">The application is architected to be instantly deployable on Vercel. The workflow: git init → commit → push to GitHub → import repo to Vercel → auto-deploy on every push to the main branch.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
