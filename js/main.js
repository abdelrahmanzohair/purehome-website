/* PUREHOME static website — configure the WhatsApp number below. */
const WHATSAPP_NUMBER = "966500000000"; // Replace with country code + number, digits only.
const translations = {
  ar: {
    skip:"تجاوز إلى المحتوى",brandTag:"نظافة تليق بمساحتك",navServices:"خدماتنا",navAbout:"من نحن",navPackages:"الباقات",navGallery:"أعمالنا",navFaq:"الأسئلة الشائعة",navContact:"تواصل معنا",navBook:"احجز خدمة",
    heroEyebrow:"مساحة أنقى… وراحة أكبر",heroTitle:"نمنح مساحتك<br><em>لمسة من النقاء.</em>",heroText:"منزلك ومكتبك يستحقان عناية تلاحظها من أول نظرة. حلول تنظيف مرنة للمساحات السكنية والتجارية، باهتمام حقيقي بكل تفصيلة.",heroCta:"اطلب عرض سعر",explore:"اكتشف خدماتنا",heroNote:"تفاصيل صغيرة تصنع فرقاً كبيراً",floatingTitle:"نقاء في كل زاوية",floatingText:"عناية تبدأ من التفاصيل",caption:"مساحتك، كما تحبها تماماً",heroBottom:"حلول تنظيف للمنازل والأعمال",trustLead:"نهتم بنظافة المساحات التي تهمك",trust1:"اهتمام بالتفاصيل",trust2:"حلول مرنة",trust3:"تجربة واضحة",
    aboutEyebrow:"عن PUREHOME",aboutTitle:"النظافة ليست مهمة فقط،<br><em>إنها شعور.</em>",aboutText:"في PUREHOME نؤمن أن المساحة النظيفة تمنحك راحة أكبر وتركيزاً أفضل. لذلك نقدم خدمات تنظيف مصممة لتناسب احتياجات المنازل والمكاتب والمنشآت، مع خطوات واضحة واهتمام بالتفاصيل.",aboutLink:"تعرّف علينا أكثر",
    servicesEyebrow:"ماذا نقدم؟",servicesTitle:"مساحتك لها <em>حلّها.</em>",servicesIntro:"خدمات متكاملة للعناية بمختلف أنواع المساحات، من التنظيف اليومي إلى العناية العميقة.",s1:"تنظيف المنازل",s1d:"تنظيف دوري أو حسب الطلب لغرف المعيشة والنوم والمساحات المنزلية.",s2:"تنظيف المكاتب والمنشآت",s2d:"بيئات عمل مرتبة ونظيفة تناسب المكاتب والمساحات التجارية.",s3:"التنظيف العميق",s3d:"عناية تفصيلية بالمناطق التي تحتاج إلى وقت واهتمام إضافيين.",s4:"تنظيف الكنب والسجاد",s4d:"تنظيف المفروشات والسجاد والعناية بالأقمشة بحسب نوعها.",s5:"تنظيف المطابخ والحمامات",s5d:"تنظيف الأسطح والتجهيزات والمناطق كثيرة الاستخدام بعناية.",s6:"تنظيف قبل/بعد الانتقال",s6d:"تهيئة العقار قبل السكن أو بعد الإخلاء لاستقبال مرحلة جديدة.",details:"اطلب الخدمة ↗",
    whyEyebrow:"لماذا PUREHOME؟",whyTitle:"لأن راحتك<br>تستحق <em>الأفضل.</em>",whyText:"نرتب التجربة من أول تواصل وحتى اكتمال الخدمة، لتعرف ما الذي تتوقعه في كل خطوة.",why1:"اهتمام بالتفاصيل",why1d:"نركز على التفاصيل التي تصنع إحساس الفرق.",why2:"خدمات حسب احتياجك",why2d:"خيارات مرنة للمساحات السكنية والتجارية.",why3:"تواصل واضح",why3d:"نوضح نطاق الخدمة والتفاصيل قبل تأكيد الطلب.",why4:"خطوات منظمة",why4d:"تجربة مرتبة من طلب العرض وحتى التنفيذ.",
    processEyebrow:"كيف نعمل؟",processTitle:"أربع خطوات، <em>بكل بساطة.</em>",p1:"أرسل طلبك",p1d:"اختر الخدمة وأخبرنا بتفاصيل مساحتك.",p2:"نراجع التفاصيل",p2d:"نتواصل معك لفهم احتياجك ونطاق العمل.",p3:"نحدد الموعد",p3d:"نتفق على التفاصيل والموعد المناسب.",p4:"تبدأ العناية",p4d:"تنفيذ الخدمة وفق ما تم الاتفاق عليه.",
    packagesEyebrow:"خيارات مرنة",packagesTitle:"باقات <em>استرشادية.</em>",packagesIntro:"أمثلة توضيحية قابلة للتعديل. السعر النهائي يتحدد بعد معرفة مساحة الموقع ونطاق الخدمة.",illustrative:"مثال توضيحي",pkg1:"الزيارة الأساسية",pkg1d:"للعناية الدورية بالمساحات اليومية.",pkg1a:"تنظيف الأسطح الظاهرة",pkg1b:"ترتيب المساحات",pkg1c:"تنظيف الأرضيات",pkg2:"العناية الشاملة",pkg2d:"تنظيف أوسع للمساحات كثيرة الاستخدام.",pkg2a:"مزايا الزيارة الأساسية",pkg2b:"عناية بالمطبخ والحمامات",pkg2c:"تفاصيل إضافية حسب الطلب",flexible:"خيار مرن",pkg3:"حلول الأعمال",pkg3d:"للمكاتب والمساحات التجارية.",pkg3a:"تحديد نطاق العمل",pkg3b:"جدولة مرنة",pkg3c:"خطة خدمة حسب الموقع",requestQuote:"اطلب عرض سعر",packageDisclaimer:"* الباقات والمحتويات أعلاه أمثلة تصميمية وليست عروض أسعار فعلية أو خدمات مؤكدة.",
    galleryEyebrow:"مساحات ملهمة",galleryTitle:"لمحة من <em>عالم النقاء.</em>",galleryIntro:"صور استرشادية لطبيعة المساحات والخدمات التي يمكن العناية بها.",all:"الكل",filterHome:"منازل",filterWork:"مكاتب",filterDetail:"تفاصيل",g1:"مساحات معيشة",g2:"بيئات عمل",g3:"تفاصيل المطبخ",g4:"أناقة المنزل",g5:"عناية بالتفاصيل",
    testimonialEyebrow:"انطباعات تجريبية",testimonial:"“تجربة نظافة مريحة تبدأ من وضوح التفاصيل وتنتهي بمساحة أكثر ترتيباً.”",testimonialName:"نموذج رأي تجريبي — ليس تقييماً حقيقياً من عميل",
    faqEyebrow:"هل لديك سؤال؟",faqTitle:"إجابات <em>بكل وضوح.</em>",faqIntro:"إذا لم تجد إجابة سؤالك هنا، يسعدنا استقبال استفسارك مباشرة.",askUs:"تواصل معنا",q1:"كيف أطلب خدمة تنظيف؟",a1:"املأ نموذج طلب الخدمة، وسيتم فتح واتساب برسالة تحتوي على تفاصيل طلبك لإرسالها ومتابعتها.",q2:"هل الأسعار ثابتة؟",a2:"لا، الأسعار المعروضة في الباقات أمثلة توضيحية فقط. يتم تحديد العرض بعد معرفة نوع الموقع ومساحته ونطاق العمل.",q3:"هل تقدمون خدمات للمكاتب؟",a3:"يتضمن نموذج الموقع خدمات مقترحة للمكاتب والمنشآت التجارية، ويمكنك إرسال تفاصيل موقعك لطلب عرض مناسب.",q4:"هل يمكن تحديد موعد مسبق؟",a4:"يمكنك ذكر التاريخ والوقت المفضلين في النموذج، وسيتم التنسيق معك عبر واتساب.",q5:"هل يتم حفظ بيانات النموذج؟",a5:"لا يتم حفظ البيانات في قاعدة بيانات. النموذج يجهز رسالة واتساب لتراجعها وترسلها بنفسك.",
    bookingEyebrow:"لنبدأ من هنا",bookingTitle:"مساحة أنظف<br><em>على بُعد رسالة.</em>",bookingText:"أخبرنا بما تحتاجه، وسنجهز لك رسالة طلب عبر واتساب لمتابعة التفاصيل.",callUs:"تواصل معنا عبر واتساب",fastReply:"نحن هنا للإجابة عن استفسارك",formTitle:"اطلب عرض سعر",formSubtitle:"املأ البيانات التالية وسنفتح واتساب برسالتك.",nameLabel:"الاسم الكامل",phoneLabel:"رقم الجوال",serviceLabel:"نوع الخدمة",chooseService:"اختر الخدمة",cityLabel:"المدينة",dateLabel:"التاريخ المفضل",sizeLabel:"المساحة التقريبية",notesLabel:"تفاصيل إضافية",submit:"متابعة عبر واتساب",privacy:"لن يتم حفظ البيانات على الموقع. ستتم مراجعة الرسالة وإرسالها من خلال واتساب.",contactEyebrow:"ابقَ على تواصل",contactTitle:"يسعدنا <em>سماعك.</em>",whatsappCta:"تحدث معنا على واتساب",footerText:"نعتني بمساحتك لتستمتع براحة أكبر كل يوم.",footerLinks:"روابط سريعة",footerServices:"خدماتنا",footerContact:"تواصل معنا",footerArea:"المملكة العربية السعودية",footerHours:"أوقات التواصل حسب التنسيق",rights:"جميع الحقوق محفوظة.",creditAr:"تم التصميم بواسطة",
    errName:"يرجى إدخال الاسم (حرفان على الأقل).",errPhone:"يرجى إدخال رقم جوال صحيح.",errService:"يرجى اختيار الخدمة.",errCity:"يرجى إدخال المدينة.",waUnavailable:"يرجى ضبط رقم واتساب الصحيح في ملف js/main.js قبل استقبال الطلبات."
  },
  en: {
    skip:"Skip to content",brandTag:"Clean spaces. Clear comfort.",navServices:"Services",navAbout:"About",navPackages:"Packages",navGallery:"Our Work",navFaq:"FAQs",navContact:"Contact",navBook:"Book a service",
    heroEyebrow:"A purer space… a calmer day",heroTitle:"Give your space<br><em>a touch of pure.</em>",heroText:"Your home and workplace deserve care you can notice. Flexible cleaning solutions for residential and commercial spaces, with genuine attention to every detail.",heroCta:"Request a quote",explore:"Explore services",heroNote:"Small details make a big difference",floatingTitle:"Freshness in every corner",floatingText:"Care starts with the details",caption:"Your space, just the way you like it",heroBottom:"Cleaning solutions for homes and businesses",trustLead:"We care for the spaces that matter",trust1:"Attention to detail",trust2:"Flexible solutions",trust3:"A clear experience",
    aboutEyebrow:"ABOUT PUREHOME",aboutTitle:"Cleanliness is more than a task,<br><em>it is a feeling.</em>",aboutText:"At PUREHOME, we believe a clean space brings greater comfort and focus. We offer cleaning services designed for homes, offices and commercial facilities, with clear steps and thoughtful attention to detail.",aboutLink:"Discover more",
    servicesEyebrow:"WHAT WE DO",servicesTitle:"Every space has <em>its solution.</em>",servicesIntro:"Thoughtful care for different spaces, from regular cleaning to detailed deep cleaning.",s1:"Residential cleaning",s1d:"Regular or on-demand cleaning for living rooms, bedrooms and home spaces.",s2:"Office & commercial cleaning",s2d:"Neat, clean work environments for offices and commercial spaces.",s3:"Deep cleaning",s3d:"Detailed care for areas that need extra time and attention.",s4:"Sofa, carpet & upholstery",s4d:"Cleaning for upholstery and carpets, with care suited to each fabric.",s5:"Kitchen & bathroom cleaning",s5d:"Careful cleaning of surfaces, fixtures and frequently used areas.",s6:"Move-in / move-out cleaning",s6d:"Prepare a property before move-in or after move-out for a fresh start.",details:"Request service ↗",
    whyEyebrow:"WHY PUREHOME",whyTitle:"Because your comfort<br>deserves <em>better.</em>",whyText:"We organise the experience from your first enquiry through service completion, so you know what to expect at every step.",why1:"Attention to detail",why1d:"We focus on the little things that make a difference.",why2:"Services around your needs",why2d:"Flexible options for residential and commercial spaces.",why3:"Clear communication",why3d:"We clarify the scope and details before confirming a request.",why4:"An organised process",why4d:"A considered experience from quote request to delivery.",
    processEyebrow:"HOW IT WORKS",processTitle:"Four steps, <em>made simple.</em>",p1:"Send your request",p1d:"Choose a service and tell us about your space.",p2:"We review the details",p2d:"We contact you to understand your needs and scope.",p3:"Agree on a time",p3d:"We align on the details and a suitable appointment.",p4:"Care begins",p4d:"The service is carried out as agreed.",
    packagesEyebrow:"FLEXIBLE OPTIONS",packagesTitle:"Illustrative <em>packages.</em>",packagesIntro:"Editable examples only. A final quote depends on the site size and service scope.",illustrative:"Illustrative example",pkg1:"Essential visit",pkg1d:"For regular care of everyday spaces.",pkg1a:"Visible surface cleaning",pkg1b:"Space tidying",pkg1c:"Floor cleaning",pkg2:"Complete care",pkg2d:"A broader clean for frequently used spaces.",pkg2a:"Essential visit features",pkg2b:"Kitchen and bathroom care",pkg2c:"Additional details on request",flexible:"Flexible option",pkg3:"Business solutions",pkg3d:"For offices and commercial spaces.",pkg3a:"Scope definition",pkg3b:"Flexible scheduling",pkg3c:"Site-specific service plan",requestQuote:"Request a quote",packageDisclaimer:"* Packages and inclusions above are design examples, not actual price offers or confirmed services.",
    galleryEyebrow:"SPACES THAT INSPIRE",galleryTitle:"A glimpse into <em>the world of pure.</em>",galleryIntro:"Reference imagery showing the types of spaces and services that may be cared for.",all:"All",filterHome:"Homes",filterWork:"Offices",filterDetail:"Details",g1:"Living spaces",g2:"Work environments",g3:"Kitchen details",g4:"Home elegance",g5:"Care in the details",
    testimonialEyebrow:"DEMO IMPRESSION",testimonial:"“A comfortable cleaning experience starts with clear details and ends with a more organised space.”",testimonialName:"Demonstration testimonial — not a genuine customer review",
    faqEyebrow:"HAVE A QUESTION?",faqTitle:"Answers, <em>clearly.</em>",faqIntro:"If you cannot find your answer here, we would be happy to hear from you.",askUs:"Get in touch",q1:"How do I request a cleaning service?",a1:"Complete the request form. WhatsApp will open with a message containing your request details for you to review and send.",q2:"Are the prices fixed?",a2:"No. Package details are illustrative examples only. A quote is prepared after reviewing the site type, size and scope.",q3:"Do you offer office cleaning?",a3:"This website concept includes proposed office and commercial services. Send your site details to request a suitable quote.",q4:"Can I request an appointment in advance?",a4:"You can add your preferred date and time in the form, then coordinate with us through WhatsApp.",q5:"Is my form data saved?",a5:"No data is saved to a database. The form prepares a WhatsApp message for you to review and send.",
    bookingEyebrow:"LET'S GET STARTED",bookingTitle:"A cleaner space<br><em>is one message away.</em>",bookingText:"Tell us what you need and we will prepare a WhatsApp request message to discuss the details.",callUs:"Reach us on WhatsApp",fastReply:"Here to help with your enquiry",formTitle:"Request a quote",formSubtitle:"Complete the details below to open your WhatsApp message.",nameLabel:"Full name",phoneLabel:"Mobile number",serviceLabel:"Service type",chooseService:"Choose a service",cityLabel:"City",dateLabel:"Preferred date",sizeLabel:"Approximate area",notesLabel:"Additional details",submit:"Continue to WhatsApp",privacy:"Your details are not stored on this website. Review and send the message through WhatsApp.",contactEyebrow:"STAY IN TOUCH",contactTitle:"We'd love <em>to hear from you.</em>",whatsappCta:"Chat with us on WhatsApp",footerText:"We care for your space, so you can enjoy more comfort every day.",footerLinks:"Quick links",footerServices:"Our services",footerContact:"Contact",footerArea:"Kingdom of Saudi Arabia",footerHours:"Contact times by arrangement",rights:"All rights reserved.",creditAr:"Designed by",
    errName:"Please enter a name (at least 2 characters).",errPhone:"Please enter a valid mobile number.",errService:"Please choose a service.",errCity:"Please enter your city.",waUnavailable:"Please set the correct WhatsApp number in js/main.js before accepting requests."
  }
};
let currentLang = "ar";
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("english", lang === "en");
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  $("#langToggle").textContent = lang === "ar" ? "EN" : "عربي";
  $("#langToggle").setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
  $("#menuToggle").setAttribute("aria-label", lang === "ar" ? "فتح القائمة" : "Open menu");
  document.title = lang === "ar" ? "PUREHOME | نظافة تليق بمساحتك" : "PUREHOME | Clean spaces. Clear comfort.";
}
$("#langToggle").addEventListener("click", () => applyLanguage(currentLang === "ar" ? "en" : "ar"));

const menuToggle = $("#menuToggle"), nav = $("#mainNav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
$$(".main-nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
}));

// Portfolio category filters.
$$(".filter").forEach(button => button.addEventListener("click", () => {
  $$(".filter").forEach(b => b.classList.remove("active"));
  button.classList.add("active");
  const filter = button.dataset.filter;
  $$(".gallery-item").forEach(item => {
    item.classList.toggle("hidden", filter !== "all" && item.dataset.category !== filter);
  });
}));

// Accessible FAQ accordion.
$$(".faq-question").forEach(button => button.addEventListener("click", () => {
  const item = button.closest(".faq-item");
  const expanded = button.getAttribute("aria-expanded") === "true";
  $$(".faq-item").forEach(other => {
    other.classList.remove("open");
    $(".faq-question", other).setAttribute("aria-expanded", "false");
  });
  if (!expanded) {
    item.classList.add("open");
    button.setAttribute("aria-expanded", "true");
  }
}));

// Reveal animations, with a graceful fallback for reduced motion / older browsers.
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  $$(".reveal").forEach(el => observer.observe(el));
} else $$(".reveal").forEach(el => el.classList.add("visible"));

const serviceNames = {
  ar: {home:"تنظيف المنازل",office:"تنظيف المكاتب والمنشآت",deep:"التنظيف العميق",upholstery:"تنظيف الكنب والسجاد",kitchen:"تنظيف المطابخ والحمامات",moving:"تنظيف قبل/بعد الانتقال"},
  en: {home:"Residential cleaning",office:"Office & commercial cleaning",deep:"Deep cleaning",upholstery:"Sofa, carpet & upholstery cleaning",kitchen:"Kitchen & bathroom cleaning",moving:"Move-in / move-out cleaning"}
};
$$("[data-service]").forEach(link => link.addEventListener("click", () => {
  const select = $('#bookingForm select[name="service"]');
  select.value = link.dataset.service;
}));

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function updateWhatsAppLinks() {
  const url = whatsappUrl(currentLang === "ar" ? "مرحباً PUREHOME، أود الاستفسار عن خدمات التنظيف." : "Hello PUREHOME, I would like to enquire about your cleaning services.");
  ["whatsappLink","footerWhatsApp","floatingWhatsApp"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });
}
$("#langToggle").addEventListener("click", updateWhatsAppLinks);
updateWhatsAppLinks();

const form = $("#bookingForm");
form.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const dict = translations[currentLang];
  const values = Object.fromEntries(data.entries());
  const checks = {
    name: values.name.trim().length >= 2,
    phone: /^[0-9+() -]{8,18}$/.test(values.phone.trim()),
    service: Boolean(values.service),
    city: values.city.trim().length > 0
  };
  Object.entries(checks).forEach(([key, valid]) => {
    const field = form.elements.namedItem(key);
    const error = $(`[data-error="${key}"]`);
    field.classList.toggle("invalid", !valid);
    error.textContent = valid ? "" : dict[`err${key[0].toUpperCase()}${key.slice(1)}`];
  });
  const firstInvalid = Object.keys(checks).find(key => !checks[key]);
  $("#formStatus").textContent = "";
  if (firstInvalid) { form.elements.namedItem(firstInvalid).focus(); return; }
  if (!/^\d{8,15}$/.test(WHATSAPP_NUMBER)) {
    $("#formStatus").textContent = dict.waUnavailable;
    return;
  }
  const lines = currentLang === "ar" ? [
    "طلب خدمة جديد — PUREHOME",
    `الاسم: ${values.name.trim()}`,
    `رقم الجوال: ${values.phone.trim()}`,
    `الخدمة: ${serviceNames.ar[values.service]}`,
    `المدينة: ${values.city.trim()}`,
    values.date ? `التاريخ المفضل: ${values.date}` : "",
    values.size ? `المساحة التقريبية: ${values.size}` : "",
    values.notes ? `تفاصيل إضافية: ${values.notes.trim()}` : ""
  ] : [
    "New service enquiry — PUREHOME",
    `Name: ${values.name.trim()}`,
    `Mobile: ${values.phone.trim()}`,
    `Service: ${serviceNames.en[values.service]}`,
    `City: ${values.city.trim()}`,
    values.date ? `Preferred date: ${values.date}` : "",
    values.size ? `Approximate area: ${values.size}` : "",
    values.notes ? `Additional details: ${values.notes.trim()}` : ""
  ];
  window.open(whatsappUrl(lines.filter(Boolean).join("\n")), "_blank", "noopener,noreferrer");
});
["name","phone","service","city"].forEach(name => {
  const field = form.elements.namedItem(name);
  field.addEventListener("input", () => { field.classList.remove("invalid"); $(`[data-error="${name}"]`).textContent = ""; });
});
$("#year").textContent = new Date().getFullYear();
applyLanguage("ar");
