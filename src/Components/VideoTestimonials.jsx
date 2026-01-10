import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";

const reels = [
  {
    id: 1,
    reelUrl: "https://www.instagram.com/reel/DOqDVCTiaF7/",
    embedUrl: "https://www.instagram.com/reel/DOqDVCTiaF7/embed/captioned",
    title: "Dubai Marina Luxury Tour",
    views: "125K",
    username: "@wgg_realestate",
  },
  {
    id: 2,
    reelUrl: "https://www.instagram.com/reel/DLiJXW6yAdy/",
    embedUrl: "https://www.instagram.com/reel/DLiJXW6yAdy/embed/captioned",
    title: "Investment Tips 2025",
    views: "89K",
    username: "@wgg_realestate",
  },
  {
    id: 3,
    reelUrl: "https://www.instagram.com/reel/DHa40wvpZyz/",
    embedUrl: "https://www.instagram.com/reel/DHa40wvpZyz/embed/captioned",
    title: "Premium Properties",
    views: "156K",
    username: "@wgg_realestate",
  },
  {
    id: 4,
    reelUrl: "https://www.instagram.com/reel/DGGF845JoEK/",
    embedUrl: "https://www.instagram.com/reel/DGGF845JoEK/embed/captioned",
    title: "Market Insights",
    views: "94K",
    username: "@wgg_realestate",
  },
];

export default function VideoTestimonials() {
  const [activeReel, setActiveReel] = useState(null);

  // Lock scroll when modal open
  useEffect(() => {
    if (!activeReel) return;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [activeReel]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActiveReel(null);
    if (activeReel) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeReel]);

  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Featured Reels
        </h2>

        {/* GRID (same layout, just a bit tighter on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {reels.map((reel) => (
            <button
              key={reel.id}
              type="button"
              onClick={() => setActiveReel(reel)}
              className="
                relative rounded-2xl overflow-hidden shadow-xl group text-left
                focus:outline-none focus:ring-2 focus:ring-rose-100

                w-full max-w-[240px] mx-auto
                sm:max-w-none sm:mx-0
              "
            >
              {/* SAME CARD DESIGN */}
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/80 bg-zinc-900">
                <iframe
                  src={reel.embedUrl}
                  className="w-full h-full pointer-events-none"
                  style={{
                    border: "none",
                    transform: "scale(1.25) translateY(-8%)",
                    transformOrigin: "center",
                  }}
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media; clipboard-write"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* SAME INFO OVERLAY */}
              <div className="absolute inset-x-0 bottom-0 p-6 pointer-events-none">
                <h3 className="text-sm md:text-base font-semibold line-clamp-1">
                  {reel.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  {reel.views} views
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL (unchanged) */}
      {activeReel && (
        <div className="fixed inset-0 z-[999]">
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setActiveReel(null)}
          />

          <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6">
            <div className="relative w-[min(92vw,420px)] h-[92svh] max-h-[820px] overflow-hidden rounded-xl border border-white/15 shadow-2xl bg-black">
              <button
                type="button"
                onClick={() => setActiveReel(null)}
                className="absolute top-3 right-3 z-20 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm hover:bg-white/15"
              >
                <X className="w-4 h-4" />
                Close
              </button>

              <div className="absolute inset-0 overflow-hidden">
                <iframe
                  key={activeReel.id}
                  src={`${activeReel.embedUrl}?autoplay=1&muted=0`}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    border: "none",
                    transform: "scale(1.42) translateY(-8%)",
                    transformOrigin: "center",
                  }}
                  frameBorder="0"
                  scrolling="no"
                  allow="autoplay; encrypted-media; clipboard-write"
                  allowFullScreen
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <h3 className="text-base font-semibold">{activeReel.title}</h3>

                <a
                  href={activeReel.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm hover:bg-white/15"
                >
                  Open on Instagram
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
