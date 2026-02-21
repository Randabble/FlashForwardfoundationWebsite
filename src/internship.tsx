import React from "react";
import AnimatedNav from "./components/AnimatedNav";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function Internship() {
  const heroRef = useScrollAnimation();
  const tracksRef = useScrollAnimation();
  const structureRef = useScrollAnimation();
  const certificateRef = useScrollAnimation();
  const curriculumRef = useScrollAnimation();
  const applyRef = useScrollAnimation();

  return (
    <div className="font-sans">
      <AnimatedNav />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={heroRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            Flash Forward Internship Program
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            A short, skills-based internship run by Flash Forward to provide hands-on, project work that feeds directly
            into our product and operations. Internships are project-oriented and certificate-eligible if the deliverables
            meet our published standards.
          </p>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-16 bg-white" id="tracks">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 ref={tracksRef} className="text-3xl font-bold text-gray-900 mb-6 text-center">Tracks</h2>
          <p className="text-gray-700 text-center mb-8">
            Each internship focuses on one clear, measurable project aligned with Flash Forward’s mission.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Track 1 */}
            <article className="bg-gray-50 rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Product Design &amp; CAD Engineering</h3>
              <p className="text-gray-700 mb-3"><strong>Primary track.</strong> Works with our hardware team to improve a physical component.</p>

              <h4 className="font-medium text-gray-800">What interns do</h4>
              <ul className="list-disc ml-6 text-gray-700 mb-3">
                <li>Learn parametric CAD in Fusion 360 or Onshape.</li>
                <li>Reverse-engineer our current flashlight housing.</li>
                <li>Improve one measurable constraint: size, durability, assembly time, or material usage.</li>
                <li>Produce a final STL and source file with a short rationale.</li>
              </ul>

              <h4 className="font-medium text-gray-800">Skills taught</h4>
              <ul className="list-disc ml-6 text-gray-700 mb-3">
                <li>Parametric CAD modeling.</li>
                <li>Design for manufacturing and tolerance basics.</li>
                <li>Iteration, version control, and basic part testing.</li>
              </ul>

              <h4 className="font-medium text-gray-800">Deliverables</h4>
              <ul className="list-disc ml-6 text-gray-700">
                <li>One original or modified flashlight component (STL + source file).</li>
                <li>One-page engineering brief explaining choices.</li>
                <li>Assembly diagram or exploded view.</li>
              </ul>
            </article>

            {/* Track 2 */}
            <article className="bg-gray-50 rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Operations &amp; Supply Chain</h3>
              <p className="text-gray-700 mb-3">Make the nonprofit operate more effectively and reduce unit cost and risk.</p>

              <h4 className="font-medium text-gray-800">What interns do</h4>
              <ul className="list-disc ml-6 text-gray-700 mb-3">
                <li>Analyze the parts list and sourcing strategy.</li>
                <li>Compare at least two suppliers per component.</li>
                <li>Calculate cost per unit and shipping tradeoffs.</li>
                <li>Propose a revised bill of materials with savings or reliability improvements.</li>
              </ul>

              <h4 className="font-medium text-gray-800">Skills taught</h4>
              <ul className="list-disc ml-6 text-gray-700 mb-3">
                <li>Cost analysis and spreadsheet modeling.</li>
                <li>Vendor comparison and basic procurement planning.</li>
                <li>Logistics basics and risk assessment.</li>
              </ul>

              <h4 className="font-medium text-gray-800">Deliverables</h4>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Optimized bill of materials.</li>
                <li>Cost comparison spreadsheet.</li>
                <li>Short memo recommending changes.</li>
              </ul>
            </article>

            {/* Track 3 */}
            <article className="bg-gray-50 rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Impact, Data, &amp; Outreach</h3>
              <p className="text-gray-700 mb-3">Optional, with mentor availability. Research and measure program impact.</p>

              <h4 className="font-medium text-gray-800">What interns do</h4>
              <ul className="list-disc ml-6 text-gray-700 mb-3">
                <li>Analyze where Flash Forward distributes units and who benefits.</li>
                <li>Research electricity access and education data linked to our regions.</li>
                <li>Prepare a data-backed impact brief and optional donor-facing report.</li>
              </ul>

              <h4 className="font-medium text-gray-800">Skills taught</h4>
              <ul className="list-disc ml-6 text-gray-700 mb-3">
                <li>Data literacy, sourcing, and synthesis.</li>
                <li>Evidence-based storytelling and ethical reporting.</li>
                <li>Basic visualization and data presentation.</li>
              </ul>

              <h4 className="font-medium text-gray-800">Deliverables</h4>
              <ul className="list-disc ml-6 text-gray-700">
                <li>2–3 page impact report with cited sources.</li>
                <li>Visual chart demonstrating a key finding.</li>
                <li>Optional short blog or donor-facing summary.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-gray-50" id="structure">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 ref={structureRef} className="text-3xl font-bold text-gray-900 mb-6 text-center">Program Structure</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Length</h3>
              <p className="text-gray-700">6–8 weeks. Shorter programs are not accepted because they usually lack enough time for iteration.</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Time Commitment</h3>
              <p className="text-gray-700">3–5 hours per week. Be honest: this is not a part-time job, it is a short, focused contribution.</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Mentorship</h3>
              <p className="text-gray-700">Weekly asynchronous check-ins; one live session per internship. Mentors review progress and give feedback during the program.</p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Evaluation</h3>
            <p className="text-gray-700 mb-3">Completion-based evaluation with a quality threshold. Projects must meet a published rubric and pass mentor review.</p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>All deliverables submitted.</li>
              <li>Deliverables meet the track rubric and minimum quality standard.</li>
              <li>Participant signs consent to let Flash Forward use the deliverables in future work.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="py-16 bg-white" id="certificate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 ref={certificateRef} className="text-3xl font-bold text-gray-900 mb-6 text-center">Certificates</h2>
          <p className="text-gray-700 mb-4 text-center">Certificates are meaningful and verifiable. They are not automatic.</p>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="font-medium text-gray-900 mb-2">Eligibility</h3>
            <p className="text-gray-700">A certificate is issued only if all deliverables are submitted, work meets a published rubric, and the intern agrees Flash Forward may publicly link to the work.</p>

            <h3 className="font-medium text-gray-900 mt-4 mb-2">Certificate contents</h3>
            <ul className="list-disc ml-6 text-gray-700 mb-3">
              <li>Track name and brief description.</li>
              <li>Total hours recorded.</li>
              <li>Verifiable ID or project link.</li>
              <li>Signature by an organization lead.</li>
            </ul>

            <h3 className="font-medium text-gray-900 mt-4 mb-2">Verification</h3>
            <p className="text-gray-700">Each certificate includes a verification link or ID allowing third parties to confirm the certificate on request.</p>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50" id="curriculum">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 ref={curriculumRef} className="text-3xl font-bold text-gray-900 mb-6 text-center">Sample Curriculum — CAD Track</h2>
          <p className="text-gray-700 mb-4 text-center">Example week-by-week structure for Product Design &amp; CAD Engineering.</p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Week 1</h3>
              <p className="text-gray-700">CAD fundamentals and flashlight teardown. Learn the tool and inspect existing parts.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Week 2</h3>
              <p className="text-gray-700">Constraints and measurements: measure and document current parts with a focus on a measurable improvement goal.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Week 3</h3>
              <p className="text-gray-700">First design iteration: create a parametric model and export early STL for review.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Week 4</h3>
              <p className="text-gray-700">Feedback and revision: address mentor feedback and refine tolerances and quality.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Week 5</h3>
              <p className="text-gray-700">Final design and documentation: complete final STL, source file, and one-page brief.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Week 6</h3>
              <p className="text-gray-700">Presentation and submission: deliver the final materials and complete a short presentation or summary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-16 bg-white" id="apply">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 ref={applyRef} className="text-3xl font-bold text-gray-900 mb-6">Apply</h2>
          <p className="text-gray-700 mb-4">We accept students who are honest about their skills and time. Recommendation: basic CAD familiarity for CAD track.</p>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-3">What to expect from the application:</p>
            <ul className="text-gray-700 list-disc ml-6 mb-4 text-left">
              <li>Short motivation question: why you want to join and what you will deliver.</li>
              <li>Checkbox for skills and availability.</li>
              <li>Optional portfolio link or sample work.</li>
            </ul>

            <div className="mt-4">
              <button
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                onClick={() => alert('Application placeholder: integrate form or external sheet here')}
              >
                Apply Now (placeholder)
              </button>
            </div>

            <p className="text-gray-500 text-sm mt-4">We'll contact selected applicants within two weeks of the application deadline. No automatic certificate: completion and quality-based only.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
