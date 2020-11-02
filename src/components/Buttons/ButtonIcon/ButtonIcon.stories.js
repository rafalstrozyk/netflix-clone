import React from 'react';
import ButtonIcon from 'components/Buttons/ButtonIcon/ButtonIcon';
import { ReactComponent as BellIcon } from 'assets/icons/bell.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/controller-play.svg';
import { ReactComponent as CircleIcon } from 'assets/icons/info-with-circle.svg';
import { ReactComponent as GlassIcon } from 'assets/icons/magnifying-glass.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as ThumbsDownIcon } from 'assets/icons/thumbs-down.svg';
import { ReactComponent as ThumbsUpIcon } from 'assets/icons/thumbs-up.svg';

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
};

export const PrimaryButton = () => <ButtonIcon type="button" Icon={BellIcon} />;
export const PrimaryLink = () => <ButtonIcon type="a" Icon={BellIcon} />;
export const PrimarPlay = () => <ButtonIcon type="button" Icon={PlayIcon} />;
export const PrimaryCircle = () => <ButtonIcon type="button" Icon={CircleIcon} />;
export const PrimaryGlass = () => <ButtonIcon type="button" Icon={GlassIcon} />;
export const PrimaryPlus = () => <ButtonIcon type="button" Icon={PlusIcon} />;
export const PrimaryThumbsDown = () => <ButtonIcon type="button" Icon={ThumbsDownIcon} />;
export const PrimaryThumbsUp = () => <ButtonIcon type="button" Icon={ThumbsUpIcon} />;
