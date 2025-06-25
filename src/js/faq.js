const refer = {
  faqWrapperElm: document.querySelector('[data-faq-wrapper]'),
  iconsFaqElms: document.querySelectorAll('[data-icon-faq]'),
  faqAnswerElms: document.querySelectorAll('[data-faq-answer]'),
};

document.addEventListener('DOMContentLoaded', () => {
  refer.faqWrapperElm.addEventListener('click', onFaqClick);
});

function onFaqClick(e) {
  const isSelectedUse = e.target.tagName === 'use';
  const isSelectedSvg = e.target.tagName === 'svg';

  if (!(isSelectedUse || isSelectedSvg)) {
    return;
  }

  const selItemElm = e.target.closest('[data-faq-item]');
  const selAnswerElm = selItemElm.querySelector('[data-faq-answer]');
  const selIconElm = selItemElm.querySelector('[data-icon-faq]');

  if (selIconElm.dataset.iconFaq === 'open') {
    closeElms();
  } else {
    closeElms();
    selAnswerElm.dataset.faqAnswer = 'open';
    selIconElm.dataset.iconFaq = 'open';
  }
}

function closeElms() {
  refer.iconsFaqElms.forEach(el => (el.dataset.iconFaq = 'close'));
  refer.faqAnswerElms.forEach(el => (el.dataset.faqAnswer = 'close'));
}