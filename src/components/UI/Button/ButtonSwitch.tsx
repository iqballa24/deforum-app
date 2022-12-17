import React from 'react';
import { ButtonSwitchProps } from 'lib/types';
import classes from '@/styles/Switch.module.css';

const ButtonSwitch: React.FC<ButtonSwitchProps> = ({
  onChange,
  isChecked,
  icon,
}) => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" onChange={onChange} checked={isChecked} />
      <span className={classes.slider}></span>
      {isChecked ? (
        <icon.iconLeft className={classes.icon_left} />
      ) : (
        <icon.iconRight className={classes.icon_right} />
      )}
    </label>
  );
};

export default ButtonSwitch;
