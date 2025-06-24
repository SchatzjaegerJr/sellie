
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800 px-6 py-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">Sellie – Wir verkaufen für dich</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Du hast Sammlerstücke oder Wertsachen zuhause? Wir übernehmen Bewertung, Verkauf und Abwicklung – damit du dich um nichts kümmern musst.
        </p>
        <a
          href="https://www.instagram.com/deinusername"
          target="_blank"
          className="inline-flex items-center gap-2 text-white bg-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          <Instagram className="w-5 h-5" /> Jetzt auf Instagram starten
        </a>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "1. Foto senden",
            text: "Schick uns ein Bild deines Sammlerstücks über Instagram oder das Formular unten.",
          },
          {
            title: "2. Wir verkaufen für dich",
            text: "Wir erstellen ein Inserat, finden den besten Preis & kümmern uns um die Abwicklung.",
          },
          {
            title: "3. Geld erhalten",
            text: "Nach erfolgreichem Verkauf bekommst du dein Geld – abzüglich 10 % Servicegebühr.",
          },
        ].map((step, idx) => (
          <Card key={idx} className="rounded-2xl shadow-xl bg-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Jetzt Anfrage senden</h2>
        <p className="text-center text-gray-500 mb-6">Fülle das Formular aus oder kontaktiere uns direkt auf Instagram.</p>
        <div className="grid gap-4">
          <Input placeholder="Dein Name" />
          <Input placeholder="Deine E-Mail" />
          <Textarea placeholder="Was möchtest du verkaufen?" rows={4} />
          <Input type="file" />
          <Button className="w-full">Absenden</Button>
        </div>
      </div>

      <footer className="text-sm text-center text-gray-400 border-t pt-6">
        © {new Date().getFullYear()} Sellie. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
