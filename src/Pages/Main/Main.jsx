import { theme } from '../../styles/index';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/index';
import {
  Container,
  TitleWrap,
  MainTitle,
  GoalLink,
  TextLink,
  BlocksWrap,
} from './Main.styled';
import { DailyGoal } from '../../components/MainPage/DailyGoal/DailyGoal';
import Icon from '../../components/common/Icon';
import { WaterInfo } from '../../components/MainPage/WaterInfo/WaterInfo';
import { FoodInfo } from '../../components/MainPage/FoodInfo/FoodInfo';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <TitleWrap>
          <MainTitle>Today</MainTitle>
          <GoalLink to="/dashboard">
            <TextLink>On the way to the goal</TextLink>
            <Icon
              name={'icon-arrow-right'}
              width={'16px'}
              height={'16px'}
              fill={`${theme.color.primaryGrey}`}
            />
          </GoalLink>
        </TitleWrap>
        <BlocksWrap>
          <DailyGoal />
          <WaterInfo />
          <FoodInfo />
        </BlocksWrap>
      </Container>
    </ThemeProvider>
  );
};

export default Main;
