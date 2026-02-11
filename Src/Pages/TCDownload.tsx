import React from "react";
import Layout from "../Components/Layout/Layout";
import { TCDownloadSection } from "../Components/Results/TCAndExamResult";
import heroSchool from "@/Assets/IMG-S-1.jpg";

const TCDownloadPage = () => (
  <Layout>
    {/* Hero Banner */}
    <section className="relative h-64 md:h-80">
      <img src={heroSchool} alt="Transfer Certificate" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transfer Certificate (TC) Download</h1>
          <p className="text-lg opacity-90">Download Your Transfer Certificate</p>
        </div>
      </div>
    </section>

    {/* Content */}
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-6">
          <a
            href="/FakeTC.txt"
            download
            className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg font-semibold shadow hover:bg-primary/90 transition-colors border border-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
            Download TC (TXT)
          </a>
        </div>
        <TCDownloadSection />
      </div>
    </section>
  </Layout>
);

export default TCDownloadPage;
