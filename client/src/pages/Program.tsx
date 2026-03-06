import { motion } from "framer-motion";

export default function Program() {
  return (
    <div>
      <section className="pt-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl font-bold tracking-tight mb-2">Program</h1>
            <h2 className="text-xl text-muted-foreground">Data-Driven Storytelling (DDS 2026)</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary border-b pb-4">Program</h1>
            <p className="text-lg mb-12">
              Proceedings: <span className="text-muted-foreground">To be published via CEUR Workshop Proceedings</span>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Workshop Schedule</h2>
            
            <div className="bg-white rounded-lg border overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold w-24 align-top">10'</td>
                    <td className="p-4">Workshop welcome and introduction</td>
                  </tr>
                  <tr className="border-b bg-primary/5">
                    <td className="p-4 font-semibold align-top">30'</td>
                    <td className="p-4">
                      <div className="font-bold">Keynote / Invited talk</div>
                      <div className="text-muted-foreground italic mt-1">Speaker TBA</div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold align-top">1h</td>
                    <td className="p-4 font-bold">Paper presentations</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-4 font-semibold align-top">30'</td>
                    <td className="p-4 text-muted-foreground">Coffee break</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold align-top">1h</td>
                    <td className="p-4 font-bold">Paper presentations</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold align-top">10'</td>
                    <td className="p-4">Wrap up</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
