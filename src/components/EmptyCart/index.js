import React from 'react';
import LottieView from 'lottie-react-native';

import emptyCartAnimation from '../../../EmptyCartAnimation.json';

import {
  Container,
  EmptyCartContainer,
  EmptyContainer,
  EmptyCartText,
} from './styles';

export default function EmptyCart() {
  return (
    <Container>
      <EmptyCartText>Seu carrinho está vázio</EmptyCartText>

      <EmptyContainer />

      <EmptyCartContainer>
        <LottieView
          source={emptyCartAnimation}
          resizeMode="contain"
          autoPlay
          loop={false}
        />
      </EmptyCartContainer>
    </Container>
  );
}
