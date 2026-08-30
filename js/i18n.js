(function () {
  'use strict';

  var STORAGE_KEY = 'gitgood-lang';

  var dict = {
    ar: {
      'skip': 'تخطَّ إلى المحتوى',
      'brand-aria': 'GitGood — الرئيسية',
      'footer-brand-aria': 'GitGood — العودة إلى الأعلى',
      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.services': 'خدماتنا',
      'nav.skills': 'المهارات',
      'nav.projects': 'المشاريع',
      'nav.events': 'الفعاليات',
      'work-with-us': 'اعمل معنا',
      'notice.flag': '📢 فعالية جديدة',
      'notice.title': 'DataGood — معسكر أدوات البيانات والذكاء الاصطناعي',
      'notice.detail': 'كل سبت من سبتمبر 2026 · مركز المهارات — سطيف · 14:00',
      'notice.register': 'سجّل الآن',
      'notice.close': 'إخفاء الإعلان',
      'hero-kicker': 'البرمجيات · الذكاء الاصطناعي · البيانات · التعليم',
      'hero-title': 'نبني. نعلِّم. <em>نتطوّر.</em>',
      'hero-sub': 'GitGood علامة تقنية تركّز على البرمجيات والذكاء الاصطناعي والبيانات والتعليم التقني العملي.',
      'explore-our-work': 'استكشف أعمالنا',
      'panel-cmd': '> تعلّم. ابنِ. تطوّر.',
      'about-kicker': 'من نحن',
      'about-title': 'ما هو GitGood؟',
      'about-p1': 'GitGood مبادرة تقنية قائمة على تطوير البرمجيات والذكاء الاصطناعي والبيانات والتعليم.',
      'about-p2': 'نبنِي مشاريع، ونقدّم تدريبًا عمليًا، وننظّم فعاليات تقنية، ونستكشف تقنيات جديدة.',
      'about-p3': 'التقنية والتعلّم والبناء الحقيقي — متّصلة.',
      'mascot-foxy-desc': 'البرمجة وثقافة المطورين',
      'mascot-owlix-desc': 'الذكاء الاصطناعي والبيانات والمعرفة',
      'svc-kicker': 'خدماتنا',
      'svc-title': 'ماذا نفعل؟',
      'svc-sub': 'من بناء البرمجيات إلى تعليم التقنيات التي تقف خلفها، تحوّل GitGood المعرفة التقنية إلى حلول عملية.',
      'svc1-tag': '01 · تطوير البرمجيات',
      'svc1-title': 'تطوير البرمجيات',
      'svc1-desc': 'نصمّم ونطوّر تطبيقات برمجية حديثة وحلولًا رقمية.',
      'svc1-l1': 'تطوير الويب',
      'svc1-l2': 'تطبيقات سطح المكتب',
      'svc1-l3': 'الأتمتة',
      'svc1-l4': 'هندسة البرمجيات',
      'svc2-tag': '02 · الذكاء الاصطناعي',
      'svc2-title': 'الذكاء الاصطناعي',
      'svc2-desc': 'نستكشف ونبني حلولًا عملية في الذكاء الاصطناعي.',
      'svc2-l1': 'التعلّم الآلي',
      'svc2-l2': 'الرؤية الحاسوبية',
      'svc2-l3': 'معالجة اللغة الطبيعية',
      'svc2-l4': 'تجارب ذكاء اصطناعي',
      'svc2-l5': 'تطبيقات ذكاء اصطناعي',
      'svc3-tag': '03 · البيانات والتحليلات',
      'svc3-title': 'البيانات والتحليلات',
      'svc3-desc': 'نحوّل البيانات إلى رؤى مفيدة وتجارب تفاعلية.',
      'svc3-l1': 'تحليل البيانات',
      'svc3-l2': 'تصوير البيانات',
      'svc3-l3': 'ذكاء الأعمال',
      'svc3-l4': 'التعلّم الآلي',
      'svc3-l5': 'علم البيانات',
      'svc4-tag': '04 · التدريب التقني',
      'svc4-title': 'التدريب التقني',
      'svc4-desc': 'تعليم تقني عملي مصمّم حول أدوات حقيقية ومشاريع.',
      'svc4-l1': 'البرمجة',
      'svc4-l2': 'الذكاء الاصطناعي',
      'svc4-l3': 'البيانات',
      'svc4-l4': 'أدوات المطورين',
      'svc4-l5': 'ورش العمل',
      'svc4-l6': 'المعسكرات',
      'svc5-tag': '05 · الورش والفعاليات',
      'svc5-title': 'الورش والفعاليات',
      'svc5-desc': 'ننظّم فعاليات تقنية تجمع الطلاب وعشّاق التقنية.',
      'svc5-l1': 'ورش عمل تقنية',
      'svc5-l2': 'معسكرات',
      'svc5-l3': 'محاضرات',
      'svc5-l4': 'جلسات تطبيقية',
      'svc5-l5': 'فعاليات طلابية',
      'sk-kicker': 'المهارات والتقنيات',
      'sk-title': 'التقنيات التي نعمل بها',
      'sk-sub': 'اللغات والمكتبات والأدوات التي تقف خلف مشاريعنا وتدريبنا.',
      'sk-cat-programming': 'البرمجة',
      'sk-cat-ai': 'الذكاء الاصطناعي والتعلّم الآلي',
      'sk-cat-data': 'البيانات',
      'sk-cat-web': 'الويب',
      'sk-cat-tools': 'الأدوات',
      'pj-kicker': 'المشاريع',
      'pj-title': 'ما بنيناه',
      'pj-sub': 'نؤمن بأن أفضل طريقة لفهم التقنية هي أن تبنيها بنفسك.',
      'featured-tag': 'تجربة مميزة',
      'gitgpt-desc': 'تجربة نموذج لغوي مصغّر بُني من الصفر لاستكشاف كيفية عمل النماذج اللغوية.',
      'src-btn': 'الكود',
      'demo-btn': 'العرض',
      'coming-soon': 'قريبًا',
      'techs-label': 'التقنيات المستخدمة',
      'pj-ai-tag': 'ذكاء اصطناعي · تجارب',
      'pj-ai-title': 'تجارب الذكاء الاصطناعي',
      'pj-ai-desc': 'تجارب تستكشف الذكاء الاصطناعي والتعلّم الآلي والتقنيات الناشئة.',
      'pj-data-tag': 'بيانات · تحليلات',
      'pj-data-title': 'مشاريع البيانات',
      'pj-data-desc': 'مشاريع عملية تشمل تحليل البيانات وتصويرها والتعلّم الآلي.',
      'pj-tools-tag': 'أدوات · أدوات مساعدة',
      'pj-tools-title': 'أدوات المطورين',
      'pj-tools-desc': 'أدوات صغيرة وتطبيقات صُنعت لحل مشكلات عملية.',
      'ev-kicker': 'الفعاليات والتدريب',
      'ev-title': 'الفعاليات والتدريب',
      'ev-sub': 'نقرّب التقنية من الطلاب عبر ورش عمل عملية ومعسكرات وتجارب تعلّم تطبيقية.',
      'ev-badge': 'معسكر',
      'ev-date': 'سبتمبر 2026',
      'ev-location': 'مركز المهارات — سطيف',
      'ev-feature-title': 'DataGood — معسكر أدوات البيانات والذكاء الاصطناعي',
      'ev-desc': 'معسكر عملي يقدّم للطلاب أدوات حديثة لتحليل البيانات وتصويرها وعلم البيانات والتعلّم الآلي.',
      'session-1': 'الجلسة 01',
      'session-2': 'الجلسة 02',
      'session-3': 'الجلسة 03',
      'session-4': 'الجلسة 04',
      's1-desc': 'تحليل البيانات ولوحات المعلومات التفاعلية',
      's2-desc': 'علم البيانات والتعلّم الآلي',
      's3-desc': 'تصوير البيانات والتقارير التفاعلية',
      's4-desc': 'التعلّم الآلي وتقييم النماذج',
      'view-events': 'عرض الفعاليات',
      'ap-kicker': 'نهجنا',
      'ap-title': 'تعلّم. ابنِ. <span class="accent">تطوّر.</span>',
      'ap-sub': 'فلسفة بسيطة تربط ما نبنيه وما نعلّمه وما نستكشفه.',
      'ap1-title': 'تعلّم',
      'ap1-desc': 'افهم التقنية.',
      'ap2-title': 'ابنِ',
      'ap2-desc': 'حوّل المعرفة إلى مشاريع حقيقية.',
      'ap3-title': 'تطوّر',
      'ap3-desc': 'جرّب، وكرّر، واستمر في التحسّن.',
      'why-kicker': 'لماذا GitGood',
      'why-title': 'لماذا GitGood؟',
      'why-sub': 'ما الذي يميّز GitGood؟',
      'why1-tag': '01 · عملي',
      'why1-title': 'عملي',
      'why1-desc': 'نركّز على الأدوات الحقيقية والمشاريع والتجربة العملية.',
      'why2-tag': '02 · تقني',
      'why2-title': 'تقني',
      'why2-desc': 'عملنا مبنيّ على هندسة البرمجيات والذكاء الاصطناعي والبيانات وعلوم الحاسوب.',
      'why3-tag': '03 · موجّه للطلاب',
      'why3-title': 'موجّه للطلاب',
      'why3-desc': 'نجعل التقنية في متناول الطلاب والمطورين الشباب.',
      'why4-tag': '04 · الفضول',
      'why4-title': 'فضولي',
      'why4-desc': 'نجرّب تقنيات جديدة ونستكشف دائمًا ما هو قادم.',
      'cta-title': 'لديك فكرة؟',
      'cta-sub': 'لنبنِ شيئًا بالتقنية.',
      'footer-tagline': 'تعلّم. ابنِ. تطوّر.',
      'footer-follow': 'تابعنا',
      'copyright': '© 2026 GitGood. جميع الحقوق محفوظة.',
      'page-title': 'GitGood — نبني. نعلِّم. نتطوّر.',
      'page-desc': 'GitGood علامة تقنية تركّز على تطوير البرمجيات والذكاء الاصطناعي والبيانات والتعليم التقني العملي — نبني المشاريع، ونعلّم، ونستكشف الجديد.'
    }
  };

  var root = document.documentElement;
  var toggles = Array.prototype.slice.call(document.querySelectorAll('[data-lang-toggle]'));
  var lang = 'en';

  function readStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function writeStored(l) {
    try { localStorage.setItem(STORAGE_KEY, l); } catch (e) {}
  }

  var originals = {};
  var textEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var htmlEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n-html]'));
  var attrEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n-attr]'));

  textEls.forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (!(key in originals)) originals[key] = el.textContent;
  });
  htmlEls.forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (!(key in originals)) originals[key] = el.innerHTML;
  });
  attrEls.forEach(function (el) {
    var attr = el.getAttribute('data-i18n-attr');
    var key = el.getAttribute('data-i18n-attr-key');
    if (key && !(key in originals)) originals[key] = el.getAttribute(attr) || '';
  });

  originals['page-title'] = document.title;
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) originals['page-desc'] = metaDesc.getAttribute('content');

  function value(key) {
    if (lang === 'en') return originals[key] !== undefined ? originals[key] : key;
    if (dict[lang] && dict[lang][key] !== undefined) return dict[lang][key];
    return originals[key] !== undefined ? originals[key] : key;
  }

  function apply() {
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    textEls.forEach(function (el) {
      el.textContent = value(el.getAttribute('data-i18n'));
    });
    htmlEls.forEach(function (el) {
      el.innerHTML = value(el.getAttribute('data-i18n-html'));
    });
    attrEls.forEach(function (el) {
      var attr = el.getAttribute('data-i18n-attr');
      var key = el.getAttribute('data-i18n-attr-key');
      el.setAttribute(attr, value(key));
    });

    document.title = value('page-title');
    if (metaDesc) metaDesc.setAttribute('content', value('page-desc'));

    toggles.forEach(function (t) {
      if (lang === 'ar') {
        t.textContent = 'EN';
        t.setAttribute('aria-label', 'English language');
      } else {
        t.textContent = 'العربية';
        t.setAttribute('aria-label', 'اللغة العربية');
      }
    });
  }

  toggles.forEach(function (t) {
    t.addEventListener('click', function () {
      lang = lang === 'ar' ? 'en' : 'ar';
      apply();
      writeStored(lang);
    });
  });

  var stored = readStored();
  if (stored === 'ar' || stored === 'en') {
    lang = stored;
  } else if (navigator.language && navigator.language.toLowerCase().indexOf('ar') === 0) {
    lang = 'ar';
    writeStored('ar');
  }

  apply();
})();