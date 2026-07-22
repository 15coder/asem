import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaSnapchatGhost,
  FaFacebookF,
  FaLink,
  FaChevronDown,
  FaExternalLinkAlt,
  FaSun,
  FaMoon,
} from 'react-icons/fa';
import Iridescence from '@/components/Iridescence';

const queryClient = new QueryClient();

const socialLinks = [
  { icon: FaTiktok,       href: 'https://www.tiktok.com/@asim_almarri',                                               label: 'تيك توك — عاصم سالم بن هلابي',  title: 'تابعني على تيك توك'            },
  { icon: FaYoutube,      href: 'https://youtube.com/@asim_almarri?si=6BUva45kHAkHEdVp',                              label: 'يوتيوب — عاصم سالم بن هلابي',   title: 'اشترك في قناتي على يوتيوب'     },
  { icon: FaInstagram,    href: 'https://www.instagram.com/asim_almarri?igsh=MWt0enQxNXE1a2VsMQ==',                  label: 'إنستغرام — عاصم سالم بن هلابي', title: 'تابعني على إنستغرام'            },
  { icon: FaSnapchatGhost,href: 'https://www.snapchat.com/add/asim.almarri?share_id=X21Fe0HjMYE&locale=en-US',        label: 'سناب شات — عاصم سالم بن هلابي', title: 'أضفني على سناب شات'             },
  { icon: FaLink,         href: 'https://share.upscrolled.com/ar/user/33059a56-7606-4aee-bef3-f397f7263bde/',         label: 'Upscrolled — عاصم سالم بن هلابي',title: 'تابعني على Upscrolled'          },
  { icon: FaFacebookF,    href: 'https://www.facebook.com/asim.almarri',                                              label: 'فيسبوك — عاصم سالم بن هلابي',   title: 'تابعني على فيسبوك'              },
];

/* ─── theme tokens ─── */
const themes = {
  light: {
    bg:          '#f5f1ec',
    irisColor:   [0.55, 0.35, 0.85] as [number,number,number],
    overlay:     'from-[#f5f1ec]/20 via-[#f5f1ec]/45 to-[#f5f1ec]',
    sectionBg:   'bg-[#f5f1ec]',
    name:        'text-[#1a1020]',
    role:        'text-purple-600/80',
    tagline:     'text-[#1a1020]/55',
    taglineLine: 'to-purple-400/50',
    scrollText:  'text-[#1a1020]/30',
    iconBg:      'bg-black/[0.04] border-black/10 hover:border-purple-500/50',
    iconColor:   'text-[#1a1020]/60 group-hover:text-[#1a1020]',
    iconOverlay: 'bg-black/[0.03] group-hover:bg-black/[0.01]',
    cardBg:      'bg-white/60 border-black/[0.06]',
    cardH2:      'text-[#1a1020]',
    cardP:       'text-[#1a1020]/60',
    footerBorder:'border-black/8',
    footerCopy:  'text-[#1a1020]/30',
    footerLabel: 'text-[#1a1020]/25',
    devBtn:      'border-black/10 bg-black/[0.03] text-[#1a1020]/50 hover:border-purple-500/40 hover:text-[#1a1020]/80',
    toggleBg:    'bg-black/[0.06] border-black/10 hover:bg-black/[0.1]',
    toggleIcon:  'text-[#1a1020]/60',
    selection:   'selection:bg-purple-400/25',
  },
  dark: {
    bg:          '#0a0a0f',
    irisColor:   [0.15, 0.05, 0.3] as [number,number,number],
    overlay:     'from-[#0a0a0f]/30 via-[#0a0a0f]/50 to-[#0a0a0f]',
    sectionBg:   'bg-[#0a0a0f]',
    name:        'text-white',
    role:        'text-purple-300/80',
    tagline:     'text-white/60',
    taglineLine: 'to-purple-500/50',
    scrollText:  'text-white/35',
    iconBg:      'bg-white/5 border-white/10 hover:border-purple-500/50',
    iconColor:   'text-white/70 group-hover:text-white',
    iconOverlay: 'bg-black/40 group-hover:bg-black/20',
    cardBg:      'bg-white/[0.02] border-white/[0.05]',
    cardH2:      'text-white',
    cardP:       'text-white/70',
    footerBorder:'border-white/5',
    footerCopy:  'text-white/35',
    footerLabel: 'text-white/30',
    devBtn:      'border-white/10 bg-white/[0.03] text-white/60 hover:border-purple-500/40 hover:text-white/90',
    toggleBg:    'bg-white/8 border-white/10 hover:bg-white/15',
    toggleIcon:  'text-white/70',
    selection:   'selection:bg-purple-500/30',
  },
} as const;

type Theme = keyof typeof themes;

function Home() {
  const [theme, setTheme] = useState<Theme>('light');
  const t = themes[theme];
  const isDark = theme === 'dark';

  return (
    <div
      className={`relative min-h-screen font-sans overflow-x-hidden transition-colors duration-500 ${t.selection}`}
      style={{ backgroundColor: t.bg }}
    >
      {/* ── Fixed Iridescence Background ── */}
      <div className="fixed inset-0 z-0 transition-opacity duration-500" aria-hidden="true">
        <Iridescence
          color={t.irisColor}
          speed={isDark ? 0.8 : 0.6}
          amplitude={0.12}
          mouseReact
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${t.overlay} transition-all duration-500`} />
      </div>

      {/* ── Theme Toggle Button (fixed top-left) ── */}
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={isDark ? 'التبديل إلى الوضع النهاري' : 'التبديل إلى الوضع الليلي'}
        title={isDark ? 'الوضع النهاري' : 'الوضع الليلي'}
        className={`fixed top-5 left-5 z-50 flex items-center justify-center w-10 h-10 rounded-full border backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 ${t.toggleBg}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0,   scale: 1   }}
            exit={{    opacity: 0, rotate:  30, scale: 0.7 }}
            transition={{ duration: 0.25 }}
            className={`text-base ${t.toggleIcon}`}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </motion.span>
        </AnimatePresence>
      </button>

      {/* ── Main content ── */}
      <main className="relative z-10">

        {/* ── Hero ── */}
        <section
          aria-label="بطاقة التعريف"
          className="min-h-screen flex flex-col items-center justify-center relative px-6 py-16"
        >
          <div className="text-center max-w-3xl mx-auto w-full flex flex-col items-center">

            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="relative mb-7"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-400 to-pink-400 blur-xl opacity-35 scale-110 transition-opacity duration-500"
                aria-hidden="true"
              />
              {/* Gradient ring */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-indigo-400 to-pink-400 shadow-lg">
                <img
                  src="/asim-photo.jpg"
                  alt="عاصم سالم بن هلابي — صانع محتوى رقمي"
                  className="w-full h-full rounded-full object-cover object-center"
                  width="192"
                  height="192"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`text-sm md:text-base font-light tracking-widest mb-3 transition-colors duration-500 ${t.role}`}
            >
              صانع محتوى رقمي
            </motion.p>

            {/* Name h1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className={`font-daken text-5xl sm:text-6xl md:text-7xl mb-4 leading-[1.25] drop-shadow-lg transition-colors duration-500 ${t.name}`}
            >
              عاصم سالم بن هلابي
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className={`text-sm md:text-lg font-light mb-7 flex items-center justify-center gap-4 transition-colors duration-500 ${t.tagline}`}
            >
              <span className={`w-8 h-px bg-gradient-to-r from-transparent ${t.taglineLine} hidden md:block`} aria-hidden="true" />
              أؤمن أن التفاصيل تُحدث الفرق!
              <span className={`w-8 h-px bg-gradient-to-l from-transparent ${t.taglineLine} hidden md:block`} aria-hidden="true" />
            </motion.p>

            {/* Social Links */}
            <motion.nav
              aria-label="روابط التواصل الاجتماعي"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.title}
                  className={`group relative flex items-center justify-center w-11 h-11 rounded-full border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${t.iconBg}`}
                >
                  <div className="absolute inset-[-3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-md mix-blend-screen" aria-hidden="true" />
                  <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${t.iconOverlay}`} aria-hidden="true" />
                  <social.icon className={`relative z-10 text-base transition-all duration-300 group-hover:scale-110 ${t.iconColor}`} aria-hidden="true" />
                </a>
              ))}
            </motion.nav>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors duration-500 ${t.scrollText}`}
            aria-hidden="true"
          >
            <span className="text-xs tracking-widest font-light">اكتشف المزيد</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
              <FaChevronDown className="text-sm opacity-60" />
            </motion.div>
          </motion.div>
        </section>

        {/* ── About Section ── */}
        <section
          id="about"
          aria-label="نبذة عن عاصم سالم بن هلابي"
          className={`relative py-28 px-6 flex justify-center z-20 transition-colors duration-500 ${t.sectionBg}`}
        >
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl w-full"
          >
            <div className={`relative p-10 md:p-16 rounded-3xl border shadow-xl overflow-hidden group transition-colors duration-500 ${t.cardBg}`}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" aria-hidden="true" />
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] group-hover:bg-purple-500/10 transition-colors duration-1000" aria-hidden="true" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] group-hover:bg-indigo-500/10 transition-colors duration-1000" aria-hidden="true" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <h2 className={`font-daken text-4xl md:text-5xl lg:text-6xl mb-8 transition-colors duration-500 ${t.cardH2}`}>من أنا؟</h2>
                <p className={`text-xl md:text-2xl leading-relaxed md:leading-[2] font-light max-w-3xl transition-colors duration-500 ${t.cardP}`}>
                  صانع محتوى رقمي شغوف بالتفاصيل الصغيرة التي تصنع الفارق الكبير.
                  أؤمن أن كل محتوى يحمل رسالة، وأن الإبداع لا حدود له.
                </p>
              </div>
            </div>
          </motion.article>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer
        className={`py-12 text-center border-t relative z-20 transition-colors duration-500 ${t.sectionBg} ${t.footerBorder}`}
        aria-label="تذييل الصفحة"
      >
        <p className={`text-sm mb-6 transition-colors duration-500 ${t.footerCopy}`}>
          <small>© {new Date().getFullYear()} عاصم سالم بن هلابي. جميع الحقوق محفوظة.</small>
        </p>
        <div className="flex flex-col items-center gap-2">
          <p className={`text-xs mb-1 transition-colors duration-500 ${t.footerLabel}`}>تصميم وبرمجة</p>
          <a
            href="https://needaa.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            title="زيارة موقع المبرمج نداء الرحمن عبود"
            className={`group inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm transition-all duration-300 hover:-translate-y-0.5 ${t.devBtn}`}
          >
            <span>نداء الرحمن عبود</span>
            <FaExternalLinkAlt className="text-[10px] opacity-50 group-hover:opacity-80 transition-opacity" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="*" component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
