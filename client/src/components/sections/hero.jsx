// may delete this section later
// rn it's on the homepage and it was given to me by replit
import React from "react";
import { Button } from "../ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { client } from "../../services/strapiClient.js";

export default function Hero() {

  const [homepage, setHomepage] = useState(null);
  const [loading, setLoading] = useState(true);

   
  useEffect(() => {
    const fetchHomepage = async () => {
      try {
        const homepage = client.single('homepage');
        const response = await homepage.find();
        setHomepage(response.data);
      } catch (error) {
        console.error('Error fetching homepage:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchHomepage();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!homepage) return <div>No homepage data found</div>;

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {/* {content.headline} <span className="text-primary">{content.headlineBold}</span> */}
              </h1>
              <p className="text-xl text-white/90">
                {/* {content.subheadline} */}
              </p>
              <p></p>
              <Link href="/waitlist">
                <Button className="text-lg px-6 py-6 bg-primary hover:bg-white/90 text-secondary font-semibold rounded-sm border border-primary">
                  {/* {content.callToActionText} */}
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