import React, { useState, useMemo } from 'react';
import FAQItemComponent from './components/FAQItem';
import { FAQItem } from './types';
import { 
    PinIcon, 
    ShieldCheckIcon,
    VideoCameraIcon,
    MegaphoneIcon,
    ChatBubbleLeftRightIcon,
    CalendarDaysIcon,
    ChartBarIcon,
    CheckCircleIcon,
    ArrowUturnLeftIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClockIcon,
    CalendarIcon,
} from './components/icons';
import { Logo } from './components/Logo';

interface LandingPageProps {
    onNavigateToBooking: () => void;
}

interface BookingPageProps {
    onNavigateToLanding: () => void;
}

const faqs: FAQItem[] = [
  {
    question: "Co jeśli już publikuję sama?",
    answer: "Świetnie — my tylko dopracujemy to, co robisz, i sprawimy, że będzie wyglądało jak u topowych salonów."
  },
  {
    question: "Ile postów zawiera pakiet?",
    answer: "4 główne treści (reelsy/karuzele) + 1 post polecający + zestaw szablonów opinii + plan publikacji."
  },
  {
    question: "Czy mogę zrezygnować w każdej chwili?",
    answer: "Tak. Wystarczy napisać przed kolejnym miesiącem."
  }
];

const offerItems = [
    { icon: VideoCameraIcon, title: "Reelsy i Karuzele, które budują Twoją markę", description: "Z Twoich najlepszych efektów tworzymy treści, które pokazują klasę i kunszt — a przy okazji zatrzymują scroll i budzą ciekawość.", color: "bg-pink-500/10 border-pink-500/30 text-pink-400", rotation: "rotate-1" },
    { icon: MegaphoneIcon, title: "Post Polecający (Referral Post)", description: "Delikatny, zaprojektowany z wyczuciem post, który zachęca Twoje klientki, by polecały Cię dalej. Bez nachalnych akcji.", color: "bg-purple-500/10 border-purple-500/30 text-purple-400", rotation: "-rotate-1" },
    { icon: ChatBubbleLeftRightIcon, title: "Szablony Opinii", description: "Co miesiąc dostajesz kilka nowych formatów, w których możesz pokazywać prawdziwe recenzje. Autentyczne opinie = prawdziwe zaufanie.", color: "bg-blue-500/10 border-blue-500/30 text-blue-400", rotation: "rotate-2" },
    { icon: CalendarDaysIcon, title: "Kalendarz Treści (4 tygodnie)", description: "Gotowy plan publikacji z tematami, które łączą Twoją codzienną pracę z tym, co faktycznie angażuje odbiorców.", color: "bg-green-500/10 border-green-500/30 text-green-400", rotation: "-rotate-2" },
    { icon: ChartBarIcon, title: "Raport Miesięczny", description: "Prosty raport: zasięgi, udostępnienia, wzmianki, komentarze. Żebyś widziała, jak rośnie Twoja widoczność i rozpoznawalność.", color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400", rotation: "rotate-1" },
];

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToBooking }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <header className="text-center mb-24 relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary mb-4">✨ Social Power Pack</h2>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
                    <span className="text-brand-primary">+300 PLN / miesiąc</span> → Twoja praca, profesjonalnie pokazana.
                </h1>
                <p className="text-lg sm:text-xl text-brand-muted max-w-3xl mx-auto">
                    Twoje brwi już robią wrażenie. Teraz pokażmy je światu tak, żeby przynosiły więcej klientek — bez chaosu, stresu i wiecznego myślenia “co dziś wrzucić”.
                </p>
            </header>
            <main className="space-y-24">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold uppercase text-brand-primary tracking-widest mb-4">🎯 Po co ten pakiet?</h2>
                    <p className="text-2xl sm:text-3xl font-bold leading-tight">
                        Masz solidną bazę klientek. Znasz swój fach. Ale social media to osobny etat. Dlatego stworzyliśmy prosty dodatek, który sprawia, że Twoja praca sama przyciąga uwagę i polecenia. <span className="text-brand-muted">Bez obietnic wirali — po prostu konsekwentny, profesjonalny content, który działa.</span>
                    </p>
                </section>
                <section>
                    <h2 className="text-center text-sm font-bold uppercase text-brand-primary tracking-widest mb-12">💄 Co otrzymujesz co miesiąc</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className={`relative p-6 rounded-2xl border ${item.color} transform transition-transform duration-300 hover:scale-105 hover:!rotate-0 ${item.rotation} bg-brand-surface/50 backdrop-blur-sm`}>
                                    <PinIcon className="w-8 h-8 text-brand-muted absolute -top-4 -left-2 -rotate-12" />
                                    <Icon className={`w-10 h-10 mb-4 ${item.color.split(' ')[2]}`} />
                                    <h3 className="text-xl font-bold mb-2 text-brand-light">{item.title}</h3>
                                    <p className="text-brand-muted">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-center text-sm font-bold uppercase text-brand-primary tracking-widest mb-8">💰 Wartość Pakietu</h2>
                    <div className="bg-brand-surface/50 border border-brand-primary/20 rounded-xl overflow-hidden backdrop-blur-sm">
                        <table className="w-full text-left">
                            <thead className="bg-brand-primary/10">
                                <tr>
                                    <th className="p-4 font-semibold">Element</th>
                                    <th className="p-4 font-semibold text-right">Wartość</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-primary/10">
                                <tr><td className="p-4">4x Reels & Karuzele</td><td className="p-4 text-right">600 PLN</td></tr>
                                <tr><td className="p-4">1x Post Polecający</td><td className="p-4 text-right">250 PLN</td></tr>
                                <tr><td className="p-4">3x Szablony Opinii</td><td className="p-4 text-right">200 PLN</td></tr>
                                <tr><td className="p-4">Kalendarz Treści</td><td className="p-4 text-right">300 PLN</td></tr>
                                <tr><td className="p-4">Raport Wyników</td><td className="p-4 text-right">150 PLN</td></tr>
                            </tbody>
                            <tfoot className="bg-brand-primary/10 font-bold">
                                <tr>
                                    <td className="p-4">Łączna wartość: ≈ 1 500 PLN/mies.</td>
                                    <td className="p-4 text-right text-brand-primary">Ty płacisz tylko 300 PLN</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <p className="text-center mt-6 text-brand-muted">Jedna nowa klientka zwraca koszt — reszta to czysty bonus.</p>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                    <div className="lg:col-span-3 space-y-16">
                         <section className="bg-brand-surface/50 border border-brand-primary/20 p-8 rounded-2xl shadow-glow-primary">
                            <h2 className="text-center text-sm font-bold uppercase text-brand-primary tracking-widest mb-4">💬 Realna gwarancja</h2>
                            <div className="flex items-center justify-center gap-4">
                                <ShieldCheckIcon className="w-12 h-12 text-brand-primary flex-shrink-0" />
                                <p className="text-lg font-semibold text-center">Nie obiecujemy cudów. Obiecujemy, że Twoje social media będą wyglądać profesjonalnie, spójnie i autentycznie. A jeśli po miesiącu uznasz, że to nie wnosi wartości — możesz po prostu zrezygnować. <span className="text-brand-primary">Bez stresu.</span></p>
                            </div>
                        </section>
                        <section className="text-center bg-brand-surface/50 p-8 rounded-2xl border border-brand-primary/20">
                            <h2 className="text-3xl font-bold mb-4">🚀 Gotowa, żeby Twoja marka wyglądała tak dobrze, jak Twoje efekty?</h2>
                            <p className="text-brand-muted mb-6">+300 PLN / miesiąc. Bez umów. Bez ryzyka.</p>
                            <p className="text-brand-muted mb-8 max-w-md mx-auto">Po prostu – profesjonalna obecność, która pracuje na Twoją reputację.</p>
                            <a 
                                href="#/booking"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onNavigateToBooking();
                                }}
                                className="inline-block w-full max-w-sm bg-brand-primary text-brand-bg font-bold py-4 px-6 rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg shadow-brand-primary/30 text-lg"
                            >
                                💋 Tak, chcę dodać Social Power Pack
                            </a>
                        </section>
                    </div>
                    <section className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-8">FAQ</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <FAQItemComponent key={index} item={faq} />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <footer className="text-center mt-24 pt-8 border-t border-brand-primary/10">
                <p className="font-bold text-lg">BeautiFlow Partner</p>
                <p className="text-brand-muted">&copy; {new Date().getFullYear() + 1}. Wszelkie prawa zastrzeżone.</p>
                <p className="text-brand-muted text-sm mt-2">Warszawa | hello@beautiflow.pl | IG: @beautiflowpartner</p>
            </footer>
        </div>
    );
};

const BookingPage: React.FC<BookingPageProps> = ({ onNavigateToLanding }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [step, setStep] = useState<'date' | 'details' | 'confirmed'>('date');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const availableTimes = ['10:00', '11:30', '14:00', '15:30', '17:00'];

    const daysOfWeek = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];
    
    const calendarDays = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        
        const days = [];
        let startingDay = firstDayOfMonth.getDay() - 1;
        if (startingDay === -1) startingDay = 6;

        for (let i = 0; i < startingDay; i++) {
            days.push(null);
        }
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            days.push(new Date(year, month, i));
        }
        return days;
    }, [currentDate]);
    
    const handleDateSelect = (day: Date) => {
        setSelectedDate(day);
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setStep('details');
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && email && selectedDate && selectedTime) {
            setStep('confirmed');
        }
    };
    
    const isDateAvailable = (date: Date | null) => {
        if (!date) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date >= today;
    }

    if (step === 'confirmed') {
        return (
             <div className="flex items-center justify-center min-h-screen p-4">
                <div className="text-center bg-brand-surface/50 p-8 sm:p-12 rounded-2xl border border-brand-primary/20 max-w-lg w-full">
                    <CheckCircleIcon className="w-20 h-20 text-green-400 mx-auto mb-6" />
                    <h1 className="text-3xl font-bold text-brand-light mb-4">Świetnie! Spotkanie umówione.</h1>
                    <p className="text-brand-muted mb-2">
                        Potwierdzenie rezerwacji na {selectedDate?.toLocaleDateString('pl-PL')} o {selectedTime} zostało wysłane na:
                    </p>
                     <p className="text-brand-light font-medium mb-8 text-lg">{email}</p>
                    <a 
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onNavigateToLanding();
                        }}
                        className="inline-flex items-center gap-2 bg-brand-primary/20 text-brand-primary font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/30 transition-all duration-300"
                    >
                        <ArrowUturnLeftIcon className="w-5 h-5" />
                        Wróć na stronę główną
                    </a>
                </div>
            </div>
        );
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-brand-surface/80 border border-brand-primary/20 rounded-2xl max-w-4xl w-full overflow-hidden backdrop-blur-sm">
                {/* Left Panel */}
                <div className="col-span-1 p-8 border-r border-brand-primary/10">
                    <a href="#" onClick={(e) => {e.preventDefault(); onNavigateToLanding();}} className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-light transition-colors mb-8">
                        <ArrowUturnLeftIcon className="w-5 h-5" />
                        <span>Wróć</span>
                    </a>
                    <Logo className="h-10 w-auto text-brand-light mb-4" />
                    <h2 className="text-2xl font-bold">Rozmowa Wdrożeniowa</h2>
                    <div className="space-y-3 mt-4 text-brand-muted">
                        <p className="flex items-center gap-3"><ClockIcon className="w-5 h-5 text-brand-primary" /> 30 min</p>
                        <p className="flex items-center gap-3"><VideoCameraIcon className="w-5 h-5 text-brand-primary" /> Google Meet</p>
                        <p className="mt-4">Szybkie spotkanie, na którym podłączymy Twój nowy silnik do zdobywania klientek i odpowiemy na wszystkie pytania.</p>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="col-span-1 md:col-span-2 p-8">
                    {step === 'details' ? (
                         <div className="animate-fade-in">
                            <h2 className="text-xl font-bold mb-6">Wprowadź swoje dane</h2>
                             <div className="flex items-center gap-3 mb-6 text-brand-muted p-3 rounded-lg bg-brand-surface">
                                <CalendarIcon className="w-5 h-5 text-brand-primary" />
                                <span>{selectedTime}, {selectedDate?.toLocaleDateString('pl-PL', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                             </div>
                             <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-brand-muted mb-2">Imię i nazwisko</label>
                                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="np. Anna Kowalska" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-brand-light placeholder-brand-muted/50 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 outline-none" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-brand-muted mb-2">Adres e-mail</label>
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="np. anna.kowalska@email.com" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-brand-light placeholder-brand-muted/50 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 outline-none" />
                                </div>
                                <button type="submit" className="w-full bg-brand-primary text-brand-bg font-bold py-3 px-6 rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg shadow-brand-primary/30 text-lg">Zarezerwuj spotkanie</button>
                             </form>
                         </div>
                    ) : (
                        <div className="animate-fade-in">
                            <h2 className="text-xl font-bold mb-4">Wybierz datę i godzinę</h2>
                            <div className="flex items-center justify-between mb-4">
                                <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className="p-2 rounded-full hover:bg-brand-surface"><ChevronLeftIcon className="w-5 h-5" /></button>
                                <span className="font-semibold">{currentDate.toLocaleString('pl-PL', { month: 'long', year: 'numeric' })}</span>
                                <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className="p-2 rounded-full hover:bg-brand-surface"><ChevronRightIcon className="w-5 h-5" /></button>
                            </div>
                            <div className="grid grid-cols-7 gap-2 text-center text-sm text-brand-muted mb-2">
                                {daysOfWeek.map(day => <div key={day}>{day}</div>)}
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                                {calendarDays.map((day, index) => (
                                    <div key={index} className="flex justify-center items-center h-10">
                                        {day && (
                                            <button 
                                                onClick={() => isDateAvailable(day) && handleDateSelect(day)}
                                                disabled={!isDateAvailable(day)}
                                                className={`w-10 h-10 rounded-full transition-colors ${!isDateAvailable(day) ? 'text-brand-muted/30 cursor-not-allowed' : 'hover:bg-brand-primary hover:text-brand-bg'} ${selectedDate?.getTime() === day.getTime() ? 'bg-brand-primary text-brand-bg' : ''}`}
                                            >
                                                {day.getDate()}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {selectedDate && (
                                <div className="mt-6 animate-fade-in">
                                    <h3 className="font-semibold mb-3 text-center">Dostępne godziny — {selectedDate.toLocaleDateString('pl-PL', { weekday: 'long' })}</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {availableTimes.map(time => (
                                            <button key={time} onClick={() => handleTimeSelect(time)} className="w-full border border-brand-primary text-brand-primary font-semibold py-3 px-4 rounded-lg hover:bg-brand-primary hover:text-brand-bg transition-all duration-300">
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const [page, setPage] = useState<'landing' | 'booking'>('landing');

    const navigateTo = (targetPage: 'landing' | 'booking') => {
        setPage(targetPage);
        window.scrollTo(0, 0);
    };

    return (
        <div className="min-h-screen overflow-x-hidden">
            {page === 'landing' ? <LandingPage onNavigateToBooking={() => navigateTo('booking')} /> : <BookingPage onNavigateToLanding={() => navigateTo('landing')} />}
        </div>
    );
};

export default App;