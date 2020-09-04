import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const StyledTitleHeader = styled.h2`
  color: white;
  margin-bottom: 0;
`;

export const StyledIconClose = styled(MdClose)`
  color: white;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
