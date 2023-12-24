import {
  UserName,
  UserAva,
  UserLogoContainer,
  UserLogoText,
  ProfileBtn,
} from './../header.styled.js';
import icon from './../../../../assets/sprite.svg';
import { ProfileModal } from './../../../HeaderModals/ProfileModal/ProfileModal.jsx';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../Redux/userAuth/selector.js';
import { selectAvatarurl } from '../../../../Redux/userAuth/selector.js';

export const UserAvatar = ({ isProfileModalOpen, handleOpenModalProfile }) => {
  const user = useSelector(selectUser);

  const avatar = useSelector(selectAvatarurl);

  const defaultName = user.name ? user.name.slice(0, 1).toUpperCase() : 'A';

  return (
    // name && (
    <UserLogoContainer onClick={handleOpenModalProfile}>
      <UserName>{user.name}</UserName>
      {avatar ? (
        <UserAva>
          <img
            alt="avatar"
            style={{
              backgroundImage: `url(${avatar})`,
              width: '100%',
              height: '100%',
              borderRadius: '28px',
              border: ' 1px solid black',
            }}
          />
        </UserAva>
      ) : (
        <UserLogoText>{defaultName}</UserLogoText>
      )}

      <ProfileBtn>
        <svg>
          <use href={icon + '#icon-arrow-down'}></use>
        </svg>
      </ProfileBtn>
      {isProfileModalOpen && <ProfileModal onClose={handleOpenModalProfile} />}
    </UserLogoContainer>
  );
  // )
};
