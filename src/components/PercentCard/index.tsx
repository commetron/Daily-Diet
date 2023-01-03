import { PercentCardProps } from './PercentCardProps';
import * as Styled from './styles';

import { Highlight } from '@components/Highlight';

export const PercentCard = ({ type, title, onPress }: PercentCardProps) => {
  return (
    <Styled.Container type={type}>
      <Highlight title={title} subtitle="das refeições dentro da dieta" />
      <Styled.Button onPress={onPress}>
        <Styled.Icon name="arrow-up-right" type={type} />
      </Styled.Button>
    </Styled.Container>
  );
};
