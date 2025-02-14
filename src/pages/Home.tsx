import React from 'react';
import { ArrowRight, BarChart3, Brain, Building2, ChevronRight, Globe2, Laptop2, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-6">
                AI-Powered Business Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Operations with Intelligent Automation
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We help businesses reduce operational costs by up to 40% through strategic AI implementation and intelligent process automation. Join over 500+ companies already benefiting from our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full flex items-center justify-center group"
                >
                  Start Your Journey 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border border-white hover:bg-white/10 px-8 py-3 rounded-full text-center transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-300">40%</div>
                  <div className="text-sm text-blue-200">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300">500+</div>
                  <div className="text-sm text-blue-200">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300">95%</div>
                  <div className="text-sm text-blue-200">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-lg blur-lg"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-8">
                  <div className="grid gap-6">
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <Brain className="w-8 h-8 text-blue-300 mb-3" />
                      <h3 className="font-semibold mb-1">AI-Powered Analytics</h3>
                      <p className="text-sm text-blue-100">Real-time insights for smarter decisions</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <Laptop2 className="w-8 h-8 text-blue-300 mb-3" />
                      <h3 className="font-semibold mb-1">Process Automation</h3>
                      <p className="text-sm text-blue-100">Streamline operations with intelligent workflows</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <BarChart3 className="w-8 h-8 text-blue-300 mb-3" />
                      <h3 className="font-semibold mb-1">Performance Optimization</h3>
                      <p className="text-sm text-blue-100">Maximize efficiency and ROI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine industry expertise with innovative technology to deliver transformative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Brain className="w-8 h-8" />, title: "AI-Powered Analytics", desc: "Leverage machine learning for deeper insights" },
              { icon: <Globe2 className="w-8 h-8" />, title: "Global Reach", desc: "Connect with customers worldwide" },
              { icon: <Users2 className="w-8 h-8" />, title: "Expert Team", desc: "Work with industry-leading professionals" },
              { icon: <BarChart3 className="w-8 h-8" />, title: "Data-Driven", desc: "Make informed decisions with real-time data" },
              { icon: <Laptop2 className="w-8 h-8" />, title: "Modern Platform", desc: "Built with cutting-edge technology" },
              { icon: <Building2 className="w-8 h-8" />, title: "Enterprise Ready", desc: "Scalable solutions for any size business" },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies already innovating with our solutions.
          </p>
          <Link to="/contact" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full inline-flex items-center">
            Get Started Now <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}