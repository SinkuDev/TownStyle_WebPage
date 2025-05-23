import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-pink-600 text-white py-16 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">About Our Company</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Passionate about style, committed to quality, and dedicated to you.
        </p>
      </header>

      {/* Company Story Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 border-b-4 border-pink-600 inline-block pb-1">
          Our Story
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Founded in 2023, <strong>MyBrand</strong> began as a small team of creatives
          who wanted to revolutionize the t-shirt shopping experience. We believe clothing
          should not just be about fashion, but about expressing individuality and comfort.
          That’s why we design every shirt with care, using premium materials that last and
          prints that speak to you.
        </p>
        <p className="text-lg leading-relaxed">
          Our journey started with a simple idea — making quality t-shirts accessible,
          stylish, and sustainable. Today, we continue this mission with love and innovation,
          serving thousands of happy customers worldwide.
        </p>
      </section>

      {/* Business Philosophy Section */}
      <section className="bg-white shadow-lg rounded-lg max-w-5xl mx-auto px-6 py-16 mb-20">
        <h2 className="text-3xl font-semibold mb-6 border-b-4 border-pink-600 inline-block pb-1">
          Our Philosophy
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          At <strong>MyBrand</strong>, business is more than transactions — it’s about
          building relationships. We view our customers as partners on a journey of self-expression
          and confidence. Your satisfaction drives every decision we make.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          We focus on transparency, quality, and community. From ethical sourcing of materials
          to responsive customer support, we are dedicated to making you feel valued and heard.
        </p>
        <p className="text-lg leading-relaxed">
          Our online shop is your gateway to discovering exclusive designs that resonate
          with your personality — and every purchase supports independent artists and sustainable practices.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="text-center max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to express yourself with the perfect tee?
        </h2>
        <a
          href="/shop"
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-700 transition"
        >
          Visit Our Shop
        </a>
      </section>

     
    </div>
  )
}

export default About