import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-sans">
      {/* Hero Section */}
      <section id="home" className="text-center py-32 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to Your Dream T-Shirt Store
        </h1>
        <p className="text-xl mb-8 drop-shadow">
          Find the perfect fit with our unique and trendy t-shirts.
        </p>
        <Link to="/shoppingPage">
          <button className="bg-white text-pink-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-pink-100 transition">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section id="services" className="bg-white text-gray-900 rounded-t-3xl py-20 px-8 max-w-6xl mx-auto mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-6xl mb-4">👕</div>
            <h3 className="text-2xl font-semibold mb-2">Premium Quality</h3>
            <p>We use 100% organic cotton for a soft and durable feel.</p>
          </div>
          <div>
            <div className="text-6xl mb-4">🚚</div>
            <h3 className="text-2xl font-semibold mb-2">Fast Shipping</h3>
            <p>Get your t-shirts delivered quickly anywhere in the country.</p>
          </div>
          <div>
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-semibold mb-2">Unique Designs</h3>
            <p>Exclusive prints designed by talented artists.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-semibold mb-6">Our Story</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Started with a passion for style and comfort, we aim to deliver the best t-shirts
          that reflect your personality. Every design tells a story, and every shirt feels like home.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white text-gray-900 rounded-b-3xl py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-10">Get in Touch</h2>
        <form className="max-w-xl mx-auto flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white font-bold py-3 rounded hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
