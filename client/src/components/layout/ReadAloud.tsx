import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Pause, Play, SkipForward, X, ChevronDown } from "lucide-react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "Workshop Description" },
  { id: "topics", label: "Topics of Interest" },
  { id: "guidelines", label: "Submission Guidelines" },
  { id: "dates", label: "Important Dates" },
  { id: "program", label: "Workshop Program" },
  { id: "venue", label: "Venue" },
  { id: "organizers", label: "Organizers" },
  { id: "committee", label: "Program Committee" },
];

function getTextFromSection(id: string): string {
  const el = document.getElementById(id);
  if (!el) return "";

  const clone = el.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("iframe, img, svg, button, input, [aria-hidden='true'], .sr-only, nav").forEach((n) => n.remove());

  let text = clone.innerText || clone.textContent || "";
  text = text.replace(/\s+/g, " ").trim();
  return text;
}

export default function ReadAloud() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [rate, setRate] = useState(1);
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const voiceInitialized = useRef(false);

  useEffect(() => {
    if (!window.speechSynthesis) {
      setSupported(false);
      return;
    }

    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      const english = v.filter((voice) => voice.lang.startsWith("en"));
      setVoices(english.length > 0 ? english : v);
      if (!voiceInitialized.current && english.length > 0) {
        const preferred = english.find((voice) => voice.name.includes("Google") || voice.name.includes("Natural")) || english[0];
        setSelectedVoice(preferred.name);
        voiceInitialized.current = true;
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speak = useCallback((sectionIndex: number) => {
    window.speechSynthesis.cancel();

    const section = SECTIONS[sectionIndex];
    const text = getTextFromSection(section.id);

    if (!text) {
      if (sectionIndex < SECTIONS.length - 1) {
        setCurrentSection(sectionIndex + 1);
        speak(sectionIndex + 1);
      } else {
        setIsPlaying(false);
        setIsPaused(false);
      }
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1;

    if (selectedVoice) {
      const voice = voices.find((v) => v.name === selectedVoice);
      if (voice) utterance.voice = voice;
    }

    utterance.onend = () => {
      if (sectionIndex < SECTIONS.length - 1) {
        const next = sectionIndex + 1;
        setCurrentSection(next);
        speak(next);
      } else {
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentSection(0);
      }
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    setIsPlaying(true);
    setIsPaused(false);
    window.speechSynthesis.speak(utterance);
  }, [rate, selectedVoice, voices]);

  const handlePlay = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      speak(currentSection);
    }
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentSection(0);
  };

  const handleSkip = () => {
    window.speechSynthesis.cancel();
    const next = currentSection < SECTIONS.length - 1 ? currentSection + 1 : 0;
    setCurrentSection(next);
    if (isPlaying || isPaused) {
      speak(next);
    }
  };

  const handleSectionClick = (index: number) => {
    window.speechSynthesis.cancel();
    setCurrentSection(index);
    speak(index);
  };

  if (!supported) return null;

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary print:hidden"
            data-testid="button-read-aloud-open"
            aria-label="Open read aloud panel"
          >
            <Volume2 className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 left-8 z-40 w-80 bg-card border rounded-2xl shadow-2xl overflow-hidden print:hidden"
            role="region"
            aria-label="Read aloud controls"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4" />
                <span className="font-bold text-sm">Read Aloud</span>
              </div>
              <button
                onClick={() => { handleStop(); setIsOpen(false); }}
                className="p-1 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Close read aloud panel"
                data-testid="button-read-aloud-close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Now reading</div>
                <div className="relative">
                  <select
                    value={currentSection}
                    onChange={(e) => {
                      const idx = Number(e.target.value);
                      setCurrentSection(idx);
                      if (isPlaying || isPaused) handleSectionClick(idx);
                    }}
                    className="w-full appearance-none bg-secondary/50 border rounded-xl px-4 py-2.5 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50"
                    data-testid="select-read-section"
                    aria-label="Select section to read"
                  >
                    {SECTIONS.map((s, i) => (
                      <option key={s.id} value={i}>{s.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                {isPlaying ? (
                  <button
                    onClick={handlePause}
                    className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                    data-testid="button-read-pause"
                    aria-label="Pause reading"
                  >
                    <Pause className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handlePlay}
                    className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                    data-testid="button-read-play"
                    aria-label={isPaused ? "Resume reading" : "Start reading"}
                  >
                    <Play className="w-5 h-5 ml-0.5" />
                  </button>
                )}
                <button
                  onClick={handleStop}
                  className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-secondary/80 transition-colors"
                  data-testid="button-read-stop"
                  aria-label="Stop reading"
                >
                  <VolumeX className="w-4 h-4" />
                </button>
                <button
                  onClick={handleSkip}
                  className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-secondary/80 transition-colors"
                  data-testid="button-read-skip"
                  aria-label="Skip to next section"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              <div aria-live="polite" className="flex items-center gap-2 min-h-[1.25rem]">
                {(isPlaying || isPaused) && (
                  <>
                    <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
                    <span className="text-xs text-muted-foreground">
                      {isPlaying ? "Reading" : "Paused"} — {SECTIONS[currentSection].label}
                    </span>
                  </>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-muted-foreground">Speed</span>
                  <span className="text-xs font-mono text-muted-foreground">{rate.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-primary h-1.5"
                  data-testid="slider-read-speed"
                  aria-label="Reading speed"
                />
              </div>

              {voices.length > 1 && (
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-1">Voice</div>
                  <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="w-full appearance-none bg-secondary/50 border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/50"
                    data-testid="select-read-voice"
                    aria-label="Select reading voice"
                  >
                    {voices.map((v) => (
                      <option key={v.name} value={v.name}>
                        {v.name} ({v.lang})
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
