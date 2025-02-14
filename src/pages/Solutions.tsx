import React from 'react';
import { Brain, BarChart3, Code, Database, Shield, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl text-gray-600">
            Comprehensive technology solutions designed to drive your business forward.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "AI & Machine Learning",
                desc: "Harness the power of artificial intelligence to automate processes and gain valuable insights.",
                features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Decision Making"]
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Data Analytics",
                desc: "Transform your raw data into actionable insights with our advanced analytics solutions.",
                features: ["Business Intelligence", "Real-time Analytics", "Data Visualization", "Performance Metrics"]
              },
              {
                icon: <Code className="w-12 h-12" />,
                title: "Custom Development",
                desc: "Tailored software solutions built to address your specific business needs.",
                features: ["Web Applications", "Mobile Apps", "API Integration", "Legacy System Modernization"]
              },
              {
                icon: <Database className="w-12 h-12" />,
                title: "Data Management",
                desc: "Comprehensive data solutions for storage, processing, and optimization.",
                features: ["Data Warehousing", "ETL Services", "Database Optimization", "Data Governance"]
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Cybersecurity",
                desc: "Protect your business with enterprise-grade security solutions.",
                features: ["Threat Detection", "Security Audits", "Compliance", "Identity Management"]
              },
              {
                icon: <Cloud className="w-12 h-12" />,
                title: "Cloud Services",
                desc: "Scale your infrastructure with reliable and secure cloud solutions.",
                features: ["Cloud Migration", "Hybrid Cloud", "Cloud Security", "Performance Optimization"]
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.desc}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help transform your business and drive growth.
          </p>
          <Link to="/contact" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}