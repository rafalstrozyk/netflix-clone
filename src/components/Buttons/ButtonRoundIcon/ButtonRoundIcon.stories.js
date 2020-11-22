import React from 'react';
import ButtonRoundIcon from 'components/Buttons/ButtonRoundIcon';
// import { ReactComponent as BellIcon } from 'assets/icons/bell.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/controller-play.svg';
// import { ReactComponent as CircleIcon } from 'assets/icons/info-with-circle.svg';
// import { ReactComponent as GlassIcon } from 'assets/icons/magnifying-glass.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as ThumbsDownIcon } from 'assets/icons/thumbs-down.svg';
import { ReactComponent as ThumbsUpIcon } from 'assets/icons/thumbs-up.svg';

export default {
  title: 'ButtonRoundIcon',
  component: ButtonRoundIcon,
};

export const buttopPlay = () => (
  <ButtonRoundIcon cloudText="something">
    <PlayIcon />
  </ButtonRoundIcon>
);
export const buttopPlaySecondary = () => (
  <ButtonRoundIcon secondary>
    <PlayIcon />
  </ButtonRoundIcon>
);
export const buttopPlus = () => (
  <ButtonRoundIcon>
    <PlusIcon />
  </ButtonRoundIcon>
);
export const buttopThumbs1 = () => (
  <ButtonRoundIcon>
    <ThumbsUpIcon />
  </ButtonRoundIcon>
);
export const buttopThumbs2 = () => (
  <ButtonRoundIcon>
    <ThumbsDownIcon />
  </ButtonRoundIcon>
);
