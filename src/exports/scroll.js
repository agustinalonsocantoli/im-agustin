export const getScrollPercent = () => {
    const scrollTop = document.documentElement['scrollTop'] || document.body['scrollTop'];
    const scrollBottom = (document.documentElement['scrollHeight'] || document.body['scrollHeight']) - document.documentElement.clientHeight;

    const scrollPercent = parseFloat((scrollTop / scrollBottom * 100).toFixed(0));

    return scrollPercent
  }