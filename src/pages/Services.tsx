import React from 'react';
import { Lightbulb, Cog, Network, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            Transforming businesses through intelligent automation and AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: "Strategy Development",
                desc: "We transform business visions into actionable roadmaps powered by AI. Our strategic development process dives deep into your operations, identifying critical opportunities where intelligent automation can create the most impact.",
                points: [
                  "Deep operational analysis",
                  "AI opportunity identification",
                  "Custom strategy development",
                  "Future-ready planning"
                ]
              },
              {
                icon: <Cog className="w-12 h-12" />,
                title: "Process Automation",
                desc: "We transform manual workflows into intelligent systems that scale. Our custom automation solutions eliminate operational bottlenecks, streamline complex processes, and free your team to focus on strategic growth.",
                points: [
                  "Workflow automation",
                  "Intelligent systems design",
                  "Operational streamlining",
                  "Scalable solutions"
                ]
              },
              {
                icon: <Network className="w-12 h-12" />,
                title: "Intelligent Integration",
                desc: "We seamlessly connect your existing systems with advanced AI capabilities. Our integration solutions ensure your technology ecosystem works in perfect harmony, enabling smooth data flow and enhanced decision-making.",
                points: [
                  "System interconnectivity",
                  "AI capability integration",
                  "Data flow optimization",
                  "Future-ready infrastructure"
                ]
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Performance Optimization",
                desc: "We continuously enhance your automated systems for peak performance. Through advanced analytics and AI-driven insights, we identify optimization opportunities and implement improvements that drive better results.",
                points: [
                  "Continuous monitoring",
                  "AI-driven analytics",
                  "Performance enhancement",
                  "ROI maximization"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3">
                  {service.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Analyze", desc: "Deep dive into your current operations" },
              { number: "02", title: "Design", desc: "Create custom AI-powered solutions" },
              { number: "03", title: "Implement", desc: "Deploy and integrate seamlessly" },
              { number: "04", title: "Optimize", desc: "Continuously improve performance" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-powered services can help automate and optimize your operations.
          </p>
          <Link to="/contact" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}