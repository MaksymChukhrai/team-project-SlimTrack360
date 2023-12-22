import { useState, useEffect } from 'react';
import { theme } from '../../../styles/index';
import {
  WaterInfoCard,
  WaterTitle,
  InfoNumber,
  Span,
  InfoWrap,
  Level,
  InfoTitle,
  LeftInfo,
  LeftNumber,
  Button,
  ButtonTrash,
  ValueWrap,
  Bar,
  Percentage,
} from './WaterInfo.styled';
import Icon from '../../common/Icon';
import { WaterChart } from '../WaterChart/WaterChart';
import { ModalTakeWater } from '../../ModalTakeWater/ModalTakeWater';
import { useDispatch, useSelector } from 'react-redux';
import { selectValue } from '../../../Redux/waterIntake/selector';
import { date } from '../../../utils/dateToday.js';
import { getWaterToday } from '../../../Redux/waterIntake/operations.js';
import { resetWater } from '../../../Redux/waterIntake/operations.js';

export const WaterInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalWaterToday = useSelector(selectValue);
  console.log(totalWaterToday);
  const dispatch = useDispatch();

  let waterGoal = 1000;
  const leftWaterIntake = waterGoal - totalWaterToday;

  const waterPercent =
    totalWaterToday <= waterGoal
      ? Math.round((totalWaterToday * 100) / waterGoal)
      : 100;

  const offset =
    waterPercent <= 84 ? Math.ceil((waterPercent / 100) * 176 + 10) : 88;
  const changedColor = waterPercent <= 84 ? 'rgba(182, 195, 255, 1)' : 'green';

  useEffect(() => {
    const dateToday = {
      date,
    };
    dispatch(getWaterToday(dateToday));
  }, [dispatch, totalWaterToday]);

  const handleOpenModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        handleOpenModal();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isModalOpen]);

  const handleOnDelete = (e) => {
    e.preventDefault();
    const dateToday = {
      date,
    };
    console.log(dateToday);
    dispatch(resetWater(dateToday));
  };

  return (
    <div>
      <WaterTitle>Water</WaterTitle>
      <WaterInfoCard>
        <Level>
          <Bar>
            <Percentage $changedColor={changedColor} $offset={offset}>
              {`${waterPercent}%`}
            </Percentage>
            <WaterChart waterIntake={waterPercent} />
          </Bar>
        </Level>
        <InfoWrap>
          <InfoTitle>Water consumption</InfoTitle>
          <ValueWrap>
            <InfoNumber>
              {totalWaterToday}
              <Span>ml</Span>
            </InfoNumber>
            <LeftInfo>
              left:
              <LeftNumber>
                {leftWaterIntake > 0 ? leftWaterIntake : 0}
              </LeftNumber>
              <Span>ml</Span>
            </LeftInfo>
          </ValueWrap>
          <Button onClick={handleOpenModal}>
            <Icon name={'icon-add-converted'} width={'16px'} height={'16px'} />
            Add water intake
          </Button>
          <ButtonTrash onClick={handleOnDelete}>
            <Icon
              name={'icon-trash-03'}
              width={'20px'}
              height={'20px'}
              fill={`${theme.color.primaryLiteGreen}`}
            />
          </ButtonTrash>
        </InfoWrap>
      </WaterInfoCard>
      {isModalOpen && <ModalTakeWater onClose={handleOpenModal} />}
    </div>
  );
};
