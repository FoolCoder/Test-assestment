import {dashboard, media, more, watch} from '../constant/image';

export const tabs = [
  {
    img: dashboard,
    title: 'Dashoard',
    isShow: true,
    route: 'Dashoard',
  },
  {
    img: watch,
    title: 'Watch',
    isShow: true,
    route: 'MovieStack',
  },
  {
    img: media,
    title: 'Media Library',
    isShow: true,
    route: 'Media',
  },
  {
    img: more,
    title: 'More',
    isShow: true,
    route: 'More',
  },
];
