export default function Gallery() {
    return (
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
        <p className="mb-6">Koleksi foto galaksi, bintang, dan planet hasil tangkapan NASA & teleskop.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 p-2 rounded">[Image 1]</div>
          <div className="bg-white/10 p-2 rounded">[Image 2]</div>
          <div className="bg-white/10 p-2 rounded">[Image 3]</div>
          <div className="bg-white/10 p-2 rounded">[Image 4]</div>
        </div>
      </section>
    );
  }
  