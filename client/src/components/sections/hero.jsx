// may delete this section later
// rn it's on the homepage and it was given to me by replit
import React from "react";

import { Button } from "../ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Homemade Fresh Dog Food <span className="text-primary">Made Simple</span>
              </h1>
              <p className="text-xl text-white/90">
                Personalized AI-powered recipes and essential nutrition packs for complete, balanced canine diets
              </p>
              <p></p>
              <Link href="/waitlist">
                <Button className="text-lg px-6 py-6 bg-primary hover:bg-white/90 text-secondary font-semibold rounded-sm border border-primary">
                  Join Waitlist
                </Button>
              </Link>
            </div>
            <div className="flex-1">
              <img 
                src="https://plus.unsplash.com/premium_photo-1683141107194-61e40e327e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="woman "
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  };