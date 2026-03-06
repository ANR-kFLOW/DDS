import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

export default function Venue() {
  return (
    <section className="py-24 bg-white" id="venue">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Venue</h2>
            <p className="text-xl text-muted-foreground">Join us in the beautiful city of Bari, in the south of Italy.</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-stretch">
            <div className="md:col-span-2 flex flex-col justify-center">
              <div className="bg-secondary/20 p-8 rounded-3xl border h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">The Nicolaus Hotel</h3>
                  <p className="text-muted-foreground mb-2">Via Cardinale Agostino Ciasca, 27</p>
                  <p className="text-muted-foreground mb-6">70124 Bari BA, Italy</p>
                  <p className="text-foreground/80 leading-relaxed mb-8">
                    Located in the heart of Bari, The Nicolaus Hotel offers modern conference facilities and is easily accessible from Bari Karol Wojtyła Airport and the central train station.
                  </p>
                </div>
                <a 
                  href="https://www.google.com/maps/place/The+Nicolaus+Hotel/@41.0982,16.8724,15z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="md:col-span-3 rounded-3xl overflow-hidden border shadow-sm min-h-[400px]">
              <iframe
                title="The Nicolaus Hotel, Bari"
                src="https://www.openstreetmap.org/export/embed.html?bbox=16.865%2C41.094%2C16.880%2C41.102&layer=mapnik&marker=41.0982%2C16.8724"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
