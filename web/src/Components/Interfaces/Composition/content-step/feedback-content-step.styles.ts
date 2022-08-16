import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  width: 100%;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;

    .feedback {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      img {
        width: 24px;
        height: 24px;
      }

      .feedback-title {
        margin-left: 8px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #f4f4f5;
      }
    }
  }

  .feedback-type {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 32px 0 16px;

    .description {
      min-width: 304px;
      width: 100%;
      height: 112px;
      overflow: auto;
      border: 1px solid #52525b;
      border-radius: 4px;
      background: #18181b;
      resize: none;

      padding: 8px 12px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: #f4f4f5;
      cursor: pointer;

      ::-webkit-scrollbar-track {
        margin-right: 10px;
        color: #f4f4f5;
      }

      ::-webkit-scrollbar {
        width: 4px;
        height: 40px;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: #52525b;
      }

      ::placeholder {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: #a1a1aa;
      }

      :hover {
        transition: all 0.1s;
        outline: 2px solid #8257e5;
      }

      :focus {
        outline: 2px solid #8257e5;
      }
    }

    footer {
      display: flex;
      flex-direction: row;
      margin-top: 8px;

      .submit-feedback {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        background: rgba(130, 87, 229, 0.5);
        border-radius: 4px;
        margin-left: 8px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #ffffff;

        > svg {
          animation-name: spin;
          animation-duration: 5000ms;
          animation-iteration-count: infinite;
          animation-timing-function: linear;

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        }

        :disabled {
          background: #8257e5;
          opacity: 0.5;
        }

        :not(:disabled) {
          transition: all 0.5s;
          background: #8257e5;
          cursor: pointer;
        }
      }
    }
  }
`;
