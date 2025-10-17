export default function Features() {
    const features = [
      { title: "Data-Driven Growth", desc: "Use analytics to scale smarter." },
      { title: "Marketing Automation", desc: "Streamline campaigns efficiently." },
      { title: "Creative Strategy", desc: "Craft experiences that convert." },
    ];
  
    return (
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl mb-10">Your Strategic Partner</h2>
        <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition">
              <h3 className="text-2xl mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  