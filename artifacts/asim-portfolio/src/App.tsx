import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { motion } from 'framer-motion';
import { 
  FaTiktok, 
  FaYoutube, 
  FaInstagram, 
  FaSnapchatGhost, 
  FaFacebookF, 
  FaLink, 
  FaChevronDown 
} from 'react-icons/fa';
import Iridescence from '@/components/Iridescence';

const queryClient = new QueryClient();

const socialLinks = [
  {
    icon: FaTiktok,
    href: 'https://www.tiktok.com/@asim_almarri',
    label: 'تيك توك — عاصم سالم بن هلابي',
    title: 'تابعني على تيك توك'
  },
  {
    icon: FaYoutube,
    href: 'https://youtube.com/@asim_almarri?si=6BUva45kHAkHEdVp',
    label: 'يوتيوب — عاصم سالم بن هلابي',
    title: 'اشترك في قناتي على يوتيوب'
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/asim_almarri?igsh=MWt0enQxNXE1a2VsMQ==',
    label: 'إنستغرام — عاصم سالم بن هلابي',
    title: 'تابعني على إنستغرام'
  },
  {
    icon: FaSnapchatGhost,
    href: 'https://www.snapchat.com/add/asim.almarri?share_id=X21Fe0HjMYE&locale=en-US',
    label: 'سناب شات — عاصم سالم بن هلابي',
    title: 'أضفني على سناب شات'
  },
  {
    icon: FaLink,
    href: 'https://share.upscrolled.com/ar/user/33059a56-7606-4aee-bef3-f397f7263bde/',
    label: 'Upscrolled — عاصم سالم بن هلابي',
    title: 'تابعني على Upscrolled'
  },
  {
    icon: FaFacebookF,
    href: 'https://www.facebook.com/asim.almarri',
    label: 'فيسبوك — عاصم سالم بن هلابي',
    title: 'تابعني على فيسبوك'
  },
];

function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-foreground font-sans overflow-x-hidden selection:bg-purple-500/30">

      {/* Fixed Iridescence Background */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Iridescence color={[0.15, 0.05, 0.3]} speed={0.8} amplitude={0.12} mouseReact={true} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/30 via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      {/* Main content */}
      <main className="relative z-10">

        {/* ─── Hero Section ─── */}
        <section
          aria-label="بطاقة التعريف"
          className="min-h-screen flex flex-col items-center justify-center relative px-6 py-16"
        >
          <div className="text-center max-w-3xl mx-auto w-full">

            {/* Role / subtitle — h2 because h1 is the name */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-xl text-purple-300/80 mb-4 font-light tracking-widest"
            >
              صانع محتوى رقمي
            </motion.p>

            {/* Primary heading — name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-daken text-5xl sm:text-6xl md:text-7xl text-white mb-5 leading-[1.25] drop-shadow-2xl"
            >
              عاصم سالم بن هلابي
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base md:text-xl text-white/65 font-light mb-8 flex items-center justify-center gap-4"
            >
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-purple-500/50 hidden md:block" aria-hidden="true" />
              أؤمن أن التفاصيل تُحدث الفرق!
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-purple-500/50 hidden md:block" aria-hidden="true" />
            </motion.p>

            {/* Social Links */}
            <motion.nav
              aria-label="روابط التواصل الاجتماعي"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.title}
                  className="group relative flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50"
                >
                  <div className="absolute inset-[-3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-md mix-blend-screen" aria-hidden="true" />
                  <div className="absolute inset-0 rounded-full bg-black/40 group-hover:bg-black/20 transition-colors duration-300" aria-hidden="true" />
                  <social.icon className="relative z-10 text-base md:text-lg text-white/70 group-hover:text-white transition-all duration-300 group-hover:scale-110" aria-hidden="true" />
                </a>
              ))}
            </motion.nav>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35"
            aria-hidden="true"
          >
            <span className="text-xs tracking-widest font-light">اكتشف المزيد</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <FaChevronDown className="text-sm opacity-60" />
            </motion.div>
          </motion.div>
        </section>

        {/* ─── About Section ─── */}
        <section
          id="about"
          aria-label="نبذة عن عاصم سالم بن هلابي"
          className="relative py-32 px-6 flex justify-center bg-[#0a0a0f] z-20"
        >
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl w-full"
          >
            <div className="relative p-10 md:p-16 rounded-3xl bg-white/[0.02] border border-white/[0.05] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group">
              {/* Decorative glows */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" aria-hidden="true" />
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] group-hover:bg-purple-600/10 transition-colors duration-1000" aria-hidden="true" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] group-hover:bg-indigo-600/10 transition-colors duration-1000" aria-hidden="true" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <h2 className="font-daken text-4xl md:text-5xl lg:text-6xl text-white mb-8">
                  من أنا؟
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed md:leading-[2] text-white/70 font-light max-w-3xl">
                  صانع محتوى رقمي شغوف بالتفاصيل الصغيرة التي تصنع الفارق الكبير.
                  أؤمن أن كل محتوى يحمل رسالة، وأن الإبداع لا حدود له.
                </p>
              </div>
            </div>
          </motion.article>
        </section>

      </main>

      {/* ─── Footer ─── */}
      <footer
        className="py-10 text-center border-t border-white/5 relative z-20 bg-[#0a0a0f]"
        aria-label="تذييل الصفحة"
      >
        <p className="text-white/40 text-sm mb-3">
          <small>© {new Date().getFullYear()} عاصم سالم بن هلابي. جميع الحقوق محفوظة.</small>
        </p>
        <p className="text-white/30 text-xs flex items-center justify-center gap-1.5">
          تصميم وبرمجة:{' '}
          <a
            href="https://needaa.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            title="موقع المبرمج نداء الرحمن عبود"
            className="text-white/50 hover:text-purple-400 transition-colors duration-300 underline decoration-white/10 hover:decoration-purple-400/50 underline-offset-4"
          >
            نداء الرحمن عبود
          </a>
        </p>
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
