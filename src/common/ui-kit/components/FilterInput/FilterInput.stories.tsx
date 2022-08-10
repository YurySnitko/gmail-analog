import FilterInput from './FilterInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, useEffect, useState } from 'react';

export default {
  title: 'UI-KIT/FilterInput',
  component: FilterInput,
} as ComponentMeta<typeof FilterInput>;

const Template: ComponentStory<typeof FilterInput> = (args) => {
  const [data, setData] = useState<string>(args.value);

  useEffect(() => {
    setData(args.value);
  }, [args.value]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setData(event.target.value);
  };

  return <FilterInput value={data} changeHandler={changeHandler} />;
};

export const Input = Template.bind({});
Input.args = {
  value: 'value',
};
