import styled from "styled-components";

export const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 2.5rem;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: 550px) {
    padding: 0 0.75rem;
  }
`;

export const Wrapper = styled.div`
  padding: 1.25rem;
  padding-top: 0;

  display: flex;
  flex-direction: column-reverse;
  max-height: calc(100vh - 3.75rem);
  overflow-y: auto;
`;

export const CmdNotFound = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

export const Empty = styled.div`
  margin-bottom: 0.25rem;
`;

export const MobileSpan = styled.span`
  line-height: 1.5rem;
  margin-right: 0.75rem;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const MobileBr = styled.br`
  @media (min-width: 550px) {
    display: none;
  }
`;

export const Form = styled.form`
  @media (min-width: 550px) {
    display: flex;
  }
`;

export const Input = styled.input`
  flex-grow: 1;

  @media (max-width: 550px) {
    min-width: 85%;
  }
`;

export const Hints = styled.span`
  margin-right: 0.875rem;
`;
