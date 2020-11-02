import React from 'react';
import ButtonPrimary from 'components/Buttons/Button/Button';
// import { ReactComponent as BellIcon } from 'assets/icons/bell.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/controller-play.svg';
// import { ReactComponent as CircleIcon } from 'assets/icons/info-with-circle.svg';
// import { ReactComponent as GlassIcon } from 'assets/icons/magnifying-glass.svg';
// import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
// import { ReactComponent as ThumbsDownIcon } from 'assets/icons/thumbs-down.svg';
// import { ReactComponent as ThumbsUpIcon } from 'assets/icons/thumbs-up.svg';

export default {
  title: 'ButtonPrimary',
  component: ButtonPrimary,
};

export const PrimaryButton = () => <ButtonPrimary />;
export const LabelButton = () => <ButtonPrimary hasLabel="Odtwórz" />;
export const LabelButtonSecondary = () => <ButtonPrimary hasLabel="Odtwórz" secondary />;
export const Icon = () => <ButtonPrimary hasIcon={PlayIcon} />;
export const IconSecondary = () => <ButtonPrimary hasIcon={PlayIcon} secondary />;
export const LabelIcon = () => <ButtonPrimary hasIcon={PlayIcon} hasLabel="Odtwórz" />;
export const LabelIconSecondary = () => (
  <ButtonPrimary hasIcon={PlayIcon} hasLabel="Odtwórz" secondary />
);
