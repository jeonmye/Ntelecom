import activationMethodsBtnImg from '../assets/images/button/activationMethodsBtnImg.png';
import callBtnImg from '../assets/images/button/callBtnImg.png';
import chatBtnImg from '../assets/images/button/chatBtnImg.png';
const BANNER_BUTTON_LIST = [
  { src: activationMethodsBtnImg, alt: '개통방법 알아보기', path: '/open-cellphone' },
  { src: callBtnImg, alt: '전화 상담', href: 'tel:010-8667-4402' },
  {
    src: chatBtnImg,
    alt: '채널톡 상담',
    handleOnClick: () => kakaoChatStart(),
  },
];

export default BANNER_BUTTON_LIST;
