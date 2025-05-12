import { playfair } from "@/lib/fonts";

export const AboutUs = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-lg leading-relaxed">
      <h1 className={`${playfair.className} text-3xl font-bold mb-4`}>About Us</h1>
      <p className="mb-4">
        Welcome to your perfect countryside escape! 🏡
      </p>
      <p className="mb-4">
        Tucked away in the heart of <strong>Brezane</strong>, a charming village near Požarevac, our wooden <strong>A-frame house</strong> is more than just a place to stay—it’s a peaceful retreat built with love by the <strong>Stefanović family</strong>. We opened our doors in <strong>May 2025</strong>, and ever since, we've been sharing our little slice of paradise with guests looking to unwind, unplug, and enjoy nature’s simplicity.
      </p>
      <p className="mb-4">
        Our home is where rustic charm meets modern comfort. Surrounded by greenery and fresh village air, the property offers everything you need for an unforgettable stay:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>A <strong>swimming pool</strong> for sunny days ☀️</li>
        <li>A cozy <strong>patio</strong> and fully-equipped <strong>garden kitchen</strong></li>
        <li>A <strong>barbecue area</strong> and a traditional Serbian <em>ražanj</em> (rotisserie grill) 🍖</li>
        <li>A <strong>fire pit</strong> for starlit storytelling 🔥</li>
        <li>A fun-filled <strong>playground</strong> for the little ones</li>
        <li>A <strong>large backyard</strong> with <strong>cornhole</strong>, <strong>picado</strong>, and plenty of space for relaxing 🌳</li>
        <li><strong>Pet-friendly!</strong> Because vacations are better with furry friends 🐾</li>
      </ul>
      <p className="mb-4">
        Whether you're celebrating, recharging, or just escaping the city buzz, our home is your home.
      </p>
      <p className="mb-4">
        And if you're up for a mountain adventure, we’ve got you covered there too! The <strong>Stefanović family</strong> also owns a beautiful apartment in <strong>Zlatibor</strong>, one of Serbia’s most popular mountain destinations—ideal for winter getaways or summer hiking trips.
      </p>
      <p className="mb-4">
        We're a <strong>family-owned business</strong>, and we take pride in creating a cozy and welcoming atmosphere for every guest. No big corporations, just genuine Serbian hospitality and the joy of sharing what we’ve built with you.
      </p>
      <p className="mb-4">
        We can’t wait to welcome you to Brezane. Come as guests, leave as friends! 💛
      </p>
    </div>
  );
}
